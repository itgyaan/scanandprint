import ptp from 'pdf-to-printer'
import path from 'path'
import fs from 'fs'
import os from 'os'
import { exec } from 'child_process'
import { promisify } from 'util'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import configStore from '../store/configStore.js'
import {
  PRINTER_CACHE_TTL_MS,
  VIRTUAL_PRINTER_KEYWORDS,
} from '../config/constants.js'
import logger from '../utils/logger.js'

const execAsync = promisify(exec)

// Standard Win32_Printer PrinterStatus codes
const PRINTER_STATUS_MAP = Object.freeze({
  1: 'Other',
  2: 'Unknown',
  3: 'Ready',
  4: 'Printing',
  5: 'Warming Up',
  6: 'Stopped',
  7: 'Offline',
})

// ExtendedPrinterStatus codes from Win32_Printer for detailed hardware diagnostics
const EXTENDED_STATUS_MAP = Object.freeze({
  1: 'Other',
  2: 'Unknown',
  3: 'Ready',
  4: 'Printing',
  5: 'Warming Up',
  6: 'Stopped Printing',
  7: 'Offline',
  8: 'Paused',
  9: 'Error',
  10: 'Busy',
  11: 'Not Available',
  12: 'Waiting',
  13: 'Processing',
  14: 'Initialization',
  15: 'Power Save',
  16: 'Pending Deletion',
  17: 'I/O Active',
  18: 'Manual Feed',
})

// Bitmask flags for Win32_Printer.PrinterState (Windows 7, 10, 11)
function decodePrinterStateFlags(stateInt = 0, statusInt = 0, extStatusInt = 0, workOffline = false) {
  if (workOffline || statusInt === 7 || extStatusInt === 7 || (stateInt & 0x00000080) !== 0 || (stateInt & 0x00400000) !== 0) {
    return { statusText: 'Offline', isOnline: false, isError: false, isBusy: false }
  }
  if ((stateInt & 0x00000008) !== 0) {
    return { statusText: 'Paper Jam', isOnline: false, isError: true, isBusy: false }
  }
  if ((stateInt & 0x00000010) !== 0 || (stateInt & 0x00000040) !== 0) {
    return { statusText: 'Out of Paper', isOnline: false, isError: true, isBusy: false }
  }
  if ((stateInt & 0x00000020) !== 0) {
    return { statusText: 'Manual Feed', isOnline: true, isError: false, isBusy: true }
  }
  if ((stateInt & 0x00400000) !== 0 || (stateInt & 0x00000800) !== 0) {
    return { statusText: 'Door Open', isOnline: false, isError: true, isBusy: false }
  }
  if ((stateInt & 0x00040000) !== 0) {
    return { statusText: 'No Toner / Ink', isOnline: false, isError: true, isBusy: false }
  }
  if ((stateInt & 0x00020000) !== 0) {
    return { statusText: 'Toner / Ink Low', isOnline: true, isError: false, isBusy: false }
  }
  if ((stateInt & 0x00000001) !== 0 || extStatusInt === 8) {
    return { statusText: 'Paused', isOnline: false, isError: true, isBusy: false }
  }
  if ((stateInt & 0x00000002) !== 0 || statusInt === 6 || extStatusInt === 9) {
    return { statusText: 'Printer Error', isOnline: false, isError: true, isBusy: false }
  }
  if ((stateInt & 0x00000400) !== 0 || (stateInt & 0x00004000) !== 0 || statusInt === 4 || extStatusInt === 4 || extStatusInt === 13) {
    return { statusText: 'Printing', isOnline: true, isError: false, isBusy: true }
  }
  if ((stateInt & 0x00010000) !== 0 || statusInt === 5 || extStatusInt === 5) {
    return { statusText: 'Warming Up', isOnline: true, isError: false, isBusy: true }
  }
  if (statusInt === 3 || extStatusInt === 3 || statusInt === 0) {
    return { statusText: 'Ready', isOnline: true, isError: false, isBusy: false }
  }
  const label = EXTENDED_STATUS_MAP[extStatusInt] || PRINTER_STATUS_MAP[statusInt] || 'Ready'
  return { statusText: label, isOnline: true, isError: false, isBusy: statusInt === 4 }
}

/**
 * Universal PowerShell Printer & Driver Inspector for Windows 7 (PS 2.0+), Windows 10, and Windows 11.
 * - Uses Get-CimInstance (Win 8/10/11) with automatic fallback to Get-WmiObject (Win 7 SP1+).
 * - Queries .NET System.Drawing.Printing.PrinterSettings (available in .NET 2.0/3.5/4.x on ALL Windows 7/10/11 PCs)
 *   to inspect true GDI driver capabilities: SupportsColor, CanDuplex, DefaultPageSettings.Color, Duplex mode, and PaperSize.
 * - Uses Get-PrintConfiguration when available on Win 8/10/11 as an additional signal.
 * - Emits line-delimited records (SP_PRINTER_ROW|...) so it works even on Windows 7 PowerShell 2.0 where ConvertTo-Json does not exist!
 */
const UNIVERSAL_PRINTER_PS_SCRIPT = `
$ErrorActionPreference = 'SilentlyContinue'
try { Add-Type -AssemblyName System.Drawing -ErrorAction SilentlyContinue } catch {}

$printers = $null
if (Get-Command Get-CimInstance -ErrorAction SilentlyContinue) {
  try { $printers = Get-CimInstance -ClassName Win32_Printer -ErrorAction Stop } catch {}
}
if (-not $printers) {
  try { $printers = Get-WmiObject -Class Win32_Printer -ErrorAction Stop } catch {}
}

$hasPrintConfig = [bool](Get-Command Get-PrintConfiguration -ErrorAction SilentlyContinue)

foreach ($p in $printers) {
  if (-not $p -or -not $p.Name) { continue }
  $pName = [string]$p.Name
  $isDef = [bool]$p.Default
  $port = [string]$p.PortName
  $driver = [string]$p.DriverName
  $offline = [bool]$p.WorkOffline
  $status = [int]$p.PrinterStatus
  $extStatus = [int]$p.ExtendedPrinterStatus
  $pState = [int]$p.PrinterState
  $jobs = [int]$p.JobCountSinceLastReset

  $colorCap = $false
  $duplexCap = $false
  $curColor = ''
  $curDuplex = ''
  $curPaper = 'A4'

  # 1. Check Win32_Printer numeric Capabilities array (3 = Color, 4 = Duplex)
  if ($p.Capabilities) {
    foreach ($c in $p.Capabilities) {
      if ([int]$c -eq 3) { $colorCap = $true }
      if ([int]$c -eq 4) { $duplexCap = $true }
    }
  }

  # 2. Check Win32_Printer string CapabilityDescriptions
  if ($p.CapabilityDescriptions) {
    foreach ($desc in $p.CapabilityDescriptions) {
      if ($desc -match 'Color') { $colorCap = $true }
      if ($desc -match 'Duplex') { $duplexCap = $true }
    }
  }

  # 3. Query .NET System.Drawing.Printing.PrinterSettings (Works on Windows 7, 10, and 11!)
  try {
    $ps = New-Object System.Drawing.Printing.PrinterSettings
    $ps.PrinterName = $pName
    if ($ps.IsValid) {
      if ($ps.SupportsColor) { $colorCap = $true }
      if ($ps.CanDuplex) { $duplexCap = $true }
      if ($ps.Duplex) {
        $dStr = $ps.Duplex.ToString()
        if ($dStr -eq 'Vertical' -or $dStr -eq 'Horizontal') {
          $duplexCap = $true
          $curDuplex = 'Duplex (' + $dStr + ')'
        } elseif ($dStr -eq 'Simplex') {
          $curDuplex = 'Simplex'
        }
      }
      $defPage = $ps.DefaultPageSettings
      if ($defPage) {
        if ($defPage.Color -eq $true) {
          $curColor = 'Color'
        } else {
          $curColor = 'Black & White'
        }
        if ($defPage.PaperSize -and $defPage.PaperSize.PaperName) {
          $curPaper = [string]$defPage.PaperSize.PaperName
        }
      }
    }
  } catch {}

  # 4. Also check Get-PrintConfiguration on Windows 8/10/11 if available
  if ($hasPrintConfig) {
    try {
      $cfg = Get-PrintConfiguration -PrinterName $pName -ErrorAction Stop
      if ($cfg) {
        if ($cfg.Color -eq $true -or $cfg.Color.ToString() -eq 'Color') {
          $colorCap = $true
          $curColor = 'Color'
        } elseif ($cfg.Color -eq $false -or $cfg.Color.ToString() -eq 'Grayscale' -or $cfg.Color.ToString() -eq 'Monochrome') {
          $curColor = 'Black & White'
        }
        if ($cfg.DuplexingMode) {
          $dm = $cfg.DuplexingMode.ToString()
          if ($dm -ne 'OneSided') {
            $duplexCap = $true
            $curDuplex = 'Duplex (' + $dm + ')'
          } else {
            $curDuplex = 'Simplex'
          }
        }
        if ($cfg.PaperSize) {
          $curPaper = $cfg.PaperSize.ToString()
        }
      }
    } catch {}
  }

  if (-not $colorCap) { $curColor = 'Black & White' }
  if (-not $duplexCap) { $curDuplex = 'Simplex' }
  if (-not $curColor) { $curColor = if ($colorCap) { 'Color / B&W' } else { 'Black & White' } }
  if (-not $curDuplex) { $curDuplex = if ($duplexCap) { 'Duplex Ready' } else { 'Simplex' } }

  $safeName = $pName -replace '\\|', '/'
  $safePort = $port -replace '\\|', '/'
  $safeDriver = $driver -replace '\\|', '/'
  $safePaper = $curPaper -replace '\\|', '/'

  Write-Output ("SP_PRINTER_ROW|" + $safeName + "|" + $isDef + "|" + $safePort + "|" + $safeDriver + "|" + $offline + "|" + $status + "|" + $extStatus + "|" + $pState + "|" + $colorCap + "|" + $duplexCap + "|" + $curColor + "|" + $curDuplex + "|" + $safePaper + "|" + $jobs)
}
`

export function isVirtualPrinterName(name = '', portName = '', driverName = '') {
  const combined = `${name} ${portName} ${driverName}`.toLowerCase()
  return (
    VIRTUAL_PRINTER_KEYWORDS.some((kw) => combined.includes(kw)) ||
    portName.toLowerCase() === 'portprompt:' ||
    portName.toLowerCase() === 'shrpub:' ||
    portName.toLowerCase() === 'nul:'
  )
}

async function runUniversalPowerShellPrinterQuery() {
  const tempDir = path.join(os.tmpdir(), 'scan-and-print-jobs')
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true })
  const scriptPath = path.join(
    tempDir,
    `printer-query-${Date.now()}-${Math.random().toString(36).slice(2, 7)}.ps1`
  )

  try {
    fs.writeFileSync(scriptPath, UNIVERSAL_PRINTER_PS_SCRIPT, 'utf8')
    const { stdout } = await execAsync(
      `powershell -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "${scriptPath}"`,
      { timeout: 15000, maxBuffer: 1024 * 1024 * 5, windowsHide: true }
    )

    const lines = String(stdout || '')
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l.startsWith('SP_PRINTER_ROW|'))

    return lines
      .map((line) => {
        const parts = line.split('|')
        const name = parts[1] || ''
        if (!name) return null
        return {
          Name: name,
          IsDefault: String(parts[2]).toLowerCase() === 'true',
          PortName: parts[3] || '',
          DriverName: parts[4] || '',
          WorkOffline: String(parts[5]).toLowerCase() === 'true',
          PrinterStatus: Number(parts[6]) || 0,
          ExtendedPrinterStatus: Number(parts[7]) || 0,
          PrinterState: Number(parts[8]) || 0,
          SupportsColor: String(parts[9]).toLowerCase() === 'true',
          SupportsDuplex: String(parts[10]).toLowerCase() === 'true',
          CurrentColorMode: parts[11] || 'Black & White',
          CurrentDuplexMode: parts[12] || 'Simplex',
          DefaultPaperSize: parts[13] || 'A4',
          JobCount: Number(parts[14]) || 0,
        }
      })
      .filter(Boolean)
  } finally {
    try {
      if (fs.existsSync(scriptPath)) fs.unlinkSync(scriptPath)
    } catch {
      // Ignore cleanup error
    }
  }
}

async function runWmicQueryFallback() {
  const { stdout } = await execAsync(
    'wmic printer get Name,PortName,DriverName,Default,PrinterStatus,ExtendedPrinterStatus,PrinterState,WorkOffline,Capabilities /format:csv',
    { timeout: 15000, maxBuffer: 1024 * 1024 * 5, windowsHide: true }
  )
  const lines = String(stdout || '')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length < 2) return []

  const header = lines[0].split(',').map((h) => h.trim())
  const idx = {
    caps: header.indexOf('Capabilities'),
    isDefault: header.indexOf('Default'),
    driver: header.indexOf('DriverName'),
    extStatus: header.indexOf('ExtendedPrinterStatus'),
    name: header.indexOf('Name'),
    port: header.indexOf('PortName'),
    state: header.indexOf('PrinterState'),
    status: header.indexOf('PrinterStatus'),
    offline: header.indexOf('WorkOffline'),
  }

  return lines
    .slice(1)
    .map((line) => line.split(','))
    .filter((cols) => cols[idx.name])
    .map((cols) => {
      const capStr = idx.caps >= 0 ? String(cols[idx.caps] || '') : ''
      const supportsColor = /\b3\b/.test(capStr)
      const supportsDuplex = /\b4\b/.test(capStr)
      return {
        Name: cols[idx.name],
        PortName: cols[idx.port] || '',
        DriverName: cols[idx.driver] || '',
        IsDefault: String(cols[idx.isDefault]).toUpperCase() === 'TRUE',
        PrinterStatus: Number(cols[idx.status]) || 0,
        ExtendedPrinterStatus: Number(cols[idx.extStatus]) || 0,
        PrinterState: Number(cols[idx.state]) || 0,
        WorkOffline: String(cols[idx.offline]).toUpperCase() === 'TRUE',
        SupportsColor: supportsColor,
        SupportsDuplex: supportsDuplex,
        CurrentColorMode: supportsColor ? 'Color / B&W' : 'Black & White',
        CurrentDuplexMode: supportsDuplex ? 'Duplex Ready' : 'Simplex',
        DefaultPaperSize: 'A4',
        JobCount: 0,
      }
    })
}

let cachedRawPrinters = null
let cacheExpiresAt = 0
let inFlightQueryPromise = null

async function queryPrintersRaw(forceRefresh = false) {
  if (!forceRefresh && cachedRawPrinters && Date.now() < cacheExpiresAt) {
    return cachedRawPrinters
  }

  // Deduplicate concurrent printer scans so multiple callers share the same PowerShell invocation
  if (inFlightQueryPromise) {
    return await inFlightQueryPromise
  }

  inFlightQueryPromise = (async () => {
    try {
      const psResult = await runUniversalPowerShellPrinterQuery()
      if (psResult.length > 0) {
        logger.info(
          'PrinterManager',
          `Detected ${psResult.length} printer(s): ${psResult.map((p) => `${p.Name} [${p.SupportsColor ? 'Color' : 'B&W'}, ${p.SupportsDuplex ? 'Duplex' : 'Simplex'}]`).join(', ')}`
        )
        cachedRawPrinters = psResult
        cacheExpiresAt = Date.now() + PRINTER_CACHE_TTL_MS
        return psResult
      }
    } catch (psErr) {
      logger.warn('PrinterManager', `PowerShell printer scan note (${psErr.message}), trying WMIC fallback...`)
    }

    try {
      const wmicResult = await runWmicQueryFallback()
      if (wmicResult.length > 0) {
        logger.info(
          'PrinterManager',
          `WMIC fallback detected ${wmicResult.length} printer(s): ${wmicResult.map((p) => p.Name).join(', ')}`
        )
        cachedRawPrinters = wmicResult
        cacheExpiresAt = Date.now() + PRINTER_CACHE_TTL_MS
        return wmicResult
      }
    } catch (wmicErr) {
      logger.warn('PrinterManager', `WMIC printer scan note: ${wmicErr.message}`)
    }

    return cachedRawPrinters || []
  })()

  try {
    return await inFlightQueryPromise
  } finally {
    inFlightQueryPromise = null
  }
}

class PrinterManager {
  invalidateCache() {
    cachedRawPrinters = null
    cacheExpiresAt = 0
  }

  async getPrintersWithCapabilities(forceRefresh = false) {
    if (process.platform !== 'win32') {
      return []
    }

    const raw = await queryPrintersRaw(forceRefresh)
    return raw.map((p) => {
      const statusCode = Number(p.PrinterStatus) || 0
      const extStatusCode = Number(p.ExtendedPrinterStatus) || 0
      const stateFlags = Number(p.PrinterState) || 0
      const isVirtual = isVirtualPrinterName(p.Name, p.PortName, p.DriverName)

      const decoded = decodePrinterStateFlags(
        stateFlags,
        statusCode,
        extStatusCode,
        Boolean(p.WorkOffline)
      )

      // Virtual document writers (OneNote, Print to PDF, XPS) do not have a physical duplex unit
      const supportsColor = Boolean(p.SupportsColor)
      const supportsDuplex = isVirtual ? false : Boolean(p.SupportsDuplex)

      return {
        name: p.Name,
        deviceId: p.PortName || p.Name,
        isDefault: Boolean(p.IsDefault),
        isVirtual,
        portName: p.PortName || 'Local Port',
        driverName: p.DriverName || 'Windows Print Driver',
        statusCode,
        extendedStatusCode: extStatusCode,
        printerState: stateFlags,
        statusText: decoded.statusText,
        isOnline: decoded.isOnline,
        isError: decoded.isError,
        isBusy: decoded.isBusy,
        supportsColor,
        supportsDuplex,
        sidesCapability: supportsDuplex ? 'Duplex & Simplex' : 'Simplex Only',
        colorCapability: supportsColor ? 'Color & B&W' : 'B&W Only (Mono)',
        currentColorMode: supportsColor ? p.CurrentColorMode || 'Color' : 'Black & White',
        currentDuplexMode: supportsDuplex ? p.CurrentDuplexMode || 'Simplex' : 'Simplex',
        defaultPaperSize: p.DefaultPaperSize || 'A4',
        jobCount: Number(p.JobCount) || 0,
      }
    })
  }

  async getAvailablePrinters(retries = 3, delayMs = 1500, forceRefresh = false) {
    if (process.platform !== 'win32') return []

    for (let attempt = 1; attempt <= retries; attempt++) {
      const list = await this.getPrintersWithCapabilities(forceRefresh && attempt === 1)
      if (list.length > 0) {
        return list.map((p) => ({
          name: p.name,
          deviceId: p.deviceId,
          isDefault: p.isDefault,
          isVirtual: p.isVirtual,
          isOnline: p.isOnline,
          statusText: p.statusText,
          supportsColor: p.supportsColor,
          supportsDuplex: p.supportsDuplex,
        }))
      }
      if (attempt < retries && delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs))
      }
    }
    return []
  }

  async getDefaultPrinter() {
    try {
      const defaultPrinter = await ptp.getDefaultPrinter()
      if (!defaultPrinter) return null
      return typeof defaultPrinter === 'string' ? defaultPrinter : defaultPrinter.name || null
    } catch (err) {
      logger.error('PrinterManager', `Error getting default printer: ${err.message}`)
      return null
    }
  }

  /**
   * Resolves the optimal installed hardware printer AND returns its full capability profile
   * so printService can clamp simplex/monochrome flags safely without stalling the spooler.
   */
  async resolveTargetPrinterProfile({
    targetPrinterName = '',
    colorType = 'BLACK_AND_WHITE',
    isDuplex = false,
  } = {}) {
    const config = configStore.getAll()
    const isColorJob = String(colorType || '').toUpperCase().trim() === 'COLOR'

    const wantedPrinter =
      (targetPrinterName && String(targetPrinterName).trim()) ||
      (isDuplex && config.defaultDuplexPrinter) ||
      (isColorJob && config.defaultColorPrinter) ||
      config.defaultBwPrinter ||
      ''

    const capabilitiesList = await this.getPrintersWithCapabilities(false)
    const physicalPrinters = capabilitiesList.filter((p) => !p.isVirtual)
    const onlinePhysical = physicalPrinters.filter((p) => p.isOnline)

    if (wantedPrinter) {
      const matched = capabilitiesList.find(
        (p) => p.name.trim().toLowerCase() === wantedPrinter.trim().toLowerCase()
      )
      if (matched && (!matched.isVirtual || physicalPrinters.length === 0)) {
        return matched
      }
      logger.warn(
        'PrinterManager',
        `Configured printer "${wantedPrinter}" is not available or is virtual while physical printers exist. Selecting optimal hardware printer.`
      )
    }

    const candidatePool = onlinePhysical.length > 0 ? onlinePhysical : physicalPrinters

    if (candidatePool.length > 0) {
      if (isDuplex) {
        const duplexCapable = candidatePool.find(
          (p) => p.supportsDuplex === true && (!isColorJob || p.supportsColor === true)
        )
        if (duplexCapable) return duplexCapable
        const anyDuplex = candidatePool.find((p) => p.supportsDuplex === true)
        if (anyDuplex) return anyDuplex
      }

      if (isColorJob) {
        const colorCapable = candidatePool.find((p) => p.supportsColor === true)
        if (colorCapable) return colorCapable
      } else {
        const dedicatedMono = candidatePool.find((p) => p.supportsColor === false)
        if (dedicatedMono) return dedicatedMono
      }

      const defaultPhysical = candidatePool.find((p) => p.isDefault)
      if (defaultPhysical) return defaultPhysical

      return candidatePool[0]
    }

    if (capabilitiesList.length > 0) {
      const defAny = capabilitiesList.find((p) => p.isDefault)
      return defAny || capabilitiesList[0]
    }

    const sysDefault = await this.getDefaultPrinter()
    return sysDefault
      ? {
          name: sysDefault,
          supportsColor: true,
          supportsDuplex: true,
          isOnline: true,
          statusText: 'Ready',
        }
      : null
  }

  async findOptimalPrinter(options = {}) {
    const profile = await this.resolveTargetPrinterProfile(options)
    return profile ? profile.name : null
  }

  async generateTestPagePdf(printerName = '', mode = 'Black & White') {
    const config = configStore.getAll() || {}
    const shopCode = config.shopId || 'UNCONFIGURED'
    const shopName = config.shopName ? `${config.shopName} (${shopCode})` : `Shop: ${shopCode}`
    const isColor = String(mode).toLowerCase().includes('color')
    const isDuplexTest = String(mode).toLowerCase().includes('duplex')

    const supportLineParts = []
    if (config.supportEmail) supportLineParts.push(`Email: ${config.supportEmail}`)
    if (config.supportPhone) supportLineParts.push(`Helpline: ${config.supportPhone}`)
    const supportLine =
      supportLineParts.length > 0
        ? `• Official Support — ${supportLineParts.join(' | ')}`
        : '• Manage rates, devices, and live queue anytime from your Scan&Print Shop Dashboard.'

    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([595.28, 841.89]) // Standard A4 (210 x 297 mm)
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica)

    page.drawRectangle({
      x: 36,
      y: 36,
      width: 523.28,
      height: 769.89,
      borderWidth: 1.5,
      borderColor: rgb(0.15, 0.15, 0.2),
    })

    const corners = [
      { x: 36, y: 36 },
      { x: 559.28, y: 36 },
      { x: 36, y: 805.89 },
      { x: 559.28, y: 805.89 },
    ]
    corners.forEach((c) => {
      page.drawCircle({
        x: c.x,
        y: c.y,
        size: 4,
        borderWidth: 1,
        borderColor: rgb(0.5, 0.5, 0.55),
      })
    })

    page.drawRectangle({
      x: 36,
      y: 750,
      width: 523.28,
      height: 56,
      color: rgb(0.06, 0.06, 0.08),
    })
    page.drawText('SCAN & PRINT', {
      x: 54,
      y: 782,
      size: 20,
      font: fontBold,
      color: rgb(1, 1, 1),
    })
    page.drawText('Automated Print Network - Hardware Diagnostic Test Page', {
      x: 54,
      y: 763,
      size: 9.5,
      font: fontRegular,
      color: rgb(0.75, 0.75, 0.8),
    })
    page.drawText(shopName.slice(0, 32), {
      x: 375,
      y: 782,
      size: 9.5,
      font: fontBold,
      color: rgb(0.95, 0.35, 0.45),
    })
    page.drawText(new Date().toLocaleString(), {
      x: 375,
      y: 768,
      size: 8,
      font: fontRegular,
      color: rgb(0.7, 0.7, 0.75),
    })

    page.drawRectangle({
      x: 54,
      y: 700,
      width: 487.28,
      height: 34,
      color: isColor ? rgb(0.95, 0.9, 0.98) : rgb(0.93, 0.93, 0.95),
      borderWidth: 1,
      borderColor: isColor ? rgb(0.75, 0.55, 0.9) : rgb(0.6, 0.6, 0.65),
    })
    page.drawText(`MODE: ${mode.toUpperCase()}  |  PRINTER: ${(printerName || 'System Default').slice(0, 38)}`, {
      x: 66,
      y: 712,
      size: 10.5,
      font: fontBold,
      color: isColor ? rgb(0.5, 0.15, 0.7) : rgb(0.2, 0.2, 0.25),
    })

    page.drawRectangle({
      x: 54,
      y: 545,
      width: 487.28,
      height: 145,
      color: rgb(0.94, 0.98, 0.95),
      borderWidth: 1,
      borderColor: rgb(0.7, 0.88, 0.75),
    })
    page.drawText('HARDWARE DIAGNOSTIC STATUS', {
      x: 70,
      y: 668,
      size: 11,
      font: fontBold,
      color: rgb(0.05, 0.4, 0.15),
    })

    const diagnostics = [
      '[OK] Windows Spooler Communication (Win 7 / 10 / 11): SUCCESSFUL',
      '[OK] PDF Rendering & Rasterization Engine: SUCCESSFUL',
      '[OK] Target Paper Dimensions: Standard A4 (210 x 297 mm)',
      '[OK] Agent Background Service: ACTIVE & READY FOR CLOUD JOBS',
    ]
    diagnostics.forEach((text, idx) => {
      page.drawText(text, {
        x: 70,
        y: 642 - idx * 20,
        size: 9.5,
        font: fontRegular,
        color: rgb(0.1, 0.35, 0.15),
      })
    })

    page.drawText(
      isColor ? 'COLOR REGISTRATION & DENSITY CALIBRATION' : 'GRAYSCALE CONTRAST & DENSITY GRADIENT',
      {
        x: 54,
        y: 400,
        size: 10,
        font: fontBold,
        color: rgb(0.2, 0.2, 0.25),
      }
    )

    if (isColor) {
      const colors = [
        { name: 'Cyan', c: rgb(0, 0.8, 1) },
        { name: 'Magenta', c: rgb(0.9, 0, 0.6) },
        { name: 'Yellow', c: rgb(1, 0.9, 0) },
        { name: 'Black', c: rgb(0.05, 0.05, 0.05) },
        { name: 'Red', c: rgb(0.9, 0.1, 0.1) },
        { name: 'Green', c: rgb(0.1, 0.7, 0.2) },
        { name: 'Blue', c: rgb(0.1, 0.3, 0.9) },
      ]
      const blockWidth = 487.28 / colors.length
      colors.forEach((col, idx) => {
        const bx = 54 + idx * blockWidth
        page.drawRectangle({ x: bx + 2, y: 345, width: blockWidth - 4, height: 40, color: col.c })
        page.drawText(col.name, { x: bx + 6, y: 330, size: 8, font: fontBold, color: rgb(0.2, 0.2, 0.2) })
      })
    } else {
      const grays = [
        { label: '100%', val: 0.0 },
        { label: '80%', val: 0.2 },
        { label: '60%', val: 0.4 },
        { label: '40%', val: 0.6 },
        { label: '20%', val: 0.8 },
        { label: '10%', val: 0.9 },
      ]
      const blockWidth = 487.28 / grays.length
      grays.forEach((item, idx) => {
        const bx = 54 + idx * blockWidth
        page.drawRectangle({
          x: bx + 2,
          y: 345,
          width: blockWidth - 4,
          height: 40,
          color: rgb(item.val, item.val, item.val),
          borderWidth: 0.5,
          borderColor: rgb(0.7, 0.7, 0.7),
        })
        page.drawText(item.label, { x: bx + 16, y: 330, size: 8, font: fontBold, color: rgb(0.2, 0.2, 0.2) })
      })
    }

    page.drawRectangle({
      x: 54,
      y: 125,
      width: 487.28,
      height: 175,
      color: rgb(0.98, 0.98, 0.98),
      borderWidth: 1,
      borderColor: rgb(0.85, 0.85, 0.85),
    })
    page.drawText('PRINTER READINESS CONFIRMATION', {
      x: 70,
      y: 275,
      size: 11,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.15),
    })

    const notes = [
      '• If this page printed cleanly and the text is sharp, your printer is 100% operational.',
      '• Customer print orders submitted via your Shop QR Code will print automatically.',
      '• Make sure this printer is powered on and loaded with standard A4 paper at all times.',
      '• For counter cash payments, approve or reject incoming orders via the Agent window.',
      supportLine,
    ]
    notes.forEach((note, idx) => {
      page.drawText(note, {
        x: 70,
        y: 250 - idx * 22,
        size: 9,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3),
      })
    })

    page.drawText('Scan&Print Automated Print Network · Official Desktop Agent', {
      x: 165,
      y: 50,
      size: 8,
      font: fontRegular,
      color: rgb(0.5, 0.5, 0.5),
    })

    if (isDuplexTest) {
      const page2 = pdfDoc.addPage([595.28, 841.89])
      page2.drawRectangle({
        x: 36,
        y: 36,
        width: 523.28,
        height: 769.89,
        borderWidth: 1.5,
        borderColor: rgb(0.15, 0.15, 0.2),
      })
      page2.drawText('DUPLEX (DOUBLE-SIDED) HARDWARE TEST', {
        x: 90,
        y: 470,
        size: 16,
        font: fontBold,
        color: rgb(0.95, 0.35, 0.45),
      })
      page2.drawText('This is PAGE 2 - the back side.', {
        x: 90,
        y: 435,
        size: 12,
        font: fontBold,
        color: rgb(0.1, 0.1, 0.15),
      })
      page2.drawText('If this printed on the BACK of Page 1 (one physical sheet), duplex is working.', {
        x: 90,
        y: 410,
        size: 10,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3),
      })
      page2.drawText('If this came out as a SEPARATE sheet instead, duplex printing is not active', {
        x: 90,
        y: 393,
        size: 10,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3),
      })
      page2.drawText("on this printer - check the printer's own duplex unit / driver settings.", {
        x: 90,
        y: 376,
        size: 10,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.3),
      })
    }

    const pdfBytes = await pdfDoc.save()
    return Buffer.from(pdfBytes)
  }

  async testPrint(printerName, mode = 'Black & White') {
    try {
      logger.print('PrinterManager', `Sending ${mode} test print to printer: ${printerName || 'System Default'}`)

      const tempDir = path.join(os.tmpdir(), 'scan-and-print-test')
      if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true })
      const testFilePath = path.join(tempDir, `test_print_${Date.now()}.pdf`)

      const pdfBuffer = await this.generateTestPagePdf(printerName, mode)
      fs.writeFileSync(testFilePath, pdfBuffer)

      const isColorMode = String(mode).toLowerCase().includes('color')
      const isDuplexMode = String(mode).toLowerCase().includes('duplex')

      // Check real capabilities of target printer so simplex/mono drivers don't reject test options
      const allCaps = await this.getPrintersWithCapabilities(false)
      const matchedCap = printerName
        ? allCaps.find((p) => p.name.trim().toLowerCase() === printerName.trim().toLowerCase())
        : null

      const canColor = matchedCap ? matchedCap.supportsColor !== false : true
      const canDuplex = matchedCap ? matchedCap.supportsDuplex === true : true

      const options = {
        monochrome: !(isColorMode && canColor),
        side: isDuplexMode && canDuplex ? 'duplexlong' : 'simplex',
        paperSize: 'A4',
        scale: 'noscale',
        silent: true,
      }
      if (printerName) options.printer = printerName

      await ptp.print(testFilePath, options)

      setTimeout(() => {
        try {
          if (fs.existsSync(testFilePath)) fs.unlinkSync(testFilePath)
        } catch {
          // Ignore cleanup error
        }
      }, 6000)

      return { success: true, message: `Test page sent to ${printerName || 'Default Printer'}` }
    } catch (err) {
      logger.error('PrinterManager', `Test print failed: ${err.message}`)
      return { success: false, error: err.message }
    }
  }
}

const printerManager = new PrinterManager()
export default printerManager
