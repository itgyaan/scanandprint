import path from 'path'
import fs from 'fs'
import * as electronModule from 'electron'
import {
  DEFAULT_SERVER_URL,
  PLAN_MAX_PRINTERS,
  getUserDataPath,
} from '../config/constants.js'
import logger from '../utils/logger.js'

const safeStorage = electronModule?.safeStorage || electronModule?.default?.safeStorage || null

function defaults() {
  return {
    shopId: '',
    secretKey: '',
    shopName: '',
    ownerName: '',
    cityState: '',
    defaultBwPrinter: '',
    defaultColorPrinter: '',
    defaultDuplexPrinter: '',
    autoStartOnBoot: true,
    planTier: '',
    maxPrinters: 3,
    autoPrintMode: 'PAYMENT_TRIGGERED',
    paymentMode: 'hybrid',
    bwRate: null,
    colorRate: null,
    supportEmail: '',
    supportPhone: '',
  }
}

/**
 * Lightweight OS-encrypted JSON configuration store.
 * Uses Windows DPAPI / macOS Keychain / Linux Secret Service via Electron safeStorage
 * so the shop's Secret API Key is never stored in plaintext on disk.
 */
class ConfigStore {
  constructor() {
    this.configPath = path.join(getUserDataPath(), 'config.json')
    this.data = this._readRawFile()
    this._secretDecrypted = false
  }

  _readRawFile() {
    try {
      if (fs.existsSync(this.configPath)) {
        const parsed = JSON.parse(fs.readFileSync(this.configPath, 'utf8'))
        if (parsed && typeof parsed === 'object') {
          delete parsed.serverUrl
          return this._clampPrintersToPlan({ ...defaults(), ...parsed })
        }
      }
    } catch (err) {
      logger.error('ConfigStore', `Error reading config file: ${err.message}`)
    }
    return defaults()
  }

  _ensureSecretDecrypted() {
    if (this._secretDecrypted) return
    this._secretDecrypted = true

    if (this.data.secretKeyEncrypted) {
      try {
        if (safeStorage?.isEncryptionAvailable && safeStorage.isEncryptionAvailable()) {
          this.data.secretKey = safeStorage.decryptString(Buffer.from(this.data.secretKeyEncrypted, 'base64'))
        } else {
          logger.warn(
            'ConfigStore',
            'OS secure storage is unavailable on this machine - Secret API Key could not be decrypted. Please re-enter it in Shop Setup.'
          )
          this.data.secretKey = ''
        }
      } catch (err) {
        logger.error('ConfigStore', `Could not decrypt stored Secret API Key: ${err.message}`)
        this.data.secretKey = ''
      }
    }
  }

  saveConfig(newConfig) {
    this._ensureSecretDecrypted()
    const { serverUrl, ...safeNewConfig } = newConfig || {}
    this.data = this._clampPrintersToPlan({ ...this.data, ...safeNewConfig })

    try {
      const dir = path.dirname(this.configPath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      const onDisk = { ...this.data }
      delete onDisk.secretKeyEncrypted
      delete onDisk.serverUrl

      if (onDisk.secretKey && safeStorage?.isEncryptionAvailable && safeStorage.isEncryptionAvailable()) {
        onDisk.secretKeyEncrypted = safeStorage.encryptString(onDisk.secretKey).toString('base64')
        delete onDisk.secretKey
      }

      fs.writeFileSync(this.configPath, JSON.stringify(onDisk, null, 2), 'utf8')
      return true
    } catch (err) {
      logger.error('ConfigStore', `Error saving config file: ${err.message}`)
      return false
    }
  }

  resolvePlanInfo(source) {
    if (!source || typeof source !== 'object') return null

    const explicitMax = Number(
      source.maxPrinters ??
      source.plan?.maxPrinters ??
      source.limits?.printers ??
      source.plan?.limits?.printers
    )
    const rawPlanName = String(
      source.planTier ||
      source.planType ||
      source.tier ||
      source.subscriptionTier ||
      (typeof source.plan === 'string' ? source.plan : source.plan?.tier || source.plan?.planId || '')
    )
      .toUpperCase()
      .trim()

    const autoPrintMode =
      source.autoPrint ||
      source.plan?.autoPrint ||
      source.features?.autoPrint ||
      source.plan?.features?.autoPrint ||
      null

    if (Number.isFinite(explicitMax) && explicitMax > 0) {
      return {
        planTier: rawPlanName || this.data.planTier || 'STARTER',
        maxPrinters: Math.max(1, Math.min(3, explicitMax)),
        ...(autoPrintMode ? { autoPrintMode } : {}),
      }
    }

    if (rawPlanName && PLAN_MAX_PRINTERS[rawPlanName] != null) {
      return {
        planTier: rawPlanName,
        maxPrinters: PLAN_MAX_PRINTERS[rawPlanName],
        ...(autoPrintMode ? { autoPrintMode } : {}),
      }
    }

    return null
  }

  _clampPrintersToPlan(data) {
    const rawMax = Number(data.maxPrinters)
    const maxPrinters = Number.isFinite(rawMax) && rawMax > 0 ? Math.max(1, Math.min(3, rawMax)) : 3
    const clamped = { ...data, maxPrinters }
    if (maxPrinters <= 1) {
      clamped.defaultColorPrinter = ''
      clamped.defaultDuplexPrinter = ''
    } else if (maxPrinters === 2) {
      clamped.defaultDuplexPrinter = ''
    }
    return clamped
  }

  get(key) {
    this._ensureSecretDecrypted()
    if (key === 'serverUrl') return DEFAULT_SERVER_URL
    return this.data[key]
  }

  getAll() {
    this._ensureSecretDecrypted()
    const { secretKeyEncrypted, serverUrl, ...rest } = this.data
    return { ...rest, serverUrl: DEFAULT_SERVER_URL }
  }

  set(key, value) {
    this._ensureSecretDecrypted()
    this.data[key] = value
    this.saveConfig({})
  }
}

const configStore = new ConfigStore()
export default configStore
