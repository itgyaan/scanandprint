import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT_DIR = path.resolve(__dirname, '../..')

try {
  const envPath = path.join(ROOT_DIR, '.env')
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath })
  }
} catch {
}

let pkgData = {
  name: 'scan-and-print-agent',
  version: '2.0.9',
  productName: 'Scan&Print Agent',
  appId: 'com.scanandprint.agent',
  repoOwner: 'govindkumarjangid',
  repoName: 'ScanAndPrint_Agent',
}

try {
  const pkgPath = path.join(ROOT_DIR, 'package.json')
  if (fs.existsSync(pkgPath)) {
    const rawPkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
    pkgData = {
      name: rawPkg.name || pkgData.name,
      version: rawPkg.version || pkgData.version,
      productName: rawPkg.build?.productName || pkgData.productName,
      appId: rawPkg.build?.appId || pkgData.appId,
      repoOwner: rawPkg.build?.publish?.owner || pkgData.repoOwner,
      repoName: rawPkg.build?.publish?.repo || pkgData.repoName,
    }
  }
} catch {
  // Fallback to defaults if package.json cannot be read
}

export const APP_NAME = pkgData.productName
export const APP_SLUG = 'scanandprint-agent'
export const APP_ID = pkgData.appId
export const APP_VERSION = pkgData.version
export const GITHUB_REPO_OWNER = pkgData.repoOwner
export const GITHUB_REPO_NAME = pkgData.repoName

// Canonical Backend Server URL (configurable via .env, single source of truth)
export const DEFAULT_SERVER_URL = (
  process.env.DEFAULT_SERVER_URL ||
  process.env.SCANANDPRINT_SERVER_URL ||
  process.env.VITE_SOCKET_URL ||
  'https://scanandprint-sb7d.onrender.com'
  // 'http://localhost:5000'
).replace(/\/+$/, '')

// Subscription plan printer limits (enforced across configStore, socketService, and UI)
export const PLAN_MAX_PRINTERS = Object.freeze({
  BASIC: 1,
  STARTER: 2,
  PRO: 3,
  DEMO: 3,
  TRIAL: 3,
  FREE_TRIAL: 3,
})

export const PLAN_LABELS = Object.freeze({
  BASIC: 'Basic Plan',
  STARTER: 'Starter Plan',
  PRO: 'Pro Plan',
  DEMO: '48-Hour Demo',
  TRIAL: 'Free Trial',
  FREE_TRIAL: '48-Hour Free Trial',
})

export const AUTO_PRINT_LABELS = Object.freeze({
  FULL_AUTO: 'Full Auto-Print',
  PAYMENT_TRIGGERED: 'Online Auto / Counter Approval',
  MANUAL_RELEASE: 'Manual Approval Only',
})

// Safe non-identity configuration keys allowed to be updated remotely via Socket.IO
export const ALLOWED_CONFIG_KEYS = Object.freeze([
  'defaultBwPrinter',
  'defaultColorPrinter',
  'defaultDuplexPrinter',
  'autoStartOnBoot',
])

// Virtual network interface keywords excluded when resolving physical LAN IPv4
export const VIRTUAL_NETWORK_KEYWORDS = Object.freeze([
  'vmware',
  'virtualbox',
  'vbox',
  'vethernet',
  'wsl',
  'hyper-v',
  'loopback',
  'pseudo',
  'teredo',
  'isatap',
  'tunnel',
  'tap',
  'tun',
  'npcap',
  'pcap',
  'bluetooth',
  'tailscale',
  'zerotier',
  'wireguard',
  'vmnet',
  'docker',
])

// Virtual OS document writers excluded when auto-selecting a physical hardware printer
export const VIRTUAL_PRINTER_KEYWORDS = Object.freeze([
  'print to pdf',
  'onenote',
  'xps document writer',
  'xps',
  'fax',
  'send to microsoft',
  'cute writer',
  'foxit reader pdf',
  'adobe pdf',
])

// Timings & thresholds
export const PRINT_COOLDOWN_MS = 4000
export const HEARTBEAT_INTERVAL_MS = 25000
export const PRINTER_CACHE_TTL_MS = 60000
export const APPROVAL_POLL_INTERVAL_MS = 4000
export const API_SYNC_COOLDOWN_MS = 15000
export const LOG_AUTO_CLEAR_INTERVAL_MS = 10 * 60 * 1000 // Auto-clear logs every 10 minutes
export const MAX_LOG_FILE_BYTES = 512 * 1024 // 512 KB hard cap safeguard on log file size

/**
 * Resolves the OS-appropriate application data directory for Scan&Print Agent.
 */
export function getUserDataPath() {
  if (process.env.APPDATA) {
    return path.join(process.env.APPDATA, APP_SLUG)
  }
  if (process.platform === 'darwin') {
    return path.join(process.env.HOME || '', 'Library', 'Application Support', APP_SLUG)
  }
  return path.join(process.env.HOME || process.cwd(), '.config', APP_SLUG)
}
