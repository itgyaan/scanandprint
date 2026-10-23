import { app, dialog } from 'electron'
import { createRequire } from 'module'
import printService from './printService.js'
import { APP_VERSION } from '../config/constants.js'
import logger from '../utils/logger.js'

const require = createRequire(import.meta.url)
const { autoUpdater } = require('electron-updater')
const log = require('electron-log')

autoUpdater.logger = log
if (log?.transports?.console) {
  log.transports.console.level = false
}
if (autoUpdater.logger?.transports?.file) {
  autoUpdater.logger.transports.file.level = 'info'
}

let isUpdateReady = false
let downloadedVersion = ''
let checkIntervalTimer = null
let onStatusChangeCallback = null
const updateListeners = []

autoUpdater.autoDownload = true
autoUpdater.autoInstallOnAppQuit = true
autoUpdater.allowPrerelease = false
autoUpdater.allowDowngrade = false

function getCurrentVersion() {
  return app?.getVersion?.() || APP_VERSION
}

autoUpdater.on('checking-for-update', () => {
  log.info('[UpdateService] Checking for updates on GitHub...')
  logger.info('UpdateService', 'Checking for updates on GitHub...')
  if (onStatusChangeCallback) {
    onStatusChangeCallback('CHECKING')
  }
})

autoUpdater.on('update-available', (info) => {
  const ver = info?.version || 'unknown'
  log.info(`[UpdateService] Update available: v${ver}. Background download initiated...`)
  logger.success('UpdateService', `Update available: v${ver}. Background download initiated...`)
  if (onStatusChangeCallback) {
    onStatusChangeCallback('DOWNLOADING', ver)
  }
})

autoUpdater.on('update-not-available', (info) => {
  const currentVer = getCurrentVersion()
  log.info(`[UpdateService] Up to date (Current: v${currentVer}, Latest: v${info?.version || currentVer}).`)
  logger.info('UpdateService', `Up to date (Current: v${currentVer}, Latest: v${info?.version || currentVer}).`)
  if (onStatusChangeCallback) {
    onStatusChangeCallback('UP_TO_DATE', { currentVer, latestVer: info?.version || currentVer })
  }
})

autoUpdater.on('download-progress', (progressObj) => {
  const percent = Math.round(progressObj?.percent || 0)
  log.info(
    `[UpdateService] Download progress: ${percent}% (${Math.round((progressObj?.transferred || 0) / 1024)} KB / ${Math.round((progressObj?.total || 0) / 1024)} KB)`
  )
  if (percent % 25 === 0) {
    logger.info('UpdateService', `Download progress: ${percent}%`)
  }
  if (onStatusChangeCallback) {
    onStatusChangeCallback('DOWNLOADING_PROGRESS', percent)
  }
})

autoUpdater.on('update-downloaded', (info) => {
  isUpdateReady = true
  downloadedVersion = info?.version || getCurrentVersion()
  log.info(`[UpdateService] Update downloaded successfully and verified: v${downloadedVersion}`)
  logger.success('UpdateService', `Update downloaded & verified: v${downloadedVersion}. Ready on app restart.`)

  if (onStatusChangeCallback) {
    onStatusChangeCallback('READY', downloadedVersion)
  }

  updateListeners.forEach((cb) => {
    try {
      cb(info)
    } catch (err) {
      log.error('[UpdateService] Listener error:', err)
    }
  })
})

autoUpdater.on('error', (err) => {
  log.error('[UpdateService] Auto-update error:', err?.message || err)
  if (onStatusChangeCallback) {
    onStatusChangeCallback('ERROR', err?.message || String(err))
  }
})

export function checkForUpdates(isManual = false) {
  const currentVer = getCurrentVersion()
  if (!app || !app.isPackaged) {
    log.info('[UpdateService] App is running in unpackaged/dev mode; skipping autoUpdater check.')
    logger.info('UpdateService', 'App is running in unpackaged/dev mode; skipping autoUpdater check.')
    if (onStatusChangeCallback) {
      onStatusChangeCallback('DEV_MODE', { currentVer })
    }
    if (isManual) {
      dialog
        .showMessageBox({
          type: 'info',
          buttons: ['OK'],
          title: 'Development Mode',
          message: 'Auto-update is only active in packaged production builds.',
        })
        .catch(() => {})
    }
    return { success: false, reason: 'DEV_MODE' }
  }

  try {
    log.info(`[UpdateService] Invoking checkForUpdates() (manual: ${isManual})...`)
    logger.info('UpdateService', `Invoking checkForUpdates() (manual: ${isManual})...`)
    autoUpdater.checkForUpdates().catch((err) => {
      log.error('[UpdateService] checkForUpdates promise rejected:', err?.message || err)
      logger.error('UpdateService', `checkForUpdates rejected: ${err?.message || err}`)
      if (onStatusChangeCallback) {
        onStatusChangeCallback('ERROR', err?.message || String(err))
      }
      if (isManual) {
        dialog
          .showMessageBox({
            type: 'info',
            buttons: ['OK'],
            title: 'Update Check',
            message: 'Could not connect to update server. Please check your internet connection and try again later.',
          })
          .catch(() => {})
      }
    })
  } catch (err) {
    log.error('[UpdateService] Exception in checkForUpdates:', err?.message || err)
    logger.error('UpdateService', `Exception in checkForUpdates: ${err?.message || err}`)
    if (onStatusChangeCallback) {
      onStatusChangeCallback('ERROR', err?.message || String(err))
    }
  }
}

export function safeQuitAndInstall() {
  if (!isUpdateReady) {
    log.warn('[UpdateService] safeQuitAndInstall called but isUpdateReady is false.')
    logger.warn('UpdateService', 'safeQuitAndInstall called but isUpdateReady is false.')
    return false
  }

  if (printService?.activePrintingJobs?.size > 0) {
    log.warn(`[UpdateService] Active print jobs in flight (${printService.activePrintingJobs.size}). Deferring restart.`)
    logger.warn('UpdateService', `Active print jobs in flight (${printService.activePrintingJobs.size}). Deferring restart.`)
    dialog
      .showMessageBox({
        type: 'warning',
        buttons: ['OK'],
        title: 'Printing in Progress',
        message: 'A document is currently printing.',
        detail:
          'To prevent paper jams or lost customer jobs, the update will install automatically when Scan&Print Agent is restarted later.',
      })
      .catch(() => {})
    return false
  }

  log.info('[UpdateService] Safe to install. Calling autoUpdater.quitAndInstall(false, true)...')
  logger.info('UpdateService', 'Safe to install. Calling autoUpdater.quitAndInstall(false, true)...')
  try {
    autoUpdater.quitAndInstall(false, true)
    return true
  } catch (err) {
    log.error('[UpdateService] Failed to execute quitAndInstall:', err)
    logger.error('UpdateService', 'Failed to execute quitAndInstall:', err?.message || err)
    return false
  }
}

export function isUpdateDownloaded() {
  return isUpdateReady
}

export function getDownloadedVersion() {
  return downloadedVersion
}

export function onUpdateDownloaded(callback) {
  if (typeof callback === 'function') {
    updateListeners.push(callback)
    if (isUpdateReady) {
      callback({ version: downloadedVersion })
    }
  }
}

export function initAutoUpdate(options = {}) {
  log.info('[UpdateService] Initializing end-to-end auto-update system...')
  logger.info('UpdateService', 'Initializing end-to-end auto-update system...')

  if (typeof options.onStatusChange === 'function') {
    onStatusChangeCallback = options.onStatusChange
  }

  setTimeout(() => {
    checkForUpdates(false)
  }, 10000)

  if (checkIntervalTimer) {
    clearInterval(checkIntervalTimer)
  }

  checkIntervalTimer = setInterval(
    () => {
      checkForUpdates(false)
    },
    6 * 60 * 60 * 1000
  )
}

export default {
  initAutoUpdate,
  checkForUpdates,
  safeQuitAndInstall,
  isUpdateDownloaded,
  getDownloadedVersion,
  onUpdateDownloaded,
}
