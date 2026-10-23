// Shared UI Utilities for Scan&Print Desktop Agent (Main Dashboard & Counter Order Popup)
;(function initScanAndPrintUiUtils(globalScope) {
  function escapeHtml(str = '') {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  }

  function playNotificationChime() {
    try {
      const AudioCtx = globalScope.AudioContext || globalScope.webkitAudioContext
      if (!AudioCtx) return
      const audioCtx = new AudioCtx()
      const osc = audioCtx.createOscillator()
      const gain = audioCtx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime) // D5
      osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.12) // A5
      gain.gain.setValueAtTime(0.25, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.45)
      osc.connect(gain)
      gain.connect(audioCtx.destination)
      osc.start()
      osc.stop(audioCtx.currentTime + 0.46)
    } catch {
      // Ignore audio autoplay restriction errors
    }
  }

  function isDuplexRequested(jobData = {}) {
    const explicitSide = String(
      jobData?.printOptions?.side || jobData?.side || jobData?.duplexMode || jobData?.printSide || ''
    )
      .toLowerCase()
      .trim()
    if (explicitSide.startsWith('duplex')) return true
    if (explicitSide === 'simplex') return false
    return (
      jobData?.duplex === true ||
      jobData?.duplex?.enabled === true ||
      jobData?.isDuplex === true ||
      jobData?.doubleSided === true ||
      jobData?.printSides === 'DOUBLE' ||
      jobData?.printSides === 'double' ||
      jobData?.sides === 'double'
    )
  }

  function resolveCurrencySymbol(jobOrConfig = {}) {
    if (jobOrConfig?.currencySymbol) return jobOrConfig.currencySymbol
    const cur = String(jobOrConfig?.currency || 'INR').toUpperCase().trim()
    if (cur === 'NPR' || cur === 'PKR') return 'Rs '
    if (cur === 'BDT') return '৳'
    if (cur === 'USD') return '$'
    return '₹'
  }

  function formatCurrency(amount = 0, jobOrConfig = {}) {
    const symbol = resolveCurrencySymbol(jobOrConfig)
    const num = Number(amount) || 0
    const formatted = Number.isInteger(num)
      ? num.toLocaleString('en-IN')
      : num.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
    return `${symbol}${formatted}`
  }

  function formatTimeShort(dateInput) {
    try {
      const dateObj = dateInput ? new Date(dateInput) : new Date()
      if (Number.isNaN(dateObj.getTime())) return '--:--'
      return dateObj.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })
    } catch {
      return '--:--'
    }
  }

  function fileIconClass(fileName = '') {
    const ext = String(fileName || '')
      .split('.')
      .pop()
      .toLowerCase()
    if (['png', 'jpg', 'jpeg', 'webp', 'heic', 'bmp', 'tiff'].includes(ext)) return 'bx-image'
    if (ext === 'doc' || ext === 'docx') return 'bxs-file-doc'
    return 'bxs-file-pdf'
  }

  globalScope.ScanAndPrintUI = Object.freeze({
    escapeHtml,
    playNotificationChime,
    isDuplexRequested,
    resolveCurrencySymbol,
    formatCurrency,
    formatTimeShort,
    fileIconClass,
  })
})(window)
