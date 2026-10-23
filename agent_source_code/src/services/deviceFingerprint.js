import crypto from 'crypto'
import os from 'os'
import https from 'https'
import nodeMachineId from 'node-machine-id'
import si from 'systeminformation'
import { APP_VERSION, VIRTUAL_NETWORK_KEYWORDS } from '../config/constants.js'
import logger from '../utils/logger.js'

const machineIdSync = nodeMachineId.machineIdSync || nodeMachineId

let cachedDeviceFingerprint = null
let cachedDeviceMeta = null

function isValidLanIpv4(ip) {
  if (!ip || typeof ip !== 'string') return false
  return (
    ip !== '127.0.0.1' &&
    !ip.startsWith('127.') &&
    !ip.startsWith('169.254.') &&
    !ip.startsWith('192.168.23.') &&
    !ip.startsWith('192.168.248.')
  )
}

function isVirtualAdapterName(name = '') {
  const lowerName = String(name).toLowerCase()
  return VIRTUAL_NETWORK_KEYWORDS.some((kw) => lowerName.includes(kw))
}

/**
 * Resolves the active physical LAN IPv4 address of this machine.
 * Filters out virtual adapters (VMware, VirtualBox, WSL, Hyper-V, VPN tunnels, APIPA).
 */
export async function getAccuratePhysicalIp() {
  try {
    const [defaultIface, ifaces] = await Promise.all([
      si.networkInterfaceDefault().catch(() => null),
      si.networkInterfaces().catch(() => []),
    ])

    if (Array.isArray(ifaces) && ifaces.length > 0) {
      if (defaultIface) {
        const defObj = ifaces.find(
          (i) =>
            (i.iface === defaultIface || i.ifaceName === defaultIface) &&
            !i.virtual &&
            !isVirtualAdapterName(i.ifaceName || i.iface) &&
            isValidLanIpv4(i.ip4)
        )
        if (defObj?.ip4) return defObj.ip4
      }

      const defActive = ifaces.find(
        (i) =>
          i.default === true &&
          !i.virtual &&
          !isVirtualAdapterName(i.ifaceName || i.iface) &&
          isValidLanIpv4(i.ip4)
      )
      if (defActive?.ip4) return defActive.ip4

      const physicalUp = ifaces.find(
        (i) =>
          !i.virtual &&
          !i.internal &&
          !isVirtualAdapterName(i.ifaceName || i.iface) &&
          (i.operstate === 'up' || (i.speed && i.speed > 0)) &&
          isValidLanIpv4(i.ip4)
      )
      if (physicalUp?.ip4) return physicalUp.ip4

      const nonVmAdapter = ifaces.find(
        (i) =>
          !i.virtual &&
          !i.internal &&
          !isVirtualAdapterName(i.ifaceName || i.iface) &&
          isValidLanIpv4(i.ip4)
      )
      if (nonVmAdapter?.ip4) return nonVmAdapter.ip4
    }
  } catch (err) {
    logger.warn('Fingerprint', `Accurate IP detection note: ${err.message}`)
  }

  // Fallback via os.networkInterfaces()
  try {
    const interfaces = os.networkInterfaces()
    const candidates = []

    for (const [name, nets] of Object.entries(interfaces)) {
      if (!Array.isArray(nets)) continue
      const isVirtual = isVirtualAdapterName(name)
      const lowerName = name.toLowerCase()
      const isPhysical =
        lowerName.includes('wi-fi') ||
        lowerName.includes('wifi') ||
        lowerName.includes('ethernet') ||
        lowerName.includes('wlan') ||
        lowerName.includes('eth') ||
        lowerName.includes('en') ||
        lowerName.includes('local area connection')

      for (const net of nets) {
        if (net.family === 'IPv4' && !net.internal && isValidLanIpv4(net.address)) {
          candidates.push({ address: net.address, isVirtual, isPhysical })
        }
      }
    }

    const primaryPhysical = candidates.find((c) => !c.isVirtual && c.isPhysical)
    if (primaryPhysical) return primaryPhysical.address

    const anyNonVirtual = candidates.find((c) => !c.isVirtual)
    if (anyNonVirtual) return anyNonVirtual.address

    if (candidates.length > 0) return candidates[0].address
  } catch {
    // Ignore fallback error
  }

  return '127.0.0.1'
}

/**
 * Fetches the public WAN IPv4 address with a strict 1.5s timeout.
 */
export async function fetchPublicIp() {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(null), 1500)
    try {
      https
        .get('https://api.ipify.org?format=json', { timeout: 1500 }, (res) => {
          let raw = ''
          res.on('data', (chunk) => {
            raw += chunk
          })
          res.on('end', () => {
            clearTimeout(timer)
            try {
              const json = JSON.parse(raw)
              resolve(json?.ip || null)
            } catch {
              resolve(null)
            }
          })
        })
        .on('error', () => {
          clearTimeout(timer)
          resolve(null)
        })
    } catch {
      clearTimeout(timer)
      resolve(null)
    }
  })
}

/**
 * Generates a stable, multi-signal SHA-256 hardware device fingerprint and metadata.
 * Combines Machine ID + CPU specifications + Motherboard Serial + System UUID + Hostname/Arch.
 */
export async function getDeviceFingerprint() {
  if (cachedDeviceFingerprint && cachedDeviceMeta) {
    const liveIp = await getAccuratePhysicalIp()
    cachedDeviceMeta.ipAddress = liveIp
    cachedDeviceMeta.localIp = liveIp
    cachedDeviceMeta.appVersion = APP_VERSION
    return {
      fingerprint: cachedDeviceFingerprint,
      meta: cachedDeviceMeta,
    }
  }

  let rawMachineId = 'UNKNOWN_MACHINE_ID'
  try {
    rawMachineId = machineIdSync({ original: true })
  } catch {
    try {
      rawMachineId = machineIdSync()
    } catch {
      // Keep fallback identifier
    }
  }

  let cpuInfo = { manufacturer: 'Unknown', brand: 'Unknown', physicalCores: 1 }
  let baseboardInfo = { manufacturer: 'Unknown', model: 'Unknown', serial: 'Unknown' }
  let systemInfo = { manufacturer: 'Unknown', model: 'Unknown', serial: 'Unknown', uuid: 'Unknown' }

  try {
    const [cpu, baseboard, system] = await Promise.all([
      si.cpu().catch(() => ({})),
      si.baseboard().catch(() => ({})),
      si.system().catch(() => ({})),
    ])

    if (cpu?.brand || cpu?.manufacturer) {
      cpuInfo = {
        manufacturer: cpu.manufacturer || 'Unknown',
        brand: cpu.brand || 'Unknown',
        physicalCores: cpu.physicalCores || cpu.cores || 1,
        speed: cpu.speed || 'Unknown',
      }
    }

    if (baseboard?.serial || baseboard?.manufacturer) {
      baseboardInfo = {
        manufacturer: baseboard.manufacturer || 'Unknown',
        model: baseboard.model || 'Unknown',
        serial: baseboard.serial || 'Unknown',
      }
    }

    if (system?.uuid || system?.serial) {
      systemInfo = {
        manufacturer: system.manufacturer || 'Unknown',
        model: system.model || 'Unknown',
        serial: system.serial || 'Unknown',
        uuid: system.uuid || 'Unknown',
      }
    }
  } catch (err) {
    logger.warn('Fingerprint', `System info query note: ${err.message}`)
  }

  const hostname = os.hostname() || 'localhost'
  const platform = process.platform || os.platform()
  const arch = process.arch || os.arch()
  const release = os.release() || ''
  const totalMemoryGb = Math.max(1, Math.round(os.totalmem() / (1024 * 1024 * 1024)))
  const exactIp = await getAccuratePhysicalIp()

  const signals = [
    `MACHINE_ID:${rawMachineId}`,
    `CPU_BRAND:${cpuInfo.brand}`,
    `CPU_MANUFACTURER:${cpuInfo.manufacturer}`,
    `CPU_CORES:${cpuInfo.physicalCores}`,
    `BASEBOARD_SERIAL:${baseboardInfo.serial}`,
    `BASEBOARD_MODEL:${baseboardInfo.model}`,
    `SYSTEM_UUID:${systemInfo.uuid}`,
    `SYSTEM_SERIAL:${systemInfo.serial}`,
    `HOSTNAME:${hostname.toUpperCase()}`,
    `PLATFORM:${platform}`,
    `ARCH:${arch}`,
  ].join('|#|')

  const fingerprint = crypto.createHash('sha256').update(signals).digest('hex')

  let defaultGateway = ''
  try {
    const gw = await si.networkGatewayDefault().catch(() => null)
    if (gw) defaultGateway = gw
  } catch {
    // Ignore gateway lookup failure
  }

  const meta = {
    hostname,
    platform: platform === 'win32' ? 'Windows' : platform,
    osRelease: release,
    arch,
    cpuModel:
      cpuInfo.brand !== 'Unknown'
        ? cpuInfo.brand
        : `${cpuInfo.manufacturer} (${cpuInfo.physicalCores} Cores)`,
    motherboardSerial:
      baseboardInfo.serial !== 'Unknown' ? baseboardInfo.serial : systemInfo.serial,
    systemUuid: systemInfo.uuid,
    totalMemoryGb,
    appVersion: APP_VERSION,
    ipAddress: exactIp,
    localIp: exactIp,
    defaultGateway,
  }

  cachedDeviceFingerprint = fingerprint
  cachedDeviceMeta = meta

  logger.info(
    'Fingerprint',
    `Hardware Fingerprint Generated: ${fingerprint.slice(0, 16)}... (${hostname} | ${meta.cpuModel} | IP: ${exactIp})`
  )

  return { fingerprint, meta }
}
