import { app, BrowserWindow, Tray, Menu, ipcMain, nativeImage, shell, screen } from 'electron'
import path from 'path'
import fs from 'fs'
import os from 'os'
import { fileURLToPath } from 'url'
import configStore from './src/store/configStore.js'
import printerManager from './src/services/printerManager.js'
import printService from './src/services/printService.js'
import socketService from './src/services/socketService.js'
import statsService from './src/services/statsService.js'
import {
  initAutoUpdate,
  checkForUpdates,
  safeQuitAndInstall,
  isUpdateDownloaded,
  getDownloadedVersion,
  onUpdateDownloaded,
} from './src/services/updateService.js'
import { APP_ID, APP_NAME, APP_VERSION } from './src/config/constants.js'
import logger from './src/utils/logger.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Windows 7 (NT 6.1) / legacy integrated GPU compatibility guard:
// Disables GPU hardware acceleration on Windows 7/8 (NT 6.x) to prevent blank/black renderer windows.
if (process.platform === 'win32' && /^6\./.test(os.release())) {
  try {
    app.disableHardwareAcceleration()
  } catch {
    // Ignore if called after app ready
  }
}

let mainWindow = null
let tray = null
let agentStatus = { status: 'DISCONNECTED', details: {} }
const counterPopupWindows = new Map()

function getAppVersionString() {
  return app?.getVersion?.() || APP_VERSION
}

function resolveAppIconPath() {
  const icoPath = path.join(__dirname, 'assets/icon.ico')
  const pngPath = path.join(__dirname, 'assets/icon.png')
  return fs.existsSync(icoPath) ? icoPath : pngPath
}

try {
  logger.setLogDirectory(path.join(app.getPath('userData'), 'logs'))
} catch {
  // Handled by default getUserDataPath fallback inside logger
}

logger.onLog((entry) => {
  if (mainWindow && !mainWindow.isDestroyed() && mainWindow.webContents) {
    try {
      mainWindow.webContents.send('agent-log', entry)
    } catch {
      // Ignore closed webContents error
    }
  }
})

logger.onClear((info) => {
  if (mainWindow && !mainWindow.isDestroyed() && mainWindow.webContents) {
    try {
      mainWindow.webContents.send('agent-logs-cleared', info)
    } catch {
      // Ignore closed webContents error
    }
  }
})

process.on('uncaughtException', (err) => {
  logger.error('Fatal', 'Uncaught Exception (agent stayed alive):', err)
})

process.on('unhandledRejection', (reason) => {
  logger.error('Fatal', 'Unhandled Promise Rejection (agent stayed alive):', reason)
})

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  logger.warn('Main', 'Another instance of Scan&Print Agent is already running. Quitting duplicate instance...')
  app.quit()
  process.exit(0)
} else {
  app.on('second-instance', () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.show()
      mainWindow.focus()
    }
  })
}

function createDesktopShortcut() {
  if (process.platform !== 'win32') {
    return { success: false, message: 'Only Windows is supported for desktop shortcuts.' }
  }

  try {
    const desktopPath = app.getPath('desktop')
    const targetExe = process.execPath

    let iconLocation = targetExe
    try {
      const safeIcoPath = path.join(app.getPath('userData'), 'icon.ico')
      const bundledIco = path.join(__dirname, 'assets/icon.ico')
      if (fs.existsSync(bundledIco)) {
        fs.writeFileSync(safeIcoPath, fs.readFileSync(bundledIco))
        iconLocation = safeIcoPath
      }
    } catch {
      // Fallback to executable icon
    }

    const shortcutOptions = {
      target: targetExe,
      cwd: path.dirname(targetExe),
      description: 'Scan&Print Automated Desktop Print Agent',
      icon: iconLocation,
      iconIndex: 0,
      appUserModelId: APP_ID,
    }

    const shortcutPath = path.join(desktopPath, `${APP_NAME}.lnk`)
    const operation = fs.existsSync(shortcutPath) ? 'replace' : 'create'
    const success = shell.writeShortcutLink(shortcutPath, operation, shortcutOptions)

    try {
      const startMenuPath = path.join(app.getPath('appData'), 'Microsoft', 'Windows', 'Start Menu', 'Programs')
      if (fs.existsSync(startMenuPath)) {
        const startMenuShortcut = path.join(startMenuPath, `${APP_NAME}.lnk`)
        const smOp = fs.existsSync(startMenuShortcut) ? 'replace' : 'create'
        shell.writeShortcutLink(startMenuShortcut, smOp, shortcutOptions)
      }
    } catch (smErr) {
      logger.warn('Main', `Start menu shortcut note: ${smErr.message}`)
    }

    logger.success('Main', `Desktop shortcut ensured with icon at: ${shortcutPath}`)
    return { success, path: shortcutPath }
  } catch (err) {
    logger.error('Main', `Desktop shortcut creation error: ${err.message}`)
    return { success: false, message: err.message }
  }
}

function createMainWindow() {
  const isWindows10OrLater = process.platform === 'win32' && !/^6\./.test(os.release())

  mainWindow = new BrowserWindow({
    width: 1120,
    height: 760,
    minWidth: 940,
    minHeight: 620,
    resizable: true,
    autoHideMenuBar: true,
    show: false,
    title: 'Scan&Print — Desktop Print Agent',
    icon: resolveAppIconPath(),
    backgroundColor: '#09090b',
    ...(isWindows10OrLater
      ? {
          titleBarStyle: 'hidden',
          titleBarOverlay: {
            color: '#09090b',
            symbolColor: '#ffffff',
            height: 34,
          },
        }
      : {}),
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  mainWindow.setMenu(null)
  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadFile(path.join(__dirname, 'src/ui/index.html'))

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.setZoomFactor(1)
    mainWindow.webContents.setVisualZoomLevelLimits(1, 1)
  })

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && ['+', '-', '=', '_', '0', 'NumpadAdd', 'NumpadSubtract'].includes(input.key)) {
      event.preventDefault()
    }
  })

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://') || url.startsWith('http://')) {
      shell.openExternal(url)
    }
    return { action: 'deny' }
  })

  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) {
      event.preventDefault()
      shell.openExternal(url)
    }
  })

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      if (isUpdateDownloaded() && (!printService?.activePrintingJobs || printService.activePrintingJobs.size === 0)) {
        app.isQuitting = true
        socketService.disconnect()
        app.quit()
        return
      }
      event.preventDefault()
      mainWindow.hide()
    }
    return false
  })
}

function createTrayIcon(status) {
  let iconFileName = 'tray-disconnected.png'
  if (status === 'CONNECTED') {
    iconFileName = 'tray-connected.png'
  } else if (status === 'UNCONFIGURED') {
    iconFileName = 'tray-unconfigured.png'
  }

  const iconPath = path.join(__dirname, 'assets', iconFileName)
  if (fs.existsSync(iconPath)) {
    return nativeImage.createFromPath(iconPath).resize({ width: 24, height: 24 })
  }
  return nativeImage.createFromPath(path.join(__dirname, 'assets/icon.png')).resize({ width: 24, height: 24 })
}

function updateTrayMenu() {
  if (!tray) return

  const { status, details } = agentStatus
  let statusText = 'Disconnected (Server Offline)'
  if (status === 'CONNECTED') statusText = `Connected (${details.shopId || 'Online'})`
  else if (status === 'UNCONFIGURED') statusText = 'Unconfigured'

  const menuTitle = `${APP_NAME} v${getAppVersionString()}`.replace(/&/g, '&&')

  const contextMenu = Menu.buildFromTemplate([
    { label: menuTitle, enabled: false },
    { label: `Status: ${statusText}`, enabled: false },
    {
      label: isUpdateDownloaded()
        ? `Restart && Install Update (v${getDownloadedVersion() || 'Ready'})`
        : 'Restart && Install Update',
      enabled: isUpdateDownloaded(),
      click: () => {
        safeQuitAndInstall()
      },
    },
    {
      label: 'Check for Updates…',
      click: () => {
        checkForUpdates(true)
      },
    },
    { type: 'separator' },
    {
      label: 'Open Settings && Dashboard',
      click: () => {
        if (mainWindow) {
          mainWindow.show()
          mainWindow.focus()
        }
      },
    },
    {
      label: 'Reconnect to Server',
      click: () => {
        socketService.reconnect()
      },
    },
    { type: 'separator' },
    {
      label: 'Exit Agent',
      click: () => {
        app.isQuitting = true
        socketService.disconnect()
        app.quit()
      },
    },
  ])

  tray.setContextMenu(contextMenu)
  tray.setToolTip(`${APP_NAME} — ${statusText}`)
  tray.setImage(createTrayIcon(status))
}

function setupTray() {
  tray = new Tray(createTrayIcon('DISCONNECTED'))
  updateTrayMenu()

  tray.on('double-click', () => {
    if (mainWindow) {
      mainWindow.show()
      mainWindow.focus()
    }
  })
}

function setupIpcHandlers() {
  ipcMain.handle('get-config', () => {
    return configStore.getAll()
  })

  ipcMain.handle('save-config', (event, newConfig) => {
    const previousConfig = configStore.getAll()
    const success = configStore.saveConfig(newConfig)

    if (success) {
      const connectionFieldsChanged =
        ('shopId' in newConfig && newConfig.shopId !== previousConfig.shopId) ||
        ('secretKey' in newConfig && newConfig.secretKey !== previousConfig.secretKey)

      if (connectionFieldsChanged) {
        socketService.reconnect()
      }

      if (typeof newConfig.autoStartOnBoot === 'boolean') {
        app.setLoginItemSettings({
          openAtLogin: newConfig.autoStartOnBoot,
          openAsHidden: true,
          path: process.execPath,
        })
      }

      if (newConfig.defaultBwPrinter || newConfig.defaultColorPrinter || newConfig.defaultDuplexPrinter) {
        try {
          if (socketService.socket && socketService.socket.connected) {
            const savedConfig = configStore.getAll()
            socketService.socket.emit('AGENT_PRINTER_ASSIGNMENT_UPDATED', {
              shopId: savedConfig.shopId,
              defaultBwPrinter: savedConfig.defaultBwPrinter,
              defaultColorPrinter: savedConfig.defaultColorPrinter,
              defaultDuplexPrinter: savedConfig.defaultDuplexPrinter,
            })
          }
        } catch (err) {
          logger.warn('Main', `Could not emit printer update to cloud: ${err.message}`)
        }
      }
    }
    return success
  })

  ipcMain.handle('get-shop-stats', () => {
    return statsService.getSnapshot()
  })

  ipcMain.handle('get-recent-logs', () => {
    return logger.getRecentEntries()
  })

  ipcMain.handle('clear-logs', () => {
    logger.clearLogs('Log history cleared by user.')
    return true
  })

  ipcMain.handle('get-printers', async (event, forceRefresh = false) => {
    return await printerManager.getAvailablePrinters(2, 1000, forceRefresh)
  })

  ipcMain.handle('get-printers-status', async (event, forceRefresh = false) => {
    return await printerManager.getPrintersWithCapabilities(forceRefresh)
  })

  ipcMain.handle('test-print', async (event, printerName, mode = 'Black & White') => {
    return await printerManager.testPrint(printerName, mode)
  })

  ipcMain.handle('create-desktop-shortcut', () => {
    return createDesktopShortcut()
  })

  ipcMain.handle('open-logs-folder', () => {
    const logsDir = path.join(app.getPath('userData'), 'logs')
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true })
    }
    shell.openPath(logsDir)
    return true
  })

  ipcMain.handle('reconnect-socket', () => {
    socketService.reconnect()
    return true
  })

  ipcMain.handle('exit-app', () => {
    app.isQuitting = true
    socketService.disconnect()
    app.quit()
  })

  ipcMain.handle('get-app-version', () => {
    return getAppVersionString()
  })

  ipcMain.handle('check-for-updates', () => {
    checkForUpdates(true)
    return {
      isUpdateReady: isUpdateDownloaded(),
      downloadedVersion: getDownloadedVersion(),
    }
  })

  ipcMain.handle('install-update', () => {
    return safeQuitAndInstall()
  })

  ipcMain.handle('get-update-status', () => {
    return {
      isUpdateReady: isUpdateDownloaded(),
      downloadedVersion: getDownloadedVersion(),
      currentVersion: getAppVersionString(),
    }
  })

  ipcMain.handle('approve-counter-order', async (event, jobId) => {
    logger.success('Main', `Shopkeeper Approved Counter Order #${jobId}`)
    const entry = counterPopupWindows.get(jobId)
    const jobData =
      entry?.jobData ||
      socketService.heldJobs?.get(jobId) ||
      statsService.getSnapshot()?.recentJobs?.find((j) => j.jobId === jobId)

    if (entry?.win && !entry.win.isDestroyed()) {
      entry.win.close()
    }
    counterPopupWindows.delete(jobId)

    if (!jobData) {
      return { success: false, error: 'Job data not found' }
    }

    return await socketService.executeAndReportJob(jobData, 'COUNTER_APPROVED')
  })

  ipcMain.handle('deny-counter-order', async (event, jobId) => {
    logger.warn('Main', `Shopkeeper Denied/Rejected Counter Order #${jobId}`)
    const entry = counterPopupWindows.get(jobId)
    const jobData = entry?.jobData || socketService.heldJobs?.get(jobId) || { jobId }

    if (entry?.win && !entry.win.isDestroyed()) {
      entry.win.close()
    }
    counterPopupWindows.delete(jobId)

    if (socketService.heldJobs) {
      socketService.heldJobs.delete(jobId)
    }

    printService.cleanupPreDownloaded(jobId)

    const cancelledPayload = {
      ...jobData,
      jobId,
      status: 'REJECTED',
      errorMessage: 'Cancelled by Shopkeeper at Counter',
    }
    statsService.recordJobEvent('CANCELLED', cancelledPayload)
    socketService.notifyJobEvent('CANCELLED', cancelledPayload)

    if (socketService.socket && socketService.socket.connected) {
      socketService.socket.emit('JOB_FAILED', {
        jobId,
        error: 'Cancelled by Shopkeeper at Counter',
      })
    }
    return { success: true }
  })

  ipcMain.handle('get-counter-order', (event) => {
    for (const [, entry] of counterPopupWindows.entries()) {
      if (entry.win?.webContents?.id === event.sender.id) {
        return entry.jobData
      }
    }
    const entries = Array.from(counterPopupWindows.values())
    return entries[entries.length - 1]?.jobData || null
  })
}

function showCounterOrderPopup(jobData) {
  if (!jobData?.jobId) return

  logger.job('Main', `Triggering Counter Order Approval Popup for Job #${jobData.jobId}`)

  printService.preDownloadJobFile(jobData).catch((err) => {
    logger.warn('Main', `Background pre-download note for #${jobData.jobId}:`, err.message)
  })

  const existing = counterPopupWindows.get(jobData.jobId)
  if (existing?.win && !existing.win.isDestroyed()) {
    existing.win.show()
    existing.win.focus()
    return
  }

  const popupWidth = 400
  const popupHeight = 300
  let x = 100
  let y = 100

  try {
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.workAreaSize
    x = Math.max(10, width - popupWidth - 25)
    y = Math.max(10, height - popupHeight - 25)
  } catch (sErr) {
    logger.warn('Main', 'Screen geometry note:', sErr.message)
  }

  const popupWin = new BrowserWindow({
    width: popupWidth,
    height: popupHeight,
    useContentSize: true,
    x,
    y,
    show: false,
    alwaysOnTop: true,
    resizable: false,
    maximizable: false,
    minimizable: true,
    autoHideMenuBar: true,
    skipTaskbar: false,
    title: 'Scan&Print — Counter Order',
    icon: resolveAppIconPath(),
    backgroundColor: '#09090b',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  popupWin.setMenu(null)
  popupWin.setMenuBarVisibility(false)
  if (typeof popupWin.removeMenu === 'function') {
    popupWin.removeMenu()
  }

  popupWin.loadFile(path.join(__dirname, 'src/ui/counter-popup.html'))

  popupWin.webContents.on('did-finish-load', async () => {
    try {
      const contentHeight = await popupWin.webContents.executeJavaScript('document.body.scrollHeight')
      const finalHeight = Math.min(Math.max(Math.ceil(contentHeight) + 2, 220), 500)
      popupWin.setContentSize(popupWidth, finalHeight)
      const primaryDisplay = screen.getPrimaryDisplay()
      const { width, height } = primaryDisplay.workAreaSize
      popupWin.setPosition(Math.max(10, width - popupWidth - 25), Math.max(10, height - finalHeight - 25))
    } catch (sizeErr) {
      logger.warn('Main', 'Popup auto-size note:', sizeErr.message)
    }
    popupWin.show()
    popupWin.focus()
    popupWin.setAlwaysOnTop(true)
    if (typeof popupWin.moveTop === 'function') popupWin.moveTop()
    popupWin.flashFrame(true)
    popupWin.webContents.send('counter-order-data', jobData)
  })

  popupWin.webContents.on('did-fail-load', (e, errorCode, errorDescription) => {
    logger.error('Main', `Failed to load counter-popup.html: ${errorCode} - ${errorDescription}`)
  })

  popupWin.on('closed', () => {
    counterPopupWindows.delete(jobData.jobId)
  })

  counterPopupWindows.set(jobData.jobId, { win: popupWin, jobData })
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)

  logger.box('SCAN&PRINT DESKTOP PRINT AGENT', [
    `Version       : v${getAppVersionString()}`,
    `Platform      : ${process.platform} ${os.release()} (${process.arch})`,
    `Zero-Click    : Enabled (Windows 7 / 10 / 11 Spooler)`,
    `Process PID   : ${process.pid}`,
  ])
  logger.ready('Main', 'Scan&Print Agent engine initialized.')

  if (process.platform === 'win32') {
    app.setAppUserModelId(APP_ID)
    createDesktopShortcut()
  }

  setupIpcHandlers()
  createMainWindow()
  setupTray()

  socketService.setCounterPopupHandler((jobData) => {
    showCounterOrderPopup(jobData)
  })

  const { autoStartOnBoot, shopId } = configStore.getAll()
  app.setLoginItemSettings({
    openAtLogin: autoStartOnBoot !== false,
    openAsHidden: true,
    path: process.execPath,
  })

  socketService.onStatusChange((status, details) => {
    agentStatus = { status, details }
    updateTrayMenu()

    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('agent-status-update', { status, details })
    }
  })

  socketService.onJobEvent((eventType, jobData) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('incoming-job', { ...jobData, eventType })
    }
  })

  statsService.onStatsUpdated((snapshot) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('shop-stats-updated', snapshot)
    }
  })

  if (shopId) {
    statsService.syncFromDatabase(shopId).catch(() => {})
  }
  socketService.connect()

  initAutoUpdate({
    onStatusChange: (status, payload) => {
      updateTrayMenu()
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('update-status-changed', {
          status,
          payload,
          currentVersion: getAppVersionString(),
          isUpdateReady: isUpdateDownloaded(),
          downloadedVersion: getDownloadedVersion(),
        })
      }
    },
  })

  onUpdateDownloaded((info) => {
    updateTrayMenu()
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('update-status-changed', {
        status: 'READY',
        payload: info?.version || getDownloadedVersion(),
        currentVersion: getAppVersionString(),
        isUpdateReady: true,
        downloadedVersion: info?.version || getDownloadedVersion(),
      })
    }
  })

  socketService.onConfigUpdate((fullConfig) => {
    if (typeof fullConfig.autoStartOnBoot === 'boolean') {
      app.setLoginItemSettings({
        openAtLogin: fullConfig.autoStartOnBoot,
        openAsHidden: true,
        path: process.execPath,
      })
    }
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('config-updated', fullConfig)
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    // Keep running in system tray on Windows/Linux
  }
})
