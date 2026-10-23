import { io } from 'socket.io-client'
import os from 'os'
import axios from 'axios'
import configStore from '../store/configStore.js'
import printService from './printService.js'
import printerManager from './printerManager.js'
import statsService from './statsService.js'
import {
  getDeviceFingerprint,
  getAccuratePhysicalIp,
  fetchPublicIp,
} from './deviceFingerprint.js'
import {
  APP_VERSION,
  DEFAULT_SERVER_URL,
  ALLOWED_CONFIG_KEYS,
  HEARTBEAT_INTERVAL_MS,
  APPROVAL_POLL_INTERVAL_MS,
  PRINT_COOLDOWN_MS,
} from '../config/constants.js'
import logger from '../utils/logger.js'

class SocketService {
  constructor() {
    this.socket = null
    this.isConnected = false
    this.statusListeners = []
    this.jobListeners = []
    this.configListeners = []
    this.hasLoggedOffline = false
    this.counterPopupHandler = null
    this.heldJobs = new Map()
    this.deviceInfo = null
    this.approvalPollTimer = null
    this.manualDisconnect = false
    this.heartbeatTimer = null
    this.processedAutoPrintJobs = new Map()
    this.lastExecutePrintNowAt = new Map()
  }

  onConfigUpdate(callback) {
    if (typeof callback === 'function') {
      this.configListeners.push(callback)
    }
  }

  _notifyConfigListeners(updatedConfig) {
    this.configListeners.forEach((cb) => {
      try {
        cb(updatedConfig)
      } catch (err) {
        logger.error('SocketService', 'Error in config update listener:', err.message)
      }
    })
  }

  _cleanupProcessedAutoPrintJobs() {
    const cutoff = Date.now() - 10 * 60 * 1000
    for (const [id, ts] of this.processedAutoPrintJobs) {
      if (ts < cutoff) this.processedAutoPrintJobs.delete(id)
    }
  }

  setCounterPopupHandler(handler) {
    this.counterPopupHandler = handler
  }

  onStatusChange(callback) {
    if (typeof callback === 'function') {
      this.statusListeners.push(callback)
    }
  }

  notifyStatusChange(status, details = {}) {
    this.statusListeners.forEach((cb) => cb(status, details))
  }

  onJobEvent(callback) {
    if (typeof callback === 'function') {
      this.jobListeners.push(callback)
    }
  }

  notifyJobEvent(eventType, jobData) {
    this.jobListeners.forEach((cb) => cb(eventType, jobData))
  }

  stopApprovalPolling() {
    if (this.approvalPollTimer) {
      clearInterval(this.approvalPollTimer)
      this.approvalPollTimer = null
    }
  }

  startApprovalPolling(targetServerUrl, shopId, fingerprint) {
    if (this.approvalPollTimer || !fingerprint) return

    logger.info(
      'SocketService',
      `Starting auto-approval polling for PC fingerprint (${fingerprint.slice(0, 12)}...)...`
    )
    this.approvalPollTimer = setInterval(async () => {
      try {
        const cleanServer = targetServerUrl.replace(/\/+$/, '')
        const checkUrl = `${cleanServer}/api/devices/check-status?shopCode=${encodeURIComponent(shopId)}&fingerprint=${encodeURIComponent(fingerprint)}`

        const res = await fetch(checkUrl)
        const json = await res.json()

        if (json?.success && json?.data?.isApproved) {
          logger.success('SocketService', 'PC Device APPROVED by Shop Owner! Establishing live connection...')
          this.stopApprovalPolling()
          this.connect()
        } else if (json?.data?.status === 'REJECTED' || json?.data?.status === 'REVOKED') {
          logger.warn('SocketService', `PC Device request was ${json.data.status}`)
          this.stopApprovalPolling()
          this.notifyStatusChange('DEVICE_REVOKED', {
            message: `This PC was ${json.data.status.toLowerCase()} by the Shop Owner.`,
            shopId,
          })
        }
      } catch {
        // Silent network retry
      }
    }, APPROVAL_POLL_INTERVAL_MS)
  }

  /**
   * Centralized print execution, live status reporting (PRINTING -> JOB_SUCCESS / JOB_FAILED),
   * UI event emission, and local stats ledger recording without extra HTTP API calls.
   */
  async executeAndReportJob(jobData, triggerSource = 'AUTO') {
    const jobId = jobData?.jobId
    if (!jobId) {
      throw new Error('Job ID is missing from print payload')
    }

    this.notifyJobEvent('DISPATCHED', { ...jobData, triggerSource })
    statsService.recordJobEvent('DISPATCHED', jobData)

    try {
      const result = await printService.executePrintJob(jobData, (progress) => {
        const printingPayload = {
          ...jobData,
          status: 'PRINTING',
          printedOn: progress?.printerName || '',
          printedPrinterName: progress?.printerName || '',
          printOptions: progress?.printOptions,
        }
        statsService.recordJobEvent('PRINTING', printingPayload)
        this.notifyJobEvent('PRINTING', printingPayload)
      })

      if (result?.status === 'ALREADY_IN_FLIGHT' || result?.status === 'RECENTLY_SPOOLED') {
        return { success: true, skipped: true, status: result.status }
      }

      const completedPayload = {
        ...jobData,
        status: 'PRINTED_SUCCESSFULLY',
        printedOn: result?.printedOn,
        printedPrinterName: result?.printedOn,
        totalPages: result?.pageCount || jobData?.totalPages || 1,
        printOptions: result?.printOptions,
        timestamp: result?.timestamp || new Date().toISOString(),
      }

      this.heldJobs.delete(jobId)
      this.notifyJobEvent('SUCCESS', completedPayload)
      statsService.recordJobEvent('SUCCESS', completedPayload)

      if (this.socket && this.socket.connected) {
        this.socket.emit('JOB_SUCCESS', {
          jobId,
          printedOn: result?.printedOn,
          printerName: result?.printedOn,
          printOptions: result?.printOptions,
          timestamp: completedPayload.timestamp,
        })
      }

      return { success: true, result: completedPayload }
    } catch (err) {
      logger.error('SocketService', `Failed to print job #${jobId} (${triggerSource}):`, err.message)
      const failedPayload = {
        ...jobData,
        status: 'PRINT_FAILED',
        error: err.message,
        errorMessage: err.message,
        printOptions: jobData?.printOptions,
      }

      this.notifyJobEvent('FAILED', failedPayload)
      statsService.recordJobEvent('FAILED', failedPayload)

      if (this.socket && this.socket.connected) {
        this.socket.emit('JOB_FAILED', {
          jobId,
          error: err.message,
          printOptions: jobData?.printOptions,
        })
      }

      return { success: false, error: err.message }
    }
  }

  _applyRemoteShopSettings(data = {}) {
    if (!data || typeof data !== 'object') return

    const updates = {}
    if (data.defaultBwPrinter) updates.defaultBwPrinter = data.defaultBwPrinter
    if (data.defaultColorPrinter) updates.defaultColorPrinter = data.defaultColorPrinter
    if (data.defaultDuplexPrinter) updates.defaultDuplexPrinter = data.defaultDuplexPrinter

    const planInfo = configStore.resolvePlanInfo(data)
    if (planInfo) {
      if (planInfo.planTier) updates.planTier = planInfo.planTier
      if (planInfo.maxPrinters) updates.maxPrinters = planInfo.maxPrinters
      if (planInfo.autoPrintMode) updates.autoPrintMode = planInfo.autoPrintMode
    }

    statsService.ingestShopPayload(data)

    if (Object.keys(updates).length > 0) {
      configStore.saveConfig(updates)
      this._notifyConfigListeners(configStore.getAll())
    }
  }

  async connect() {
    const config = configStore.getAll()
    const { shopId, secretKey, serverUrl } = config

    if (!shopId || !secretKey) {
      logger.info('SocketService', 'Shop ID or Secret Key missing. Waiting for configuration...')
      this.isConnected = false
      this.notifyStatusChange('UNCONFIGURED', { message: 'Shop ID or Secret Key not set' })
      return
    }

    if (this.socket && (this.socket.connected || this.socket.connecting)) {
      return
    }

    const cleanShopId = shopId.trim().toUpperCase()
    const cleanSecretKey = secretKey.trim()
    const targetServerUrl = serverUrl || DEFAULT_SERVER_URL
    const isLocal = /localhost|127\.0\.0\.1/i.test(targetServerUrl)
    const targetDisplay = isLocal ? `Local Dev (${targetServerUrl})` : 'Scan&Print Cloud Network'
    logger.info('SocketService', `Target: ${targetDisplay} (Shop: ${cleanShopId})`)

    this.manualDisconnect = false
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }

    this.hasLoggedOffline = false

    try {
      this.deviceInfo = await getDeviceFingerprint()
    } catch (err) {
      logger.error('SocketService', 'Hardware fingerprint error:', err)
      this.deviceInfo = { fingerprint: `FALLBACK_FINGERPRINT_${cleanShopId}`, meta: {} }
    }

    this.socket = io(targetServerUrl, {
      auth: {
        shopId: cleanShopId,
        secretKey: cleanSecretKey,
        agentType: 'DESKTOP_WIN_AGENT',
        deviceFingerprint: this.deviceInfo.fingerprint,
        deviceMeta: this.deviceInfo.meta,
      },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 5000,
      reconnectionDelayMax: 15000,
      timeout: 10000,
    })

    this.socket.on('connect', async () => {
      logger.success('SocketService', `Connected & Authorized! Socket ID: ${this.socket.id}`)
      this.isConnected = true
      this.manualDisconnect = false
      this.stopApprovalPolling()

      if (this.heartbeatTimer) clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = setInterval(() => {
        if (this.socket && this.socket.connected) {
          this.socket.emit('AGENT_HEARTBEAT', { shopId: cleanShopId, at: Date.now() })
        }
      }, HEARTBEAT_INTERVAL_MS)

      let availablePrinters = []
      try {
        availablePrinters = await printerManager.getAvailablePrinters()
        logger.info('SocketService', `Detected ${availablePrinters.length} local Windows printer(s)`)
      } catch (err) {
        logger.error('SocketService', 'Failed to detect local printers:', err.message)
      }

      const platformName =
        process.platform === 'win32' ? 'Windows' : process.platform === 'darwin' ? 'macOS' : 'Linux'
      const osPlatform = `${platformName} ${os.release()} (${process.arch}) - ${os.hostname()}`
      const [realLocalIp, publicWanIp] = await Promise.all([
        getAccuratePhysicalIp(),
        fetchPublicIp().catch(() => null),
      ])
      const effectiveIp = realLocalIp || publicWanIp || '127.0.0.1'

      this.socket.emit('AGENT_REGISTER', {
        shopId: cleanShopId,
        secretApiKey: cleanSecretKey,
        agentVersion: APP_VERSION,
        osArch: `${process.platform} (${process.arch})`,
        platform: process.platform,
        osPlatform,
        ipAddress: effectiveIp,
        localIp: realLocalIp,
        publicIp: publicWanIp,
        hostname: os.hostname(),
        printers: availablePrinters,
        deviceFingerprint: this.deviceInfo.fingerprint,
        deviceMeta: {
          ...this.deviceInfo.meta,
          ipAddress: effectiveIp,
          localIp: realLocalIp,
        },
      })

      this.hasLoggedOffline = false
      this.notifyStatusChange('CONNECTED', {
        socketId: this.socket.id,
        shopId: cleanShopId,
        deviceFingerprint: this.deviceInfo.fingerprint,
        hostname: os.hostname(),
      })

      // Single initial sync on connect: queued jobs + public shop configuration
      this.fetchQueuedJobs(targetServerUrl, cleanShopId, cleanSecretKey)
      statsService.syncFromDatabase(cleanShopId).catch(() => {})

      if (availablePrinters.length === 0) {
        setTimeout(async () => {
          try {
            const rescanned = await printerManager.getAvailablePrinters(2, 1000, true)
            if (rescanned.length > 0 && this.socket && this.socket.connected) {
              logger.info(
                'SocketService',
                `Delayed rescan found ${rescanned.length} printer(s), updating server...`
              )
              this.socket.emit('AGENT_PRINTERS_UPDATED', {
                shopId: cleanShopId,
                printers: rescanned,
              })
            }
          } catch (err) {
            logger.error('SocketService', `Delayed printer rescan failed: ${err.message}`)
          }
        }, 15000)
      }
    })

    this.socket.on('REQUEST_PRINTER_SCAN', async () => {
      try {
        logger.info('SocketService', 'Received remote printer rescan request...')
        const printers = await printerManager.getAvailablePrinters(2, 1000, true)
        this.socket.emit('AGENT_PRINTERS_UPDATED', {
          shopId: cleanShopId,
          printers,
        })
      } catch (err) {
        logger.error('SocketService', `Failed to rescan printers on remote request: ${err.message}`)
      }
    })

    this.socket.on('AGENT_CONFIG_UPDATE', (data) => {
      const updates = data?.updates
      if (!updates || typeof updates !== 'object') {
        logger.warn('SocketService', 'AGENT_CONFIG_UPDATE received with invalid or missing updates payload')
        if (this.socket && this.socket.connected) {
          this.socket.emit('AGENT_CONFIG_UPDATE_ACK', { applied: [], rejected: [] })
        }
        return
      }

      const applied = []
      const rejected = []
      const validUpdates = {}

      for (const [key, value] of Object.entries(updates)) {
        if (ALLOWED_CONFIG_KEYS.includes(key)) {
          validUpdates[key] = value
          applied.push(key)
        } else {
          rejected.push(key)
          logger.warn(
            'SocketService',
            `Rejected config update for key '${key}': Not allowed or protected identity setting`
          )
        }
      }

      if (applied.length > 0) {
        configStore.saveConfig(validUpdates)
        logger.success('SocketService', `Applied remote config updates for keys: ${applied.join(', ')}`)
        this._notifyConfigListeners(configStore.getAll())
      }

      if (this.socket && this.socket.connected) {
        this.socket.emit('AGENT_CONFIG_UPDATE_ACK', { applied, rejected })
      }
    })

    this.socket.on('AGENT_CONNECTED', (data) => {
      logger.success(
        'SocketService',
        `Agent registered with shop: ${data?.shopCode || data?.shopName || cleanShopId}`
      )
      this._applyRemoteShopSettings(data)
    })

    this.socket.on('PRINTER_SETTINGS_UPDATED', (data) => {
      this._applyRemoteShopSettings(data)
      logger.print(
        'SocketService',
        `Live Printer Settings Synced: B&W -> ${data?.defaultBwPrinter || 'unchanged'}, Color -> ${data?.defaultColorPrinter || 'unchanged'}, Duplex -> ${data?.defaultDuplexPrinter || 'unchanged'}`
      )
    })

    this.socket.on('SUBSCRIPTION_ACTIVATED', (data) => {
      this._applyRemoteShopSettings(data?.shop || data)
      statsService.syncFromDatabase(cleanShopId, true).catch(() => {})
    })

    this.socket.on('SHOP_STATS_UPDATED', (data) => {
      statsService.ingestStatsPayload(data, cleanShopId)
    })

    this.socket.on('JOB_STATUS_UPDATED', (data) => {
      if (!data?.jobId) return
      const jobPayload = data.job ? { ...data.job, ...data } : data
      const status = String(data.status || '').toUpperCase().trim()

      if (status === 'PRINTED_SUCCESSFULLY' || status === 'COMPLETED') {
        this.heldJobs.delete(data.jobId)
        statsService.recordJobEvent('SUCCESS', jobPayload, cleanShopId)
      } else if (status === 'PRINT_FAILED' || status === 'FAILED') {
        statsService.recordJobEvent('FAILED', jobPayload, cleanShopId)
      } else if (status === 'CANCELLED' || status === 'REJECTED') {
        this.heldJobs.delete(data.jobId)
        statsService.recordJobEvent('CANCELLED', jobPayload, cleanShopId)
      } else if (status === 'PRINTING') {
        statsService.recordJobEvent('PRINTING', jobPayload, cleanShopId)
      } else {
        statsService.recordJobEvent('QUEUED', jobPayload, cleanShopId)
      }
    })

    this.socket.on('CANCEL_HELD_JOB', (data) => {
      const jobId = data?.jobId
      if (jobId) {
        this.heldJobs.delete(jobId)
        printService.cleanupPreDownloaded(jobId)
        statsService.recordJobEvent('CANCELLED', { jobId, status: 'CANCELLED' }, cleanShopId)
        logger.info('SocketService', `Held Job #${jobId} cancelled remotely by owner.`)
      }
    })

    this.socket.on('AGENT_AUTH_ERROR', (data) => {
      logger.error('SocketService', `Authentication Refused: ${data?.message}`)
      this.isConnected = false
      this.notifyStatusChange('DISCONNECTED', { error: data?.message || 'Authentication error' })
    })

    this.socket.on('FORCE_SHOP_LOGOUT', (data) => {
      logger.warn('SocketService', `Force Logout Signal: ${data?.reason}`)
      this.isConnected = false
      this.notifyStatusChange('DISCONNECTED', { error: data?.reason || 'Account suspended' })
      this.disconnect()
    })

    this.socket.on('AGENT_KICKED', (data) => {
      logger.warn('SocketService', 'Agent Kicked by Server:', data?.reason)
      this.isConnected = false
      this.stopApprovalPolling()
      this.notifyStatusChange('DEVICE_REVOKED', {
        message: data?.reason || 'Another PC was approved for this shop. This device has been unlinked.',
        kicked: true,
      })
      this.disconnect()
    })

    this.socket.on('SHOP_STATUS_UPDATED', (data) => {
      if (data?.isSuspended) {
        logger.warn('SocketService', 'Shop Suspended via live update:', data)
        this.isConnected = false
        this.notifyStatusChange('DISCONNECTED', { error: 'Shop account suspended' })
        this.disconnect()
        return
      }
      this._applyRemoteShopSettings(data)
    })

    this.socket.on('disconnect', (reason) => {
      logger.info('SocketService', `Disconnected: ${reason}`)
      this.isConnected = false
      if (this.heartbeatTimer) {
        clearInterval(this.heartbeatTimer)
        this.heartbeatTimer = null
      }
      this.notifyStatusChange('DISCONNECTED', { reason })
    })

    this.socket.on('connect_error', (err) => {
      this.isConnected = false
      const errorMsg = String(err?.message || '')

      if (errorMsg === 'DEVICE_NOT_APPROVED') {
        logger.warn('SocketService', 'Device is PENDING_APPROVAL. Waiting for Shop Owner approval from Dashboard...')
        this.notifyStatusChange('DEVICE_NOT_APPROVED', {
          message: 'Device Approval Required: Please approve this PC from your Shop Owner Dashboard (Devices section).',
          shopId: cleanShopId,
          fingerprint: this.deviceInfo?.fingerprint,
          hostname: this.deviceInfo?.meta?.hostname || os.hostname(),
        })
        this.startApprovalPolling(targetServerUrl, cleanShopId, this.deviceInfo?.fingerprint)
        return
      }

      if (errorMsg === 'DEVICE_MISMATCH' || errorMsg === 'DEVICE_REVOKED') {
        logger.warn('SocketService', `Device binding error: ${errorMsg}`)
        this.stopApprovalPolling()
        this.notifyStatusChange('DEVICE_REVOKED', {
          message: 'This PC is not authorized or was revoked by the Shop Owner.',
          shopId: cleanShopId,
          fingerprint: this.deviceInfo?.fingerprint,
        })
        return
      }

      if (errorMsg === 'INVALID_SHOP_CREDENTIALS') {
        this.stopApprovalPolling()
        this.notifyStatusChange('AUTH_ERROR', {
          message: 'Invalid Shop ID or Secret Key. Please reconfigure.',
          shopId: cleanShopId,
        })
        return
      }

      if (!this.hasLoggedOffline) {
        logger.warn('SocketService', `Server connection issue (${errorMsg || 'Server offline'}). Retrying...`)
        this.hasLoggedOffline = true
      }
      this.notifyStatusChange('DISCONNECTED', { error: errorMsg || 'Server offline' })
    })

    this.socket.on('PRINT_JOB_DISPATCH', async (jobData) => {
      const jobId = jobData?.jobId
      if (jobId) {
        this.heldJobs.set(jobId, jobData)
      }

      const paymentMethod = String(jobData?.paymentMethod || '').toUpperCase().trim()

      const isExplicitCounterOrder =
        jobData?.isCounterOrder === true ||
        paymentMethod === 'CASH_COUNTER' ||
        paymentMethod === 'COUNTER' ||
        paymentMethod === 'CASH' ||
        paymentMethod === 'UPI_QR' ||
        paymentMethod === 'PENDING_CASH'

      const isAutoPrint =
        !isExplicitCounterOrder &&
        (jobData?.isAutoPrint === true ||
          jobData?.status === 'PAYMENT_VERIFIED' ||
          paymentMethod === 'RAZORPAY' ||
          paymentMethod === 'CASHFREE' ||
          paymentMethod === 'ESEWA' ||
          paymentMethod === 'AAMARPAY' ||
          paymentMethod === 'JAZZCASH' ||
          paymentMethod === 'ONLINE_GATEWAY' ||
          paymentMethod === 'ONLINE' ||
          paymentMethod === 'ONLINE_UPI' ||
          paymentMethod === 'UPI_ONLINE' ||
          paymentMethod === 'DASHBOARD' ||
          paymentMethod === 'STUDIO')

      const isCounterOrder = isExplicitCounterOrder && !isAutoPrint

      logger.job(
        'SocketService',
        `Received Print Job Dispatch #${jobId} (Method: ${paymentMethod || 'N/A'}, Auto-Print: ${isAutoPrint})`
      )

      if (isCounterOrder) {
        logger.job('SocketService', `Counter/Cash Order #${jobId} -> Opening approval popup window...`)
        statsService.recordJobEvent('COUNTER_PENDING', jobData, cleanShopId)
        this.notifyJobEvent('COUNTER_PENDING', jobData)
        if (typeof this.counterPopupHandler === 'function') {
          this.counterPopupHandler(jobData)
        } else {
          logger.error('SocketService', 'counterPopupHandler is not registered!')
        }
        return
      }

      if (jobId && this.processedAutoPrintJobs.has(jobId)) {
        logger.warn('SocketService', `Job #${jobId} already auto-printed once - dropping duplicate dispatch.`)
        return
      }
      if (jobId) {
        this.processedAutoPrintJobs.set(jobId, Date.now())
        this._cleanupProcessedAutoPrintJobs()
      }

      logger.print('SocketService', `Zero-Click Auto-Printing Verified Gateway Job #${jobId} directly...`)
      await this.executeAndReportJob(jobData, 'AUTO_DISPATCH')
    })

    this.socket.on('EXECUTE_PRINT_NOW', async (data) => {
      const jobId = data?.jobId
      const now = Date.now()
      const lastAt = jobId ? this.lastExecutePrintNowAt.get(jobId) : null
      if (jobId && lastAt && now - lastAt < PRINT_COOLDOWN_MS) {
        logger.warn(
          'SocketService',
          `Ignoring repeated EXECUTE_PRINT_NOW for Job #${jobId} (debounced, ${now - lastAt}ms since last).`
        )
        return
      }
      if (jobId) this.lastExecutePrintNowAt.set(jobId, now)

      const mergedJobData = { ...(this.heldJobs.get(jobId) || {}), ...(data || {}) }
      logger.print('SocketService', `Executing Print Job #${jobId} to hardware spooler...`)
      await this.executeAndReportJob(mergedJobData, 'EXECUTE_PRINT_NOW')
    })

    this.socket.on('PRINT_JOB_CANCEL', (data) => {
      const jobId = data?.jobId
      logger.info('SocketService', `Cancelling and discarding Job #${jobId} from queue`)
      if (jobId) {
        this.heldJobs.delete(jobId)
        printService.cleanupPreDownloaded(jobId)
        statsService.recordJobEvent('CANCELLED', { jobId, status: 'CANCELLED' }, cleanShopId)
      }
    })
  }

  disconnect() {
    this.manualDisconnect = true
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
    this.isConnected = false
    this.notifyStatusChange('DISCONNECTED', { reason: 'Manual disconnect' })
  }

  reconnect() {
    this.manualDisconnect = false
    if (this.socket) {
      this.socket.disconnect()
      this.socket = null
    }
    this.connect()
  }

  async fetchQueuedJobs(serverUrl, shopCode, secretApiKey) {
    try {
      logger.info('SocketService', 'Fetching queued jobs for recovery...')
      const response = await axios.get(`${serverUrl}/api/jobs/queued`, {
        headers: {
          'x-shop-code': shopCode,
          'x-secret-api-key': secretApiKey,
        },
        timeout: 10000,
      })

      const queuedJobs =
        response?.data?.data?.jobs ||
        response?.data?.jobs ||
        (Array.isArray(response?.data?.data) ? response.data.data : [])

      if (Array.isArray(queuedJobs) && queuedJobs.length > 0) {
        logger.success('SocketService', `Synced ${queuedJobs.length} queued job(s) from server`)
        for (const job of queuedJobs) {
          if (job?.jobId) {
            this.heldJobs.set(job.jobId, job)
          }
        }
        statsService.ingestJobsList(queuedJobs, shopCode)
      }
    } catch (err) {
      logger.warn('SocketService', 'Queued jobs sync note:', err.message)
    }
  }
}

const socketService = new SocketService()
export default socketService
