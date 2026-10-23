import axios from 'axios'
import http from 'http'
import https from 'https'
import os from 'os'
import path from 'path'
import fs from 'fs'
import crypto from 'crypto'
import ptp from 'pdf-to-printer'
import { PDFDocument } from 'pdf-lib'
import configStore from '../store/configStore.js'
import printerManager from './printerManager.js'
import { DEFAULT_SERVER_URL, PRINT_COOLDOWN_MS } from '../config/constants.js'
import logger from '../utils/logger.js'

const httpAgent = new http.Agent({ keepAlive: true, maxSockets: 30 })
const httpsAgent = new https.Agent({ keepAlive: true, maxSockets: 30 })
const downloadClient = axios.create({
  httpAgent,
  httpsAgent,
  timeout: 20000,
  maxRedirects: 5,
})

function computeEffectiveDimensions(page) {
  const { width, height } = page.getSize()
  const rotation = page.getRotation().angle || 0
  const isRotated = rotation === 90 || rotation === 270
  const effectiveWidth = isRotated ? height : width
  const effectiveHeight = isRotated ? width : height
  return {
    width,
    height,
    effectiveWidth,
    effectiveHeight,
    rotation,
    orientation: effectiveWidth > effectiveHeight ? 'landscape' : 'portrait',
  }
}

export function getFileSha256(filePathOrBuffer) {
  try {
    if (!filePathOrBuffer) return null
    const buffer = Buffer.isBuffer(filePathOrBuffer)
      ? filePathOrBuffer
      : fs.existsSync(filePathOrBuffer)
        ? fs.readFileSync(filePathOrBuffer)
        : null
    if (!buffer) return null
    return crypto.createHash('sha256').update(buffer).digest('hex')
  } catch {
    return null
  }
}

/**
 * Unified PDF media & orientation inspector.
 * Reads the file once, computes first-page dimensions, multi-page majority orientation
 * (up to 10 pages, accounting for /Rotate 90/180/270 tags), and SHA-256 digest.
 */
export async function inspectPdfMedia(filePath) {
  try {
    if (!filePath || !fs.existsSync(filePath)) return null
    const buffer = fs.readFileSync(filePath)
    const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true })
    const pageCount = pdfDoc.getPageCount()
    if (pageCount === 0) return null

    const firstPageDims = computeEffectiveDimensions(pdfDoc.getPage(0))

    let landscapeCount = 0
    let portraitCount = 0
    const checkLimit = Math.min(pageCount, 10)

    for (let i = 0; i < checkLimit; i++) {
      const dims = computeEffectiveDimensions(pdfDoc.getPage(i))
      if (dims.orientation === 'landscape') {
        landscapeCount++
      } else {
        portraitCount++
      }
    }

    const majorityOrientation = landscapeCount > portraitCount ? 'landscape' : 'portrait'
    const sha256 = crypto.createHash('sha256').update(buffer).digest('hex')

    return {
      pageCount,
      width: firstPageDims.width,
      height: firstPageDims.height,
      effectiveWidth: firstPageDims.effectiveWidth,
      effectiveHeight: firstPageDims.effectiveHeight,
      rotation: firstPageDims.rotation,
      orientation: majorityOrientation,
      sha256,
      sizeBytes: buffer.length,
    }
  } catch (err) {
    logger.warn('PrintService', `Could not inspect PDF media from file: ${err.message}`)
    return null
  }
}

/**
 * Detects whether a PDF file on disk has predominantly Landscape or Portrait pages.
 */
export async function detectPdfOrientation(filePath) {
  const media = await inspectPdfMedia(filePath)
  return media ? media.orientation : null
}

function resolveMonochrome(jobData) {
  if (typeof jobData?.printOptions?.monochrome === 'boolean') {
    return jobData.printOptions.monochrome
  }
  const colorType = String(jobData?.colorType || '').toUpperCase().trim()
  return colorType !== 'COLOR'
}

export function normalizePaperSize(rawSize) {
  const resolved = String(rawSize || 'A4').trim()
  const lowerSize = resolved.toLowerCase()
  if (lowerSize === '4x6' || lowerSize === '4*6' || lowerSize === '4x6 in' || lowerSize === '4x6in') {
    return '10x15cm'
  }
  if (lowerSize === '5x7' || lowerSize === '5*7' || lowerSize === '5x7 in' || lowerSize === '5x7in') {
    return '13x18cm'
  }
  return resolved || 'A4'
}

/**
 * Extracts explicit page range string if sent by Kiosk print instructions (e.g. "1-3,5").
 */
function resolveKioskPageRange(jobData) {
  const rawRange =
    jobData?.printOptions?.pages ||
    jobData?.pageRange ||
    jobData?.pageRanges ||
    (typeof jobData?.pages === 'string' ? jobData.pages : '')
  const cleaned = String(rawRange || '').trim()
  if (!cleaned || cleaned.toUpperCase() === 'ALL') return undefined
  if (/^[0-9,\-\s]+$/.test(cleaned)) {
    return cleaned.replace(/\s+/g, '')
  }
  return undefined
}

/**
 * Resolves the hardware duplex mode string for SumatraPDF / Windows Print Spooler:
 * - Duplex ON, Portrait sheet  -> 'duplexlong' (book flip on vertical long edge)
 * - Duplex ON, Landscape sheet -> 'duplexshort' (book flip on vertical short edge)
 * - Duplex OFF                 -> 'simplex'
 */
export function resolveDuplexSide(isDuplexOrJob, sheetOrientation = 'portrait') {
  let isDuplex = false
  let orientation = String(sheetOrientation || 'portrait').toLowerCase().trim()
  let explicitFlip = null

  if (typeof isDuplexOrJob === 'boolean') {
    isDuplex = isDuplexOrJob
  } else if (isDuplexOrJob && typeof isDuplexOrJob === 'object') {
    const job = isDuplexOrJob
    const explicitSide = String(
      job?.printOptions?.side || job?.side || job?.duplexMode || job?.printSide || ''
    )
      .toLowerCase()
      .trim()

    if (explicitSide === 'duplexshort' || explicitSide === 'duplexlong' || explicitSide === 'simplex') {
      return explicitSide
    }

    isDuplex =
      explicitSide === 'duplex' ||
      job?.duplex === true ||
      job?.duplex?.enabled === true ||
      job?.isDuplex === true ||
      job?.doubleSided === true ||
      job?.printSides === 'DOUBLE' ||
      job?.printSides === 'double' ||
      job?.sides === 'double'

    if (!sheetOrientation || sheetOrientation === 'portrait') {
      const rawOrient = String(
        job?.layout?.sheetOrientation ||
          job?.printOptions?.orientation ||
          job?.sheetOrientation ||
          job?.orientation ||
          ''
      )
        .toLowerCase()
        .trim()
      if (rawOrient) orientation = rawOrient
    }

    if (job?.duplex?.flip || job?.duplexFlip) {
      explicitFlip = String(job?.duplex?.flip || job?.duplexFlip).toLowerCase().trim()
    }
  }

  if (!isDuplex) return 'simplex'

  if (explicitFlip === 'short') {
    return 'duplexshort'
  }
  if (explicitFlip === 'long') {
    return 'duplexlong'
  }

  const isLandscape = orientation === 'landscape'
  return isLandscape ? 'duplexshort' : 'duplexlong'
}

class PrintService {
  constructor() {
    this.tempDir = path.join(os.tmpdir(), 'scan-and-print-jobs')
    this.ensureTempDir()
    this.activePrintingJobs = new Set()
    this.recentlySpooledJobs = new Map()
    this.preDownloadedFiles = new Map()
    this.printerQueues = new Map()
    this.PRINT_COOLDOWN_MS = PRINT_COOLDOWN_MS
  }

  ensureTempDir() {
    try {
      if (!fs.existsSync(this.tempDir)) {
        fs.mkdirSync(this.tempDir, { recursive: true })
      }
    } catch (err) {
      logger.error('PrintService', 'Error creating temp directory:', err.message)
    }
  }

  _enqueueOnPrinter(printerKey, taskFn) {
    const key = String(printerKey || 'DEFAULT_PRINTER').toLowerCase().trim()
    const prevPromise = this.printerQueues.get(key) || Promise.resolve()
    const nextPromise = prevPromise
      .catch(() => {})
      .then(() => taskFn())
      .finally(() => {
        if (this.printerQueues.get(key) === nextPromise) {
          this.printerQueues.delete(key)
        }
      })
    this.printerQueues.set(key, nextPromise)
    return nextPromise
  }

  async preDownloadJobFile(jobData) {
    if (!jobData?.jobId) return null
    const cleanJobId = String(jobData.jobId).replace(/[^a-zA-Z0-9_-]/g, '_')
    if (this.preDownloadedFiles.has(cleanJobId)) {
      const existing = this.preDownloadedFiles.get(cleanJobId)
      if (fs.existsSync(existing)) return existing
    }

    try {
      logger.job('PrintService', `Pre-downloading file for Counter Order #${jobData.jobId} in background...`)
      const tempFilePath = await this._downloadAndPrepareFile(jobData)
      if (tempFilePath && fs.existsSync(tempFilePath)) {
        this.preDownloadedFiles.set(cleanJobId, tempFilePath)
        logger.success('PrintService', `Counter Order #${jobData.jobId} pre-downloaded & ready for 0ms print execution!`)
        return tempFilePath
      }
    } catch (err) {
      logger.warn('PrintService', `Pre-download note for #${jobData.jobId}:`, err.message)
    }
    return null
  }

  cleanupPreDownloaded(jobId) {
    if (!jobId) return
    const cleanJobId = String(jobId).replace(/[^a-zA-Z0-9_-]/g, '_')
    if (this.preDownloadedFiles.has(cleanJobId)) {
      const filePath = this.preDownloadedFiles.get(cleanJobId)
      this.preDownloadedFiles.delete(cleanJobId)
      this.purgeFile(filePath)
    }
  }

  /**
   * Downloads the ready-to-print file prepared by the Kiosk / Cloud Backend directly to disk
   * without running any local image-to-PDF conversion.
   */
  async _downloadAndPrepareFile(jobData) {
    const { jobId, fileUrl, downloadUrl } = jobData
    const cleanJobId = String(jobId || 'job').replace(/[^a-zA-Z0-9_-]/g, '_')
    const tempFilePath = path.join(this.tempDir, `job_${cleanJobId}_${Date.now()}.pdf`)
    let fileBuffer = null

    if (fileUrl && fileUrl.startsWith('data:')) {
      logger.info('PrintService', `Decoding Base64 file payload for #${jobId}...`)
      const base64Data = fileUrl.replace(/^data:[^;]+;base64,/, '')
      fileBuffer = Buffer.from(base64Data, 'base64')
    } else {
      const serverUrl = (configStore.get('serverUrl') || DEFAULT_SERVER_URL).replace(/\/+$/, '')
      const candidateUrls = []

      if (fileUrl && (fileUrl.startsWith('http://') || fileUrl.startsWith('https://'))) {
        if (fileUrl.includes('cloudinary.com') && fileUrl.match(/\.(webp|heic|heif|avif|tiff|bmp)$/i)) {
          candidateUrls.push(fileUrl.replace(/\.[a-zA-Z0-9]+$/, '.pdf'))
        }
        candidateUrls.push(fileUrl)
      }
      if (downloadUrl) {
        const fullDl = downloadUrl.startsWith('http')
          ? downloadUrl
          : `${serverUrl}${downloadUrl.startsWith('/') ? '' : '/'}${downloadUrl}`
        if (fullDl.includes('cloudinary.com') && fullDl.match(/\.(webp|heic|heif|avif|tiff|bmp)$/i)) {
          candidateUrls.push(fullDl.replace(/\.[a-zA-Z0-9]+$/, '.pdf'))
        }
        candidateUrls.push(fullDl)
      }
      candidateUrls.push(`${serverUrl}/api/kiosk/download/${cleanJobId}`)

      const uniqueCandidates = [...new Set(candidateUrls)]
      for (const targetUrl of uniqueCandidates) {
        try {
          const response = await downloadClient.get(targetUrl, {
            responseType: 'arraybuffer',
          })
          if (response.status === 200 && response.data && response.data.byteLength > 10) {
            fileBuffer = Buffer.from(response.data)
            logger.success(
              'PrintService',
              `Downloaded document (${fileBuffer.length} bytes) via Keep-Alive for Job #${cleanJobId}`
            )
            break
          }
        } catch {
          // Try next candidate URL
        }
      }
    }

    if (!fileBuffer || fileBuffer.length === 0) {
      throw new Error(`Could not download a valid document file for Job #${jobId}`)
    }

    fs.writeFileSync(tempFilePath, fileBuffer)
    fileBuffer = null
    return tempFilePath
  }

  async executePrintJob(jobData, onProgress = null) {
    const { jobId } = jobData || {}

    if (jobId && this.activePrintingJobs.has(jobId)) {
      logger.warn('PrintService', `Job #${jobId} is already in flight - dropping duplicate trigger (ALREADY_IN_FLIGHT).`)
      return { status: 'ALREADY_IN_FLIGHT', jobId, printedOn: null, timestamp: new Date().toISOString() }
    }

    if (jobId && this.recentlySpooledJobs.has(jobId)) {
      const elapsed = Date.now() - this.recentlySpooledJobs.get(jobId)
      if (elapsed < this.PRINT_COOLDOWN_MS) {
        logger.warn(
          'PrintService',
          `Job #${jobId} was spooled ${elapsed}ms ago (< ${this.PRINT_COOLDOWN_MS}ms cooldown) - dropping duplicate (RECENTLY_SPOOLED).`
        )
        return { status: 'RECENTLY_SPOOLED', jobId, printedOn: null, timestamp: new Date().toISOString() }
      }
    }

    if (jobId) this.activePrintingJobs.add(jobId)

    try {
      return await this._doExecutePrintJob(jobData, onProgress)
    } finally {
      if (jobId) {
        this.activePrintingJobs.delete(jobId)
        this.recentlySpooledJobs.set(jobId, Date.now())
        const cutoff = Date.now() - 10 * 60 * 1000
        for (const [id, ts] of this.recentlySpooledJobs) {
          if (ts < cutoff) this.recentlySpooledJobs.delete(id)
        }
      }
    }
  }

  async _doExecutePrintJob(jobData, onProgress = null) {
    const { jobId, colorType, copies = 1, targetPrinterName } = jobData
    logger.job(
      'PrintService',
      `Processing Kiosk Print Job #${jobId}... (Copies: ${copies}, Color: ${colorType}, Duplex: ${resolveDuplexSide(jobData)})`
    )

    const cleanJobId = String(jobId || 'job').replace(/[^a-zA-Z0-9_-]/g, '_')
    let tempFilePath = null

    if (this.preDownloadedFiles.has(cleanJobId)) {
      const prePath = this.preDownloadedFiles.get(cleanJobId)
      if (fs.existsSync(prePath)) {
        tempFilePath = prePath
        this.preDownloadedFiles.delete(cleanJobId)
        logger.success('PrintService', `Using pre-downloaded file for Job #${jobId} (0ms network delay!)`)
      }
    }

    if (!tempFilePath) {
      tempFilePath = await this._downloadAndPrepareFile(jobData)
    }

    try {
      const mediaInfo = await inspectPdfMedia(tempFilePath)
      logger.info(
        'PrintService',
        `[DIAGNOSTICS] Job #${jobId} file ready: size=${mediaInfo?.sizeBytes || 0} bytes, ` +
          `SHA-256=${mediaInfo?.sha256 ? `${mediaInfo.sha256.slice(0, 16)}...` : 'unknown'}, ` +
          `firstPage=${mediaInfo ? `${mediaInfo.width.toFixed(2)}x${mediaInfo.height.toFixed(2)}pt (${mediaInfo.orientation})` : 'unknown'}`
      )

      // Follow Kiosk page layout & orientation instructions directly
      const pagesPerSheet = Number(jobData?.layout?.pagesPerSheet || jobData?.pagesPerSheet || 1)
      const rawOrientation = String(
        jobData?.layout?.sheetOrientation ||
          jobData?.printOptions?.orientation ||
          jobData?.sheetOrientation ||
          jobData?.orientation ||
          ''
      )
        .toLowerCase()
        .trim()

      let effectiveOrientation = undefined
      if (pagesPerSheet === 1) {
        if (rawOrientation === 'landscape') {
          effectiveOrientation = 'landscape'
        } else if (rawOrientation === 'portrait') {
          effectiveOrientation = 'portrait'
        } else if (mediaInfo?.orientation) {
          effectiveOrientation = mediaInfo.orientation
        }
      } else {
        // For N-Up documents (2-in-1, 4-in-1):
        // If composed sheet is portrait, specify portrait so standard portrait drivers print 1:1.
        // If composed sheet is landscape, leave orientation undefined so SumatraPDF's built-in auto-rotation
        // automatically aligns the page to match the physical paper tray (whether portrait or landscape feed),
        // preventing awkward shrinking or giant white margins.
        if (mediaInfo?.orientation === 'portrait') {
          effectiveOrientation = 'portrait'
        } else {
          effectiveOrientation = undefined
        }
      }

      const requestedMonochrome = resolveMonochrome(jobData)
      const requestedDuplexSide = resolveDuplexSide(
        jobData,
        effectiveOrientation || mediaInfo?.orientation || rawOrientation || 'portrait'
      )
      const isDuplexRequested = requestedDuplexSide !== 'simplex'

      const printerProfile = await printerManager.resolveTargetPrinterProfile({
        targetPrinterName: targetPrinterName || jobData?.printOptions?.printer,
        colorType,
        isDuplex: isDuplexRequested,
      })

      const selectedPrinter = printerProfile?.name || ''

      // Capability-aware safety clamping so simplex/monochrome drivers never stall
      let effectiveMonochrome = requestedMonochrome
      if (!requestedMonochrome && printerProfile && printerProfile.supportsColor === false) {
        logger.info(
          'PrintService',
          `Printer "${selectedPrinter}" is Monochrome-only (B&W); clamping color mode to monochrome.`
        )
        effectiveMonochrome = true
      }

      let effectiveDuplexSide = requestedDuplexSide
      if (isDuplexRequested && printerProfile && printerProfile.supportsDuplex === false) {
        logger.info(
          'PrintService',
          `Printer "${selectedPrinter}" is Simplex-only (1-sided); clamping duplex mode to simplex so printing proceeds without stalling.`
        )
        effectiveDuplexSide = 'simplex'
      }

      const resolvedPaperSize = normalizePaperSize(
        jobData?.layout?.paperSize || jobData?.printOptions?.paperSize || jobData?.paperSize || 'A4'
      )

      const requestedScale = String(
        jobData?.printOptions?.scale || jobData?.layout?.scale || jobData?.scale || ''
      )
        .toLowerCase()
        .trim()
      const resolvedScale = requestedScale === 'noscale' ? 'noscale' : (requestedScale === 'shrink' ? 'shrink' : 'fit')

      const kioskPageRange = resolveKioskPageRange(jobData)

      const printOptions = {
        printer: selectedPrinter || undefined,
        copies: Math.max(1, Number(jobData?.printOptions?.copies || copies) || 1),
        silent: true,
        monochrome: effectiveMonochrome,
        side: effectiveDuplexSide,
        ...(effectiveOrientation ? { orientation: effectiveOrientation } : {}),
        paperSize: resolvedPaperSize,
        scale: resolvedScale,
        ...(kioskPageRange ? { pages: kioskPageRange } : {}),
      }

      if (typeof onProgress === 'function') {
        try {
          onProgress({
            jobId,
            status: 'PRINTING',
            printerName: selectedPrinter || 'Default Printer',
            printOptions,
          })
        } catch {
          // Ignore progress listener error
        }
      }

      await this._enqueueOnPrinter(selectedPrinter || 'DEFAULT', async () => {
        logger.print(
          'PrintService',
          `Spooling Job #${jobId} to printer: ${selectedPrinter || 'System Default'} ` +
            `(options: ${JSON.stringify({ ...printOptions, printer: selectedPrinter || 'System Default' })})`
        )

        try {
          if (selectedPrinter) {
            try {
              await ptp.print(tempFilePath, printOptions)
            } catch (firstErr) {
              logger.warn(
                'PrintService',
                `Transient spooler notice on "${selectedPrinter}" (${firstErr.message}) — retrying in 800ms...`
              )
              await new Promise((r) => setTimeout(r, 800))
              await ptp.print(tempFilePath, printOptions)
            }
            logger.success('PrintService', `Silent hardware print executed successfully for Job #${jobId}`)
          } else {
            logger.warn('PrintService', 'No target printer resolved - falling back to OS default print verb.')
            await this.fallbackWindowsPrint(tempFilePath, null)
          }
        } catch (printErr) {
          logger.warn('PrintService', `Silent print fallback triggered (${printErr.message})...`)
          await this.fallbackWindowsPrint(tempFilePath, selectedPrinter)
        }
      })

      const fileSize =
        mediaInfo?.sizeBytes || (fs.existsSync(tempFilePath) ? fs.statSync(tempFilePath).size : 1024 * 1024)
      const fileSizeMb = fileSize / (1024 * 1024)
      const purgeDelayMs = Math.min(Math.max(5000, fileSizeMb * 1000), 20000)
      setTimeout(() => this.purgeFile(tempFilePath), purgeDelayMs)

      return {
        success: true,
        jobId,
        printedOn: selectedPrinter || 'Default Printer',
        pageCount: mediaInfo?.pageCount || Number(jobData?.totalPages) || 1,
        printOptions: {
          orientation: printOptions.orientation,
          paperSize: printOptions.paperSize,
          scale: printOptions.scale,
          side: printOptions.side,
          copies: printOptions.copies,
          monochrome: printOptions.monochrome,
          ...(kioskPageRange ? { pages: kioskPageRange } : {}),
        },
        timestamp: new Date().toISOString(),
      }
    } catch (err) {
      logger.error('PrintService', `Failed to print Job #${jobId}:`, err.message)
      this.purgeFile(tempFilePath)
      throw new Error(`Print execution failed: ${err.message}`)
    }
  }

  async fallbackWindowsPrint(filePath, printerName) {
    const { execFile } = await import('child_process')
    return new Promise((resolve, reject) => {
      if (!fs.existsSync(filePath)) {
        return reject(new Error(`Print file does not exist: ${filePath}`))
      }

      const psArgs = ['-NoProfile', '-NonInteractive']
      if (printerName) {
        const cleanPrinter = String(printerName).replace(/[^\w\s\-._()]/g, '').trim()
        psArgs.push(
          '-Command',
          'Start-Process -FilePath $args[0] -Verb PrintTo -ArgumentList $args[1] -WindowStyle Hidden -PassThru | Out-Null',
          filePath,
          cleanPrinter
        )
      } else {
        psArgs.push(
          '-Command',
          'Start-Process -FilePath $args[0] -Verb Print -WindowStyle Hidden -PassThru | Out-Null',
          filePath
        )
      }

      execFile('powershell.exe', psArgs, { timeout: 15000, windowsHide: true }, (error) => {
        if (error) {
          logger.error('PrintService', 'Windows fallback print error:', error.message)
          reject(error)
        } else {
          logger.success('PrintService', 'Windows fallback print queued in Spooler')
          resolve(true)
        }
      })
    })
  }

  purgeFile(filePath) {
    try {
      if (filePath && fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
        logger.info('PrintService', `Auto-purged temp file: ${filePath}`)
      }
    } catch (err) {
      logger.error('PrintService', `Failed to purge temp file ${filePath}:`, err)
    }
  }
}

const printService = new PrintService()
export default printService
