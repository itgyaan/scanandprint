import axios from 'axios'
import http from 'http'
import https from 'https'
import fs from 'fs'
import path from 'path'
import configStore from '../store/configStore.js'
import {
  DEFAULT_SERVER_URL,
  API_SYNC_COOLDOWN_MS,
  getUserDataPath,
} from '../config/constants.js'
import { resolveDuplexSide } from './printService.js'
import logger from '../utils/logger.js'

const httpAgent = new http.Agent({ keepAlive: true, maxSockets: 10 })
const httpsAgent = new https.Agent({ keepAlive: true, maxSockets: 10 })
const apiClient = axios.create({
  httpAgent,
  httpsAgent,
  timeout: 10000,
})

export function getTodayKey(date = new Date()) {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

export function getMonthKey(date = new Date()) {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  return `${yyyy}-${mm}`
}

export function getYearKey(date = new Date()) {
  return String(date.getFullYear())
}

function createEmptyToday(dateKey = getTodayKey()) {
  return {
    date: dateKey,
    revenue: 0,
    onlineRevenue: 0,
    counterRevenue: 0,
    jobsCompleted: 0,
    bwJobsCount: 0,
    colorJobsCount: 0,
    totalPagesPrinted: 0,
    bwPagesPrinted: 0,
    colorPagesPrinted: 0,
    failedJobs: 0,
  }
}

function createEmptyMonth(monthKey = getMonthKey()) {
  return {
    monthKey,
    revenue: 0,
    jobsCompleted: 0,
    totalPagesPrinted: 0,
    bwJobsCount: 0,
    colorJobsCount: 0,
    bwPagesPrinted: 0,
    colorPagesPrinted: 0,
  }
}

function createEmptyYear(yearKey = getYearKey()) {
  return {
    yearKey,
    revenue: 0,
    jobsCompleted: 0,
    totalPagesPrinted: 0,
  }
}

function createEmptyLifetime() {
  return {
    totalRevenue: 0,
    totalJobsCompleted: 0,
    totalPagesPrinted: 0,
    bwJobsCount: 0,
    colorJobsCount: 0,
    bwPagesPrinted: 0,
    colorPagesPrinted: 0,
  }
}

function createEmptyShopRecord(shopCode = '') {
  const cleanCode = String(shopCode || '').toUpperCase().trim()
  return {
    shopCode: cleanCode,
    shopProfile: {
      shopCode: cleanCode,
      shopName: '',
      ownerName: '',
      email: '',
      phone: '',
      address: '',
      cityState: '',
      pincode: '',
      currency: 'INR',
      bwRate: null,
      colorRate: null,
      pricingSettings: null,
      paymentMode: '',
      planId: '',
      planTier: '',
      subscriptionStatus: '',
      isSubscriptionActive: true,
      subscriptionExpiresAt: null,
      isDemoAccount: false,
      demoExpiresAt: null,
      maxFileSizeMb: null,
      maxPrinters: 3,
      autoPrintMode: 'PAYMENT_TRIGGERED',
      isOnline: false,
    },
    today: createEmptyToday(),
    currentMonth: createEmptyMonth(),
    currentYear: createEmptyYear(),
    lifetime: createEmptyLifetime(),
    monthlyHistory: [],
    recentJobs: [],
    recordedJobIds: [],
    lastSyncedAt: null,
    syncSource: 'INITIAL',
  }
}

function isCounterPaymentMethod(paymentMethod = '', job = {}) {
  const pm = String(paymentMethod || job?.paymentMethod || '').toUpperCase().trim()
  return (
    job?.isCounterOrder === true ||
    pm === 'CASH_COUNTER' ||
    pm === 'COUNTER' ||
    pm === 'CASH' ||
    pm === 'UPI_QR' ||
    pm === 'PENDING_CASH'
  )
}

/**
 * Dynamically calculates a print job's total amount using the shop's real DB pricing rules
 * if the job payload does not already carry a pre-calculated totalAmount from MongoDB.
 */
export function calculateJobAmountFromShopRates(job = {}, shopProfile = {}) {
  const explicitAmount = Number(job?.totalAmount ?? job?.amount ?? job?.price)
  if (Number.isFinite(explicitAmount) && explicitAmount > 0) {
    return Math.round(explicitAmount * 100) / 100
  }

  const copies = Math.max(1, Number(job?.copies) || 1)
  const totalPages = Math.max(1, Number(job?.totalPages) || 1)
  const isColor = String(job?.colorType || '').toUpperCase().trim() === 'COLOR'
  const isDuplex = resolveDuplexSide(job) !== 'simplex'
  const paperSize = String(job?.paperSize || 'A4').toUpperCase().trim()
  const jobType = String(job?.jobType || 'DOCUMENT').toUpperCase().trim()

  const pricingSettings = shopProfile?.pricingSettings || {}
  const baseBwRate = Number(job?.bwRateApplied ?? shopProfile?.bwRate) || 0
  const baseColorRate = Number(job?.colorRateApplied ?? shopProfile?.colorRate) || 0

  if ((jobType === 'PHOTO' || jobType === 'PHOTO_SHEET') && pricingSettings?.photoSheetPricing?.rates) {
    const countKey = `p${Number(job?.photoCount) || 16}`
    const sheetRate = Number(pricingSettings.photoSheetPricing.rates[countKey])
    if (Number.isFinite(sheetRate) && sheetRate > 0) {
      return Math.round(sheetRate * copies * 100) / 100
    }
  }

  if (jobType === 'RESUME' && pricingSettings?.resumeEnabled && pricingSettings?.resumePricing) {
    const unit = isColor
      ? Number(pricingSettings.resumePricing.colorRate) || baseColorRate
      : Number(pricingSettings.resumePricing.bwRate) || baseBwRate
    if (unit > 0) {
      return Math.round(unit * totalPages * copies * 100) / 100
    }
  }

  const sizeKey = paperSize.toLowerCase()
  if (
    ['a3', 'a2', 'a1'].includes(sizeKey) &&
    pricingSettings?.bigSizeEnabled &&
    pricingSettings?.bigSizePricing?.[sizeKey]
  ) {
    const sizeRates = pricingSettings.bigSizePricing[sizeKey]
    const unit = isColor
      ? Number(sizeRates.colorRate) || baseColorRate
      : Number(sizeRates.bwRate) || baseBwRate
    if (unit > 0) {
      return Math.round(unit * totalPages * copies * 100) / 100
    }
  }

  let effectiveBwRate = baseBwRate
  let effectiveColorRate = baseColorRate
  if (pricingSettings?.pageRangePricing?.enabled) {
    const ranges = isColor
      ? pricingSettings.pageRangePricing.colorRanges
      : pricingSettings.pageRangePricing.bwRanges
    if (Array.isArray(ranges)) {
      const matchedRange = ranges.find(
        (r) => totalPages >= Number(r.fromPage || 1) && totalPages <= Number(r.toPage || Infinity)
      )
      if (matchedRange && Number(matchedRange.ratePerPage) > 0) {
        if (isColor) effectiveColorRate = Number(matchedRange.ratePerPage)
        else effectiveBwRate = Number(matchedRange.ratePerPage)
      }
    }
  }

  const bwPages = Number(job?.bwPages) > 0 ? Number(job.bwPages) : isColor ? 0 : totalPages
  const colorPages = Number(job?.colorPages) > 0 ? Number(job.colorPages) : isColor ? totalPages : 0

  let amountPerCopy = bwPages * effectiveBwRate + colorPages * effectiveColorRate
  if (isDuplex && Number(pricingSettings?.duplexExtraRate) > 0) {
    const sheets = Math.ceil(totalPages / 2)
    amountPerCopy += sheets * Number(pricingSettings.duplexExtraRate)
  }

  return Math.round(amountPerCopy * copies * 100) / 100
}

/**
 * Normalizes a PrintJob payload from either REST API or Socket.IO into a uniform record.
 */
export function normalizeJobRecord(rawJob = {}, shopProfile = {}) {
  const jobId = String(rawJob.jobId || rawJob._id || '').trim()
  const copies = Math.max(1, Number(rawJob.copies) || 1)
  const totalPages = Math.max(1, Number(rawJob.totalPages || rawJob.pageCount || rawJob.pages) || 1)
  const colorType =
    String(rawJob.colorType || '').toUpperCase().trim() === 'COLOR' ? 'COLOR' : 'BLACK_AND_WHITE'
  const isColor = colorType === 'COLOR'

  const bwPages = Number(rawJob.bwPages) > 0 ? Number(rawJob.bwPages) : isColor ? 0 : totalPages
  const colorPages = Number(rawJob.colorPages) > 0 ? Number(rawJob.colorPages) : isColor ? totalPages : 0

  const pagesPrinted = (bwPages + colorPages) * copies
  const bwPagesPrinted = bwPages * copies
  const colorPagesPrinted = colorPages * copies
  const isDuplex = resolveDuplexSide(rawJob) !== 'simplex'
  const totalAmount = calculateJobAmountFromShopRates(rawJob, shopProfile)
  const isCounter = isCounterPaymentMethod(rawJob.paymentMethod, rawJob)

  return {
    jobId,
    shopCode: String(rawJob.shopCode || shopProfile?.shopCode || '').toUpperCase().trim(),
    originalFileName: rawJob.originalFileName || rawJob.fileName || 'document.pdf',
    totalPages,
    copies,
    pagesPrinted,
    bwPagesPrinted,
    colorPagesPrinted,
    colorType,
    isDuplex,
    paperSize: String(rawJob.paperSize || rawJob.layout?.paperSize || 'A4').toUpperCase().trim(),
    jobType: String(rawJob.jobType || 'DOCUMENT').toUpperCase().trim(),
    photoCount: Number(rawJob.photoCount) || 0,
    totalAmount,
    currency: rawJob.currency || shopProfile?.currency || 'INR',
    paymentMethod: rawJob.paymentMethod || (isCounter ? 'CASH_COUNTER' : 'ONLINE_UPI'),
    isCounterOrder: isCounter,
    status: String(rawJob.status || 'DISPATCHED_TO_AGENT').toUpperCase().trim(),
    printedPrinterName: rawJob.printedPrinterName || rawJob.printedOn || rawJob.printerName || '',
    errorMessage: rawJob.errorMessage || rawJob.error || '',
    createdAt: rawJob.createdAt || rawJob.timestamp || new Date().toISOString(),
    updatedAt: rawJob.updatedAt || new Date().toISOString(),
  }
}

class StatsService {
  constructor() {
    this.storagePath = path.join(getUserDataPath(), 'shop-stats.json')
    this.shopsData = this._loadFromDisk()
    this.listeners = []
    this.isSyncing = false
    this.lastSyncAtByShop = new Map()
    this.platformSettingsFetched = false
  }

  _loadFromDisk() {
    try {
      if (fs.existsSync(this.storagePath)) {
        const parsed = JSON.parse(fs.readFileSync(this.storagePath, 'utf8'))
        if (parsed && typeof parsed === 'object') {
          return parsed
        }
      }
    } catch (err) {
      logger.warn('StatsService', `Could not read local stats ledger: ${err.message}`)
    }
    return {}
  }

  _saveToDisk() {
    try {
      const dir = path.dirname(this.storagePath)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      fs.writeFileSync(this.storagePath, JSON.stringify(this.shopsData, null, 2), 'utf8')
    } catch (err) {
      logger.warn('StatsService', `Could not save local stats ledger: ${err.message}`)
    }
  }

  _getActiveShopCode() {
    return String(configStore.get('shopId') || '').toUpperCase().trim()
  }

  _getOrCreateShopRecord(shopCode) {
    const code = String(shopCode || this._getActiveShopCode() || 'UNCONFIGURED').toUpperCase().trim()
    if (!this.shopsData[code]) {
      this.shopsData[code] = createEmptyShopRecord(code)
    }
    const record = this.shopsData[code]
    this._ensureDateRollover(record)
    return record
  }

  _ensureDateRollover(record) {
    const todayKey = getTodayKey()
    const monthKey = getMonthKey()
    const yearKey = getYearKey()

    if (!record.today || record.today.date !== todayKey) {
      record.today = createEmptyToday(todayKey)
    }

    if (!record.currentMonth || record.currentMonth.monthKey !== monthKey) {
      if (record.currentMonth?.monthKey && record.currentMonth.jobsCompleted > 0) {
        record.monthlyHistory = Array.isArray(record.monthlyHistory) ? record.monthlyHistory : []
        if (!record.monthlyHistory.some((m) => m.monthKey === record.currentMonth.monthKey)) {
          record.monthlyHistory.unshift({
            ...record.currentMonth,
            closedAt: new Date().toISOString(),
          })
          record.monthlyHistory = record.monthlyHistory.slice(0, 12)
        }
      }
      record.currentMonth = createEmptyMonth(monthKey)
    }

    if (!record.currentYear || record.currentYear.yearKey !== yearKey) {
      record.currentYear = createEmptyYear(yearKey)
    }

    if (!record.lifetime) {
      record.lifetime = createEmptyLifetime()
    }
    if (!Array.isArray(record.recentJobs)) {
      record.recentJobs = []
    }
    if (!Array.isArray(record.recordedJobIds)) {
      record.recordedJobIds = []
    }
  }

  onStatsUpdated(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback)
    }
  }

  _notifyListeners() {
    const snapshot = this.getSnapshot()
    this.listeners.forEach((cb) => {
      try {
        cb(snapshot)
      } catch (err) {
        logger.warn('StatsService', `Listener error: ${err.message}`)
      }
    })
  }

  /**
   * Fetches Shop Profile, Pricing Rules, Upload Limits, Payment Options, and Platform Settings
   * strictly from documented Public Kiosk & System endpoints:
   *   - GET /api/kiosk/:shopCode
   *   - GET /api/kiosk/limits/:shopCode
   *   - GET /api/kiosk/:shopCode/payment-options
   *   - GET /api/auth/settings (once per process session)
   * Enforces a cooldown guard (API_SYNC_COOLDOWN_MS) so duplicate calls never happen.
   * Never calls [Shop JWT Required] routes (/api/jobs or /api/jobs/analytics) that would 401.
   */
  async syncFromDatabase(customShopCode = '', force = false) {
    const config = configStore.getAll()
    const shopCode = String(customShopCode || config.shopId || '').toUpperCase().trim()
    const serverUrl = (config.serverUrl || DEFAULT_SERVER_URL).replace(/\/+$/, '')

    if (!shopCode) {
      return this.getSnapshot()
    }

    const lastAt = this.lastSyncAtByShop.get(shopCode) || 0
    if (!force && (this.isSyncing || Date.now() - lastAt < API_SYNC_COOLDOWN_MS)) {
      return this.getSnapshot(shopCode)
    }

    this.isSyncing = true
    this.lastSyncAtByShop.set(shopCode, Date.now())

    const record = this._getOrCreateShopRecord(shopCode)
    const encodedShop = encodeURIComponent(shopCode)

    try {
      const requests = [
        apiClient.get(`${serverUrl}/api/kiosk/${encodedShop}`),
        apiClient.get(`${serverUrl}/api/kiosk/limits/${encodedShop}`),
        apiClient.get(`${serverUrl}/api/kiosk/${encodedShop}/payment-options`),
      ]

      if (!this.platformSettingsFetched) {
        requests.push(apiClient.get(`${serverUrl}/api/auth/settings`))
      }

      const [kioskShopRes, kioskLimitsRes, paymentOptsRes, adminSettingsRes] =
        await Promise.allSettled(requests)

      let anySynced = false

      // 1. Ingest Shop Info & Rates from GET /api/kiosk/:shopCode
      if (kioskShopRes.status === 'fulfilled' && kioskShopRes.value?.data) {
        const body = kioskShopRes.value.data
        const shopObj = body?.data?.shop || body?.shop || body?.data || body
        if (shopObj && typeof shopObj === 'object') {
          this.ingestShopPayload(shopObj, shopCode, false)
          anySynced = true
        }
      }

      // 2. Ingest Plan Upload Limits & Features from GET /api/kiosk/limits/:shopCode
      if (kioskLimitsRes.status === 'fulfilled' && kioskLimitsRes.value?.data) {
        const body = kioskLimitsRes.value.data
        const limitsObj = body?.data || body
        if (limitsObj && typeof limitsObj === 'object') {
          this.ingestShopPayload(limitsObj, shopCode, false)
          anySynced = true
        }
      }

      // 3. Ingest Payment Options & Mode from GET /api/kiosk/:shopCode/payment-options
      if (paymentOptsRes.status === 'fulfilled' && paymentOptsRes.value?.data) {
        const body = paymentOptsRes.value.data
        const payObj = body?.data || body
        if (payObj && typeof payObj === 'object') {
          this.ingestShopPayload(payObj, shopCode, false)
          anySynced = true
        }
      }

      // 4. Ingest Global Platform Support Info from GET /api/auth/settings (once per session)
      if (adminSettingsRes && adminSettingsRes.status === 'fulfilled' && adminSettingsRes.value?.data) {
        this.platformSettingsFetched = true
        const settingsObj =
          adminSettingsRes.value.data?.settings ||
          adminSettingsRes.value.data?.data?.settings ||
          adminSettingsRes.value.data?.data ||
          adminSettingsRes.value.data
        if (settingsObj && typeof settingsObj === 'object') {
          const cfgUpdates = {}
          if (settingsObj.supportEmail) cfgUpdates.supportEmail = settingsObj.supportEmail
          if (settingsObj.supportPhone) cfgUpdates.supportPhone = settingsObj.supportPhone
          if (Object.keys(cfgUpdates).length > 0) {
            configStore.saveConfig(cfgUpdates)
          }
        }
      }

      if (anySynced) {
        record.lastSyncedAt = new Date().toISOString()
        record.syncSource = 'LIVE_SYNC'
        this._saveToDisk()
      }
    } catch (err) {
      logger.warn('StatsService', `Shop data sync note for ${shopCode}: ${err.message}`)
    } finally {
      this.isSyncing = false
      this._notifyListeners()
    }

    return this.getSnapshot(shopCode)
  }

  /**
   * Ingests shop profile, rate rules, payment mode, and plan configuration from API or Socket events.
   */
  ingestShopPayload(payload = {}, explicitShopCode = '', emitUpdate = true) {
    if (!payload || typeof payload !== 'object') return

    const shopObj = payload.shop && typeof payload.shop === 'object' ? payload.shop : payload
    const shopCode = String(
      explicitShopCode || shopObj.shopCode || shopObj.shopId || this._getActiveShopCode()
    )
      .toUpperCase()
      .trim()
    if (!shopCode) return

    const record = this._getOrCreateShopRecord(shopCode)
    const p = record.shopProfile

    if (shopObj.shopName) p.shopName = String(shopObj.shopName).trim()
    if (shopObj.ownerName) p.ownerName = String(shopObj.ownerName).trim()
    if (shopObj.email) p.email = String(shopObj.email).trim()
    if (shopObj.phone) p.phone = String(shopObj.phone).trim()
    if (shopObj.address) p.address = String(shopObj.address).trim()
    if (shopObj.cityState) p.cityState = String(shopObj.cityState).trim()
    if (shopObj.pincode) p.pincode = String(shopObj.pincode).trim()
    if (shopObj.currency || payload.currency) {
      p.currency = String(shopObj.currency || payload.currency).toUpperCase().trim()
    }

    if (Number.isFinite(Number(shopObj.bwRate)) && Number(shopObj.bwRate) > 0) {
      p.bwRate = Number(shopObj.bwRate)
    }
    if (Number.isFinite(Number(shopObj.colorRate)) && Number(shopObj.colorRate) > 0) {
      p.colorRate = Number(shopObj.colorRate)
    }
    if (shopObj.pricingSettings && typeof shopObj.pricingSettings === 'object') {
      p.pricingSettings = { ...p.pricingSettings, ...shopObj.pricingSettings }
    }

    const paymentMode =
      shopObj.paymentSettings?.paymentMode ||
      shopObj.paymentMode ||
      payload.paymentMode ||
      payload.mode
    if (paymentMode) {
      p.paymentMode = String(paymentMode).toLowerCase().trim()
    }

    if (shopObj.planId) p.planId = String(shopObj.planId)
    if (shopObj.subscriptionStatus) p.subscriptionStatus = String(shopObj.subscriptionStatus)
    if (typeof shopObj.isSubscriptionActive === 'boolean') {
      p.isSubscriptionActive = shopObj.isSubscriptionActive
    }
    if (shopObj.subscriptionExpiresAt) p.subscriptionExpiresAt = shopObj.subscriptionExpiresAt
    if (typeof shopObj.isDemoAccount === 'boolean') p.isDemoAccount = shopObj.isDemoAccount
    if (shopObj.demoExpiresAt) p.demoExpiresAt = shopObj.demoExpiresAt
    if (typeof shopObj.isOnline === 'boolean') p.isOnline = shopObj.isOnline

    const maxFileSize = Number(
      shopObj.maxFileSizeMb ??
        payload.maxFileSizeMb ??
        shopObj.limits?.maxFileSizeMb ??
        payload.limits?.maxFileSizeMb
    )
    if (Number.isFinite(maxFileSize) && maxFileSize > 0) {
      p.maxFileSizeMb = maxFileSize
    }

    const planInfo = configStore.resolvePlanInfo(shopObj) || configStore.resolvePlanInfo(payload)
    if (planInfo) {
      if (planInfo.planTier) p.planTier = planInfo.planTier
      if (planInfo.maxPrinters) p.maxPrinters = planInfo.maxPrinters
      if (planInfo.autoPrintMode) p.autoPrintMode = planInfo.autoPrintMode
    }

    const autoPrint =
      shopObj.features?.autoPrint ||
      payload.features?.autoPrint ||
      shopObj.plan?.autoPrint ||
      payload.plan?.autoPrint
    if (autoPrint) {
      p.autoPrintMode = String(autoPrint).toUpperCase().trim()
    }

    const configUpdates = {}
    if (p.shopName) configUpdates.shopName = p.shopName
    if (p.ownerName) configUpdates.ownerName = p.ownerName
    if (p.cityState) configUpdates.cityState = p.cityState
    if (p.bwRate != null) configUpdates.bwRate = p.bwRate
    if (p.colorRate != null) configUpdates.colorRate = p.colorRate
    if (p.planTier) configUpdates.planTier = p.planTier
    if (p.maxPrinters) configUpdates.maxPrinters = p.maxPrinters
    if (p.autoPrintMode) configUpdates.autoPrintMode = p.autoPrintMode
    if (p.paymentMode) configUpdates.paymentMode = p.paymentMode

    if (Object.keys(configUpdates).length > 0) {
      configStore.saveConfig(configUpdates)
    }

    if (payload.stats || payload.analytics || payload.shopStats) {
      this.ingestStatsPayload(payload.stats || payload.analytics || payload.shopStats, shopCode, false)
    }

    record.lastSyncedAt = new Date().toISOString()
    if (emitUpdate) {
      this._saveToDisk()
      this._notifyListeners()
    }
  }

  /**
   * Reconciles a MongoDB ShopStats payload (today, currentMonth, currentYear, lifetime)
   * when pushed by the server via Socket.IO (AGENT_CONNECTED / SHOP_STATS_UPDATED).
   */
  ingestStatsPayload(stats = {}, explicitShopCode = '', emitUpdate = true) {
    if (!stats || typeof stats !== 'object') return

    const shopCode = String(explicitShopCode || stats.shopCode || this._getActiveShopCode())
      .toUpperCase()
      .trim()
    if (!shopCode) return

    const record = this._getOrCreateShopRecord(shopCode)
    const todayKey = getTodayKey()
    const monthKey = getMonthKey()
    const yearKey = getYearKey()

    const dbToday = stats.today || stats.daily || null
    if (dbToday && typeof dbToday === 'object') {
      const dbDate = dbToday.date ? String(dbToday.date).slice(0, 10) : todayKey
      if (dbDate === todayKey) {
        record.today.revenue = Math.max(
          record.today.revenue,
          Number(dbToday.revenue ?? dbToday.totalRevenue) || 0
        )
        record.today.jobsCompleted = Math.max(
          record.today.jobsCompleted,
          Number(dbToday.jobsCompleted ?? dbToday.completedJobs ?? dbToday.jobs) || 0
        )
        record.today.totalPagesPrinted = Math.max(
          record.today.totalPagesPrinted,
          Number(dbToday.totalPagesPrinted ?? dbToday.pagesPrinted ?? dbToday.prints) || 0
        )
        if (Number(dbToday.bwJobsCount) > 0) {
          record.today.bwJobsCount = Math.max(record.today.bwJobsCount, Number(dbToday.bwJobsCount))
        }
        if (Number(dbToday.colorJobsCount) > 0) {
          record.today.colorJobsCount = Math.max(record.today.colorJobsCount, Number(dbToday.colorJobsCount))
        }
        if (Number(dbToday.bwPagesPrinted) > 0) {
          record.today.bwPagesPrinted = Math.max(record.today.bwPagesPrinted, Number(dbToday.bwPagesPrinted))
        }
        if (Number(dbToday.colorPagesPrinted) > 0) {
          record.today.colorPagesPrinted = Math.max(
            record.today.colorPagesPrinted,
            Number(dbToday.colorPagesPrinted)
          )
        }
      }
    }

    const dbMonth = stats.currentMonth || stats.monthly || null
    if (dbMonth && typeof dbMonth === 'object') {
      const dbMonthKey = dbMonth.monthKey ? String(dbMonth.monthKey).slice(0, 7) : monthKey
      if (dbMonthKey === monthKey) {
        record.currentMonth.revenue = Math.max(
          record.currentMonth.revenue,
          Number(dbMonth.revenue ?? dbMonth.totalRevenue) || 0
        )
        record.currentMonth.jobsCompleted = Math.max(
          record.currentMonth.jobsCompleted,
          Number(dbMonth.jobsCompleted ?? dbMonth.completedJobs ?? dbMonth.jobs) || 0
        )
        record.currentMonth.totalPagesPrinted = Math.max(
          record.currentMonth.totalPagesPrinted,
          Number(dbMonth.totalPagesPrinted ?? dbMonth.pagesPrinted ?? dbMonth.prints) || 0
        )
        record.currentMonth.bwJobsCount = Math.max(
          record.currentMonth.bwJobsCount,
          Number(dbMonth.bwJobsCount) || 0
        )
        record.currentMonth.colorJobsCount = Math.max(
          record.currentMonth.colorJobsCount,
          Number(dbMonth.colorJobsCount) || 0
        )
        record.currentMonth.bwPagesPrinted = Math.max(
          record.currentMonth.bwPagesPrinted,
          Number(dbMonth.bwPagesPrinted) || 0
        )
        record.currentMonth.colorPagesPrinted = Math.max(
          record.currentMonth.colorPagesPrinted,
          Number(dbMonth.colorPagesPrinted) || 0
        )
      }
    }

    const dbYear = stats.currentYear || stats.yearly || null
    if (dbYear && typeof dbYear === 'object') {
      const dbYearKey = dbYear.yearKey ? String(dbYear.yearKey).slice(0, 4) : yearKey
      if (dbYearKey === yearKey) {
        record.currentYear.revenue = Math.max(
          record.currentYear.revenue,
          Number(dbYear.revenue ?? dbYear.totalRevenue) || 0
        )
        record.currentYear.jobsCompleted = Math.max(
          record.currentYear.jobsCompleted,
          Number(dbYear.jobsCompleted ?? dbYear.completedJobs) || 0
        )
        record.currentYear.totalPagesPrinted = Math.max(
          record.currentYear.totalPagesPrinted,
          Number(dbYear.totalPagesPrinted ?? dbYear.pagesPrinted) || 0
        )
      }
    }

    const dbLifetime = stats.lifetime || stats.overall || null
    if (dbLifetime && typeof dbLifetime === 'object') {
      record.lifetime.totalRevenue = Math.max(
        record.lifetime.totalRevenue,
        Number(dbLifetime.totalRevenue ?? dbLifetime.revenue) || 0
      )
      record.lifetime.totalJobsCompleted = Math.max(
        record.lifetime.totalJobsCompleted,
        Number(dbLifetime.totalJobsCompleted ?? dbLifetime.jobsCompleted ?? dbLifetime.totalJobs) || 0
      )
      record.lifetime.totalPagesPrinted = Math.max(
        record.lifetime.totalPagesPrinted,
        Number(dbLifetime.totalPagesPrinted ?? dbLifetime.pagesPrinted ?? dbLifetime.totalPrints) || 0
      )
      record.lifetime.bwJobsCount = Math.max(
        record.lifetime.bwJobsCount,
        Number(dbLifetime.bwJobsCount) || 0
      )
      record.lifetime.colorJobsCount = Math.max(
        record.lifetime.colorJobsCount,
        Number(dbLifetime.colorJobsCount) || 0
      )
      record.lifetime.bwPagesPrinted = Math.max(
        record.lifetime.bwPagesPrinted,
        Number(dbLifetime.bwPagesPrinted) || 0
      )
      record.lifetime.colorPagesPrinted = Math.max(
        record.lifetime.colorPagesPrinted,
        Number(dbLifetime.colorPagesPrinted) || 0
      )
    }

    if (Array.isArray(stats.monthlyHistory) && stats.monthlyHistory.length > 0) {
      record.monthlyHistory = stats.monthlyHistory.slice(0, 12)
    }

    record.lastSyncedAt = new Date().toISOString()
    if (emitUpdate) {
      this._saveToDisk()
      this._notifyListeners()
    }
  }

  /**
   * Ingests an array of PrintJob documents fetched from GET /api/jobs/queued.
   */
  ingestJobsList(jobs = [], explicitShopCode = '') {
    if (!Array.isArray(jobs) || jobs.length === 0) return
    const shopCode = String(explicitShopCode || this._getActiveShopCode()).toUpperCase().trim()
    if (!shopCode) return

    for (const rawJob of jobs) {
      if (!rawJob || (!rawJob.jobId && !rawJob._id)) continue
      const status = String(rawJob.status || '').toUpperCase().trim()
      if (status === 'PRINTED_SUCCESSFULLY' || status === 'COMPLETED') {
        this.recordJobEvent('SUCCESS', rawJob, shopCode, false)
      } else if (status === 'PRINT_FAILED' || status === 'FAILED') {
        this.recordJobEvent('FAILED', rawJob, shopCode, false)
      } else if (status === 'CANCELLED' || status === 'REJECTED') {
        this.recordJobEvent('CANCELLED', rawJob, shopCode, false)
      } else if (status === 'WAITING_COUNTER_APPROVAL') {
        this.recordJobEvent('COUNTER_PENDING', rawJob, shopCode, false)
      } else if (status === 'PRINTING') {
        this.recordJobEvent('PRINTING', rawJob, shopCode, false)
      } else {
        this.recordJobEvent('QUEUED', rawJob, shopCode, false)
      }
    }

    this._saveToDisk()
    this._notifyListeners()
  }

  /**
   * Records a real-time job lifecycle event (QUEUED, COUNTER_PENDING, DISPATCHED, PRINTING, SUCCESS, FAILED, CANCELLED)
   * and updates Today, Monthly, and Lifetime counters idempotently (strictly once per completed jobId).
   */
  recordJobEvent(eventType, rawJob = {}, explicitShopCode = '', emitUpdate = true) {
    if (!rawJob || typeof rawJob !== 'object') return

    const shopCode = String(
      explicitShopCode || rawJob.shopCode || this._getActiveShopCode()
    )
      .toUpperCase()
      .trim()
    if (!shopCode) return

    const record = this._getOrCreateShopRecord(shopCode)
    const normalized = normalizeJobRecord(rawJob, record.shopProfile)
    if (!normalized.jobId) return

    const existingIdx = record.recentJobs.findIndex((j) => j.jobId === normalized.jobId)
    const previousJob = existingIdx >= 0 ? record.recentJobs[existingIdx] : null

    if (eventType === 'COUNTER_PENDING') {
      normalized.status = 'WAITING_COUNTER_APPROVAL'
    } else if (eventType === 'DISPATCHED') {
      normalized.status = 'DISPATCHED_TO_AGENT'
    } else if (eventType === 'PRINTING') {
      normalized.status = 'PRINTING'
    } else if (eventType === 'SUCCESS') {
      normalized.status = 'PRINTED_SUCCESSFULLY'
    } else if (eventType === 'FAILED') {
      normalized.status = 'PRINT_FAILED'
    } else if (eventType === 'CANCELLED') {
      normalized.status = 'CANCELLED'
    }

    const mergedJob = previousJob
      ? {
          ...previousJob,
          ...normalized,
          totalAmount: normalized.totalAmount > 0 ? normalized.totalAmount : previousJob.totalAmount,
          printedPrinterName: normalized.printedPrinterName || previousJob.printedPrinterName,
          errorMessage: normalized.errorMessage || ( normalized.status === 'PRINT_FAILED' ? previousJob.errorMessage : '' ),
          updatedAt: new Date().toISOString(),
        }
      : normalized

    if (existingIdx >= 0) {
      record.recentJobs.splice(existingIdx, 1)
    }
    record.recentJobs.unshift(mergedJob)
    if (record.recentJobs.length > 40) {
      record.recentJobs = record.recentJobs.slice(0, 40)
    }

    const jobDate = mergedJob.createdAt ? new Date(mergedJob.createdAt) : new Date()
    const jobTodayKey = getTodayKey(jobDate)
    const jobMonthKey = getMonthKey(jobDate)
    const jobYearKey = getYearKey(jobDate)

    if (
      (mergedJob.status === 'PRINTED_SUCCESSFULLY' || mergedJob.status === 'COMPLETED') &&
      !record.recordedJobIds.includes(mergedJob.jobId)
    ) {
      record.recordedJobIds.push(mergedJob.jobId)
      if (record.recordedJobIds.length > 500) {
        record.recordedJobIds = record.recordedJobIds.slice(-500)
      }

      const isColor = mergedJob.colorType === 'COLOR'
      const amount = Number(mergedJob.totalAmount) || 0
      const pages = Number(mergedJob.pagesPrinted) || 1
      const bwPages = Number(mergedJob.bwPagesPrinted) || 0
      const colorPages = Number(mergedJob.colorPagesPrinted) || 0

      if (jobTodayKey === record.today.date) {
        record.today.revenue = Math.round((record.today.revenue + amount) * 100) / 100
        if (mergedJob.isCounterOrder) {
          record.today.counterRevenue = Math.round((record.today.counterRevenue + amount) * 100) / 100
        } else {
          record.today.onlineRevenue = Math.round((record.today.onlineRevenue + amount) * 100) / 100
        }
        record.today.jobsCompleted += 1
        if (isColor) record.today.colorJobsCount += 1
        else record.today.bwJobsCount += 1
        record.today.totalPagesPrinted += pages
        record.today.bwPagesPrinted += bwPages
        record.today.colorPagesPrinted += colorPages
      }

      if (jobMonthKey === record.currentMonth.monthKey) {
        record.currentMonth.revenue = Math.round((record.currentMonth.revenue + amount) * 100) / 100
        record.currentMonth.jobsCompleted += 1
        if (isColor) record.currentMonth.colorJobsCount += 1
        else record.currentMonth.bwJobsCount += 1
        record.currentMonth.totalPagesPrinted += pages
        record.currentMonth.bwPagesPrinted += bwPages
        record.currentMonth.colorPagesPrinted += colorPages
      }

      if (jobYearKey === record.currentYear.yearKey) {
        record.currentYear.revenue = Math.round((record.currentYear.revenue + amount) * 100) / 100
        record.currentYear.jobsCompleted += 1
        record.currentYear.totalPagesPrinted += pages
      }

      record.lifetime.totalRevenue = Math.round((record.lifetime.totalRevenue + amount) * 100) / 100
      record.lifetime.totalJobsCompleted += 1
      if (isColor) record.lifetime.colorJobsCount += 1
      else record.lifetime.bwJobsCount += 1
      record.lifetime.totalPagesPrinted += pages
      record.lifetime.bwPagesPrinted += bwPages
      record.lifetime.colorPagesPrinted += colorPages
    } else if (
      mergedJob.status === 'PRINT_FAILED' &&
      previousJob?.status !== 'PRINT_FAILED' &&
      jobTodayKey === record.today.date
    ) {
      record.today.failedJobs += 1
    }

    record.lastSyncedAt = new Date().toISOString()
    if (emitUpdate) {
      this._saveToDisk()
      this._notifyListeners()
    }
  }

  getSnapshot(customShopCode = '') {
    const shopCode = String(customShopCode || this._getActiveShopCode() || '').toUpperCase().trim()
    if (!shopCode) {
      return createEmptyShopRecord('')
    }

    const record = this._getOrCreateShopRecord(shopCode)
    const pendingCounterJobs = record.recentJobs.filter(
      (j) => j.status === 'WAITING_COUNTER_APPROVAL'
    )
    const activeQueuedJobs = record.recentJobs.filter((j) =>
      ['PENDING_PAYMENT', 'PAYMENT_VERIFIED', 'DISPATCHED_TO_AGENT', 'PRINTING'].includes(j.status)
    )

    return {
      shopCode: record.shopCode,
      shopProfile: { ...record.shopProfile },
      today: {
        ...record.today,
        pendingCounterCount: pendingCounterJobs.length,
        activeQueueCount: activeQueuedJobs.length,
      },
      currentMonth: { ...record.currentMonth },
      currentYear: { ...record.currentYear },
      lifetime: { ...record.lifetime },
      monthlyHistory: [...(record.monthlyHistory || [])],
      recentJobs: [...record.recentJobs],
      lastSyncedAt: record.lastSyncedAt,
      syncSource: record.syncSource,
    }
  }
}

const statsService = new StatsService()
export default statsService
