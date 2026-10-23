import fs from 'fs'
import path from 'path'
import { EventEmitter } from 'events'
import {
  DEFAULT_SERVER_URL,
  LOG_AUTO_CLEAR_INTERVAL_MS,
  MAX_LOG_FILE_BYTES,
  getUserDataPath,
} from '../config/constants.js'

const logEmitter = new EventEmitter()
logEmitter.setMaxListeners(30)

const ANSI = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  brightRed: '\x1b[91m',
  brightGreen: '\x1b[92m',
  brightYellow: '\x1b[93m',
  brightBlue: '\x1b[94m',
  brightMagenta: '\x1b[95m',
  brightCyan: '\x1b[96m',
  brightWhite: '\x1b[97m',
  bgBlue: '\x1b[44m\x1b[97m',
  bgGreen: '\x1b[42m\x1b[30m',
  bgYellow: '\x1b[43m\x1b[30m',
  bgRed: '\x1b[41m\x1b[97m',
  bgMagenta: '\x1b[45m\x1b[97m',
  bgCyan: '\x1b[46m\x1b[30m',
}

function getTimestamp() {
  const d = new Date()
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}

const LEVELS = {
  INFO: { badge: ' INFO  ', color: ANSI.brightCyan, badgeBg: ANSI.bgCyan, uiType: 'info' },
  SUCCESS: { badge: '  OK   ', color: ANSI.brightGreen, badgeBg: ANSI.bgGreen, uiType: 'online' },
  JOB: { badge: '  JOB  ', color: ANSI.brightMagenta, badgeBg: ANSI.bgMagenta, uiType: 'job' },
  PRINT: { badge: ' PRINT ', color: ANSI.brightYellow, badgeBg: ANSI.bgYellow, uiType: 'print' },
  WARN: { badge: ' WARN  ', color: ANSI.yellow, badgeBg: ANSI.bgYellow, uiType: 'warn' },
  ERROR: { badge: ' ERROR ', color: ANSI.brightRed, badgeBg: ANSI.bgRed, uiType: 'error' },
  READY: { badge: ' READY ', color: ANSI.brightGreen, badgeBg: ANSI.bgGreen, uiType: 'ready' },
}
LEVELS.OK = LEVELS.SUCCESS
LEVELS.ONLINE = LEVELS.SUCCESS

export function sanitizeLogMessage(text = '') {
  const str = String(text || '')
  let cleaned = str
  if (DEFAULT_SERVER_URL) {
    const escapedServer = DEFAULT_SERVER_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    cleaned = cleaned.replace(new RegExp(`${escapedServer}[^\\s)"']*`, 'gi'), 'Scan&Print Cloud')
  }
  return cleaned
    .replace(/https?:\/\/[a-zA-Z0-9._-]*onrender\.com[^\s)"']*/gi, 'Scan&Print Cloud')
    .replace(/https?:\/\/res\.cloudinary\.com\/[^\s)"']+\/([a-zA-Z0-9_-]+)\.[a-z0-9]+/gi, 'Cloud Asset #$1')
    .replace(/https?:\/\/res\.cloudinary\.com\/[^\s)"']*/gi, 'Cloud Asset Storage')
}

class PrettyLogger {
  constructor() {
    this.logFileDir = null
    this.logFilePath = null
    this.recentEntries = []
    this.MAX_RECENT_ENTRIES = 150
    this.autoClearTimer = null
    this.setLogDirectory(path.join(getUserDataPath(), 'logs'))
    this.startAutoClearTimer()
  }

  setLogDirectory(dirPath) {
    try {
      this.logFileDir = dirPath
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
      }
      this.logFilePath = path.join(dirPath, 'agent.log')
    } catch {
      // Non-fatal if filesystem is read-only
    }
  }

  /**
   * Automatically clears in-memory logs and truncates all log files on disk every 10 minutes
   * so the log file size on the shop PC never grows.
   */
  startAutoClearTimer() {
    if (this.autoClearTimer) {
      clearInterval(this.autoClearTimer)
    }
    this.autoClearTimer = setInterval(() => {
      this.clearLogs('Logs auto-cleared (10-minute disk saver cycle)')
    }, LOG_AUTO_CLEAR_INTERVAL_MS)

    if (typeof this.autoClearTimer.unref === 'function') {
      this.autoClearTimer.unref()
    }
  }

  /**
   * Truncates all log files in the logs directory and resets the in-memory log buffer.
   */
  clearLogs(reason = 'Log history cleared') {
    this.recentEntries = []

    try {
      if (this.logFilePath && fs.existsSync(this.logFilePath)) {
        fs.writeFileSync(this.logFilePath, '', 'utf8')
      }
      if (this.logFileDir && fs.existsSync(this.logFileDir)) {
        const files = fs.readdirSync(this.logFileDir)
        for (const file of files) {
          if (file.endsWith('.log') || file.endsWith('.old')) {
            const fullPath = path.join(this.logFileDir, file)
            try {
              fs.writeFileSync(fullPath, '', 'utf8')
            } catch {
              // Ignore locked file
            }
          }
        }
      }
    } catch {
      // Ignore file truncation error
    }

    try {
      logEmitter.emit('clear', {
        timestamp: getTimestamp(),
        isoDate: new Date().toISOString(),
        reason,
      })
    } catch {
      // Ignore emitter error
    }
  }

  getRecentEntries() {
    return [...this.recentEntries]
  }

  _log(levelKey, scope, message, ...args) {
    const level = LEVELS[levelKey] || LEVELS.INFO
    const time = getTimestamp()

    let details = ''
    if (args && args.length > 0) {
      details =
        ' ' +
        args
          .map((a) => {
            if (a instanceof Error) return a.stack || a.message
            if (typeof a === 'object') {
              try {
                return JSON.stringify(a)
              } catch {
                return String(a)
              }
            }
            return String(a)
          })
          .join(' ')
    }

    const fullMessage = sanitizeLogMessage(`${message}${details}`)
    const scopeTag = scope ? `[${scope}]` : ''
    const paddedScope = scopeTag.padEnd(18, ' ')

    const consoleBadge = `${ANSI.bold}${level.badgeBg}${level.badge}${ANSI.reset}`
    const consoleTime = `${ANSI.gray}[${time}]${ANSI.reset}`
    const consoleScope = `${ANSI.dim}${paddedScope}${ANSI.reset}`

    const multilineIndent = ' '.repeat(38)
    const indentedMessage = fullMessage.includes('\n')
      ? fullMessage.split('\n').join(`\n${multilineIndent}`)
      : fullMessage
    const consoleMsg = `${level.color}${indentedMessage}${ANSI.reset}`
    const consoleLine = `${consoleTime} ${consoleBadge} ${consoleScope} ${consoleMsg}`

    if (levelKey === 'ERROR') {
      console.error(consoleLine)
    } else if (levelKey === 'WARN') {
      console.warn(consoleLine)
    } else {
      console.log(consoleLine)
    }

    if (this.logFilePath) {
      try {
        // Hard size cap safeguard: if log file ever exceeds 512 KB before the 10-minute timer fires, truncate it immediately
        if (fs.existsSync(this.logFilePath)) {
          const stat = fs.statSync(this.logFilePath)
          if (stat.size >= MAX_LOG_FILE_BYTES) {
            fs.writeFileSync(this.logFilePath, '', 'utf8')
          }
        }
        const fileLine = `[${new Date().toISOString()}] [${levelKey.padEnd(7, ' ')}] ${paddedScope} ${fullMessage}\n`
        fs.appendFileSync(this.logFilePath, fileLine)
      } catch {
        // Silent file write fallback
      }
    }

    const entry = {
      timestamp: time,
      isoDate: new Date().toISOString(),
      level: levelKey,
      uiType: level.uiType,
      scope: scope || 'System',
      message: fullMessage,
    }

    this.recentEntries.push(entry)
    if (this.recentEntries.length > this.MAX_RECENT_ENTRIES) {
      this.recentEntries.shift()
    }

    try {
      logEmitter.emit('log', entry)
    } catch {
      // Silent emitter fallback
    }

    return entry
  }

  info(scope, message, ...args) {
    return this._log('INFO', scope, message, ...args)
  }

  success(scope, message, ...args) {
    return this._log('SUCCESS', scope, message, ...args)
  }

  ok(scope, message, ...args) {
    return this._log('SUCCESS', scope, message, ...args)
  }

  ready(scope, message, ...args) {
    return this._log('READY', scope, message, ...args)
  }

  job(scope, message, ...args) {
    return this._log('JOB', scope, message, ...args)
  }

  print(scope, message, ...args) {
    return this._log('PRINT', scope, message, ...args)
  }

  warn(scope, message, ...args) {
    return this._log('WARN', scope, message, ...args)
  }

  error(scope, message, ...args) {
    return this._log('ERROR', scope, message, ...args)
  }

  box(title, lines = [], color = ANSI.brightCyan) {
    const width = 64
    const hLine = '═'.repeat(width - 2)

    console.log(`\n${color}${ANSI.bold}╔${hLine}╗${ANSI.reset}`)
    const titlePaddingLeft = Math.max(0, Math.floor((width - 4 - title.length) / 2))
    const titlePaddingRight = Math.max(0, width - 4 - title.length - titlePaddingLeft)
    console.log(`${color}${ANSI.bold}║ ${' '.repeat(titlePaddingLeft)}${title}${' '.repeat(titlePaddingRight)} ║${ANSI.reset}`)

    if (lines.length > 0) {
      console.log(`${color}╟${hLine}╢${ANSI.reset}`)
      for (const line of lines) {
        const truncated = line.slice(0, width - 6)
        const linePad = Math.max(0, width - 6 - truncated.length)
        console.log(`${color}║  ${ANSI.reset}${truncated}${' '.repeat(linePad)}${color}  ║${ANSI.reset}`)
      }
    }

    console.log(`${color}${ANSI.bold}╚${hLine}╝${ANSI.reset}\n`)
  }

  step(current, total, title) {
    const stepBadge = `${ANSI.bold}${ANSI.bgBlue} STEP ${current}/${total} ${ANSI.reset}`
    console.log(`\n${stepBadge} ${ANSI.bold}${ANSI.brightWhite}${title}${ANSI.reset}`)
  }

  onLog(callback) {
    logEmitter.on('log', callback)
  }

  onClear(callback) {
    logEmitter.on('clear', callback)
  }

  removeLogListener(callback) {
    logEmitter.off('log', callback)
  }
}

const logger = new PrettyLogger()
export default logger
