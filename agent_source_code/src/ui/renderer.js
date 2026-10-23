// Client-side UI Controller for Scan&Print Desktop Agent Dashboard
document.addEventListener('DOMContentLoaded', async () => {
  const {
    escapeHtml,
    playNotificationChime,
    formatCurrency,
    formatTimeShort,
    fileIconClass,
  } = window.ScanAndPrintUI || {}

  const shopIdInput = document.getElementById('shopId')
  const secretKeyInput = document.getElementById('secretKey')
  const toggleSecretBtn = document.getElementById('toggleSecretBtn')
  const bwPrinterSelect = document.getElementById('bwPrinter')
  const colorPrinterSelect = document.getElementById('colorPrinter')
  const duplexPrinterSelect = document.getElementById('duplexPrinter')

  const refreshPrintersBtn = document.getElementById('refreshPrintersBtn')
  const testBwPrintBtn = document.getElementById('testBwPrintBtn')
  const testColorPrintBtn = document.getElementById('testColorPrintBtn')
  const testDuplexPrintBtn = document.getElementById('testDuplexPrintBtn')
  const saveAssignmentBtn = document.getElementById('saveAssignmentBtn')
  const createShortcutBtn = document.getElementById('createShortcutBtn')
  const autoStartToggle = document.getElementById('autoStartToggle')

  const settingsForm = document.getElementById('settingsForm')
  const saveBtn = document.getElementById('saveBtn')
  const toastMessage = document.getElementById('toastMessage')

  const dashboardShopHeading = document.getElementById('dashboardShopHeading')
  const dashboardShopSubtitle = document.getElementById('dashboardShopSubtitle')
  const lastSyncedText = document.getElementById('lastSyncedText')

  const statusCard = document.getElementById('statusCard')
  const statusPill = document.getElementById('statusPill')
  const statusDot = document.getElementById('statusDot')
  const statusText = document.getElementById('statusText')
  const displayShopCode = document.getElementById('displayShopCode')
  const copyShopCodeBtn = document.getElementById('copyShopCodeBtn')
  const dashboardPlanBadge = document.getElementById('dashboardPlanBadge')
  const dashboardRatesBadge = document.getElementById('dashboardRatesBadge')

  const sidebarStatusDot = document.getElementById('sidebarStatusDot')
  const sidebarStatusLabel = document.getElementById('sidebarStatusLabel')

  const printersCountVal = document.getElementById('printersCountVal')
  const autoPrintModeVal = document.getElementById('autoPrintModeVal')
  const activeQueueStatusVal = document.getElementById('activeQueueStatusVal')

  // Daily KPI DOM elements
  const todayRevenueVal = document.getElementById('todayRevenueVal')
  const todayRevenueSub = document.getElementById('todayRevenueSub')
  const todayPrintsVal = document.getElementById('todayPrintsVal')
  const todayPrintsSub = document.getElementById('todayPrintsSub')
  const todayJobsVal = document.getElementById('todayJobsVal')
  const todayJobsSub = document.getElementById('todayJobsSub')
  const todayPendingVal = document.getElementById('todayPendingVal')
  const todayPendingSub = document.getElementById('todayPendingSub')

  // Monthly & Lifetime Ledger DOM elements
  const monthKeyLabel = document.getElementById('monthKeyLabel')
  const monthRevenueVal = document.getElementById('monthRevenueVal')
  const monthPrintsVal = document.getElementById('monthPrintsVal')
  const monthJobsVal = document.getElementById('monthJobsVal')
  const lifetimeRevenueVal = document.getElementById('lifetimeRevenueVal')
  const lifetimePrintsVal = document.getElementById('lifetimePrintsVal')
  const lifetimeJobsVal = document.getElementById('lifetimeJobsVal')

  // Recent Jobs Table DOM elements
  const recentJobsCountBadge = document.getElementById('recentJobsCountBadge')
  const recentJobsTableBody = document.getElementById('recentJobsTableBody')

  // Shop Setup Synced Details DOM elements
  const detailShopName = document.getElementById('detailShopName')
  const detailShopLocation = document.getElementById('detailShopLocation')
  const detailShopPlan = document.getElementById('detailShopPlan')
  const detailShopRates = document.getElementById('detailShopRates')

  const appVersionSpan = document.getElementById('appVersion')
  const navPrintersBadge = document.getElementById('navPrintersBadge')
  const printerCardsGrid = document.getElementById('printerCardsGrid')

  const activityLog = document.getElementById('activityLog')
  const clearLogBtn = document.getElementById('clearLogBtn')
  const copyLogsBtn = document.getElementById('copyLogsBtn')
  const logSearchInput = document.getElementById('logSearchInput')
  const logFilterGroup = document.getElementById('logFilterGroup')
  const openLogFileBtn = document.getElementById('openLogFileBtn')

  const reconnectBtn = document.getElementById('reconnectBtn')

  const updateStatusPill = document.getElementById('updateStatusPill')
  const updateStatusText = document.getElementById('updateStatusText')
  const currentVersionVal = document.getElementById('currentVersionVal')
  const targetVersionRow = document.getElementById('targetVersionRow')
  const targetVersionVal = document.getElementById('targetVersionVal')
  const updateMessage = document.getElementById('updateMessage')
  const updateProgressWrap = document.getElementById('updateProgressWrap')
  const updateProgressLabel = document.getElementById('updateProgressLabel')
  const updateProgressPercent = document.getElementById('updateProgressPercent')
  const updateProgressBar = document.getElementById('updateProgressBar')
  const checkForUpdatesBtn = document.getElementById('checkForUpdatesBtn')
  const checkUpdateIcon = document.getElementById('checkUpdateIcon')
  const checkUpdateBtnText = document.getElementById('checkUpdateBtnText')
  const installRestartBtn = document.getElementById('installRestartBtn')
  const installRestartBtnText = document.getElementById('installRestartBtnText')
  const dashboardUpdateBanner = document.getElementById('dashboardUpdateBanner')
  const dashboardUpdateBtn = document.getElementById('dashboardUpdateBtn')

  const jobBanner = document.getElementById('jobBanner')
  const bannerJobTitle = document.getElementById('bannerJobTitle')
  const bannerJobSubtitle = document.getElementById('bannerJobSubtitle')
  const bannerJobBadge = document.getElementById('bannerJobBadge')

  const sidebar = document.getElementById('sidebar')
  const sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn')
  const sidebarQuitBtn = document.getElementById('sidebarQuitBtn')
  const navItems = document.querySelectorAll('.nav-item')
  const panels = document.querySelectorAll('.panel')

  const PLAN_LABELS = {
    BASIC: 'Basic Plan',
    STARTER: 'Starter Plan',
    PRO: 'Pro Plan',
    DEMO: '48-Hour Demo',
    TRIAL: 'Free Trial',
    FREE_TRIAL: '48-Hour Free Trial',
  }

  const AUTO_PRINT_LABELS = {
    FULL_AUTO: 'Full Auto-Print',
    PAYMENT_TRIGGERED: 'Online Auto / Counter Approval',
    MANUAL_RELEASE: 'Manual Approval Only',
  }

  let detailedPrinters = []
  let isPasswordVisible = false
  let runtimeVersion = ''
  let activePanelName = 'dashboard'

  let config = {
    shopId: '',
    secretKey: '',
    defaultBwPrinter: '',
    defaultColorPrinter: '',
    defaultDuplexPrinter: '',
    autoStartOnBoot: true,
    planTier: '',
    maxPrinters: 3,
    autoPrintMode: 'PAYMENT_TRIGGERED',
  }

  const isElectron = Boolean(window.electronAPI && typeof window.electronAPI.getConfig === 'function')

  window.addEventListener(
    'wheel',
    (e) => {
      if (e.ctrlKey) e.preventDefault()
    },
    { passive: false }
  )

  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && ['+', '-', '=', '_', '0', 'NumpadAdd', 'NumpadSubtract'].includes(e.key)) {
      e.preventDefault()
    }
  })

  // ===========================================================================
  // Sidebar navigation (panel switching + collapse)
  // ===========================================================================
  function switchPanel(panelName) {
    activePanelName = panelName
    panels.forEach((p) => p.classList.toggle('active', p.id === `panel-${panelName}`))
    navItems.forEach((n) => n.classList.toggle('active', n.dataset.panel === panelName))
  }

  navItems.forEach((item) => {
    item.addEventListener('click', () => switchPanel(item.dataset.panel))
  })

  if (sidebarCollapseBtn) {
    try {
      if (localStorage.getItem('sp_sidebar_collapsed') === '1') {
        sidebar.classList.add('collapsed')
      }
    } catch {
      // Ignore storage error
    }

    sidebarCollapseBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed')
      try {
        localStorage.setItem('sp_sidebar_collapsed', sidebar.classList.contains('collapsed') ? '1' : '0')
      } catch {
        // Ignore storage error
      }
    })
  }

  function showToast(msg, type = 'success') {
    if (!toastMessage) return
    toastMessage.textContent = msg
    toastMessage.className = `toast-msg toast-${type}`
    setTimeout(() => {
      if (toastMessage.textContent === msg) toastMessage.textContent = ''
    }, 4000)
  }

  const LOG_ICONS = {
    info: "<i class='bx bx-info-circle' style='color: #38bdf8;'></i>",
    online: "<i class='bx bx-check-circle' style='color: #34d399;'></i>",
    ready: "<i class='bx bx-check-circle' style='color: #34d399;'></i>",
    success: "<i class='bx bx-check-circle' style='color: #34d399;'></i>",
    job: "<i class='bx bxs-zap' style='color: #fb7185;'></i>",
    print: "<i class='bx bx-printer' style='color: #fbbf24;'></i>",
    warn: "<i class='bx bx-error' style='color: #facc15;'></i>",
    error: "<i class='bx bxs-x-circle' style='color: #f87171;'></i>",
  }

  let activeLogFilter = 'all'

  function applyLogFilters() {
    if (!activityLog) return
    const query = (logSearchInput?.value || '').trim().toLowerCase()
    const entries = activityLog.querySelectorAll('.log-entry')
    entries.forEach((entry) => {
      const entryType = entry.dataset.type || ''
      const entryText = entry.dataset.text || ''
      const matchesFilter = activeLogFilter === 'all' || entryType === activeLogFilter
      const matchesSearch = !query || entryText.includes(query)
      entry.style.display = matchesFilter && matchesSearch ? 'flex' : 'none'
    })
  }

  function logActivity(tag, text, type = 'info', scope = '', customTimestamp = '') {
    if (!activityLog) return
    const time = customTimestamp || new Date().toLocaleTimeString('en-IN', { hour12: false })
    const icon = LOG_ICONS[type] || ''
    const cleanScope = scope ? `<span class="log-scope">[${escapeHtml(scope)}]</span>` : ''
    const badgeHtml = `<span class="log-badge log-badge-${escapeHtml(type)}">${icon ? `${icon} ` : ''}${escapeHtml(tag)}</span>`
    const html = `<span class="log-time">${escapeHtml(time)}</span>${badgeHtml}${cleanScope}<span class="log-msg">${escapeHtml(text)}</span>`

    const entry = document.createElement('div')
    entry.className = 'log-entry'
    entry.dataset.type = type
    entry.dataset.text = `${text} ${tag} ${scope || ''}`.toLowerCase()
    entry.innerHTML = html

    const query = (logSearchInput?.value || '').trim().toLowerCase()
    const matchesFilter = activeLogFilter === 'all' || type === activeLogFilter
    const matchesSearch = !query || entry.dataset.text.includes(query)
    entry.style.display = matchesFilter && matchesSearch ? 'flex' : 'none'

    activityLog.appendChild(entry)
    activityLog.scrollTop = activityLog.scrollHeight

    while (activityLog.children.length > 150) {
      activityLog.removeChild(activityLog.firstChild)
    }
  }

  function flashIncomingJobBanner(job, modeLabel = 'AUTO-PRINTING') {
    if (!jobBanner) return
    if (typeof playNotificationChime === 'function') playNotificationChime()
    bannerJobTitle.textContent = `Order #${job.jobId || 'NEW'} (${job.colorType === 'COLOR' ? 'Color' : 'B&W'})`
    bannerJobSubtitle.textContent = `${job.originalFileName || 'document.pdf'} · ${job.totalPages || 1} page(s) × ${job.copies || 1}`
    if (bannerJobBadge) {
      bannerJobBadge.textContent = modeLabel
    }
    jobBanner.style.display = 'flex'
    setTimeout(() => {
      jobBanner.style.display = 'none'
    }, 4500)
  }

  // ===========================================================================
  // Render Shop Database Telemetry & Daily Metrics
  // ===========================================================================
  function renderStatusBadgeHtml(status) {
    const st = String(status || '').toUpperCase().trim()
    if (st === 'PRINTED_SUCCESSFULLY' || st === 'COMPLETED') {
      return `<span class="job-status-pill st-success"><i class='bx bx-check'></i> Printed</span>`
    }
    if (st === 'WAITING_COUNTER_APPROVAL') {
      return `<span class="job-status-pill st-pending"><i class='bx bx-time-five'></i> Cash Pending</span>`
    }
    if (st === 'PRINTING') {
      return `<span class="job-status-pill st-printing"><i class='bx bx-loader-alt bx-spin'></i> Printing</span>`
    }
    if (st === 'DISPATCHED_TO_AGENT' || st === 'PAYMENT_VERIFIED') {
      return `<span class="job-status-pill st-printing"><i class='bx bx-printer'></i> Spooling</span>`
    }
    if (st === 'PRINT_FAILED' || st === 'FAILED') {
      return `<span class="job-status-pill st-failed"><i class='bx bx-error'></i> Failed</span>`
    }
    if (st === 'CANCELLED' || st === 'REJECTED') {
      return `<span class="job-status-pill st-failed"><i class='bx bx-x'></i> Cancelled</span>`
    }
    return `<span class="job-status-pill st-pending">${escapeHtml(st || 'Queued')}</span>`
  }

  function renderShopStatsSnapshot(snapshot) {
    if (!snapshot || typeof snapshot !== 'object') return

    const profile = snapshot.shopProfile || {}
    const today = snapshot.today || {}
    const currentMonth = snapshot.currentMonth || {}
    const lifetime = snapshot.lifetime || {}
    const recentJobs = Array.isArray(snapshot.recentJobs) ? snapshot.recentJobs : []

    const shopCode = snapshot.shopCode || config.shopId || 'UNSET'
    if (displayShopCode) displayShopCode.textContent = shopCode

    if (profile.shopName) {
      if (dashboardShopHeading) dashboardShopHeading.textContent = profile.shopName
      const locParts = [
        profile.ownerName ? `Owner: ${profile.ownerName}` : '',
        profile.cityState || profile.address || '',
      ].filter(Boolean)
      if (dashboardShopSubtitle) {
        dashboardShopSubtitle.textContent =
          locParts.length > 0
            ? `${locParts.join(' · ')} (${shopCode})`
            : `Live overview & daily metrics for ${shopCode}`
      }
    } else if (dashboardShopHeading) {
      dashboardShopHeading.textContent = shopCode !== 'UNSET' ? `Shop ${shopCode}` : 'Dashboard'
    }

    if (lastSyncedText) {
      lastSyncedText.textContent = snapshot.lastSyncedAt
        ? `Live Auto-Sync · ${formatTimeShort(snapshot.lastSyncedAt)}`
        : 'Live Auto-Sync'
    }

    const planKey = String(profile.planTier || config.planTier || '').toUpperCase()
    const planLabel = PLAN_LABELS[planKey] || (planKey ? `${planKey} Plan` : '')
    if (dashboardPlanBadge) {
      if (planLabel) {
        dashboardPlanBadge.style.display = 'inline-flex'
        dashboardPlanBadge.innerHTML = `<i class='bx bx-crown' style='color: var(--amber);'></i> ${escapeHtml(planLabel)}`
      } else {
        dashboardPlanBadge.style.display = 'none'
      }
    }

    if (dashboardRatesBadge) {
      if (profile.bwRate != null || profile.colorRate != null) {
        dashboardRatesBadge.style.display = 'inline-flex'
        const bwStr = profile.bwRate != null ? `B&W: ${formatCurrency(profile.bwRate, profile)}/p` : ''
        const colStr = profile.colorRate != null ? `Color: ${formatCurrency(profile.colorRate, profile)}/p` : ''
        dashboardRatesBadge.innerHTML = `<i class='bx bx-purchase-tag-alt' style='color: var(--emerald);'></i> ${escapeHtml([bwStr, colStr].filter(Boolean).join(' · '))}`
      } else {
        dashboardRatesBadge.style.display = 'none'
      }
    }

    if (autoPrintModeVal) {
      const modeKey = String(profile.autoPrintMode || config.autoPrintMode || 'PAYMENT_TRIGGERED').toUpperCase()
      const modeText = AUTO_PRINT_LABELS[modeKey] || 'Online Auto-Print'
      autoPrintModeVal.innerHTML = `${escapeHtml(modeText)} <i class='bx bxs-zap' style='color: var(--emerald);'></i>`
    }

    const pendingCounter = Number(today.pendingCounterCount) || 0
    const activeQueue = Number(today.activeQueueCount) || 0
    if (activeQueueStatusVal) {
      if (pendingCounter > 0) {
        activeQueueStatusVal.style.color = 'var(--amber)'
        activeQueueStatusVal.textContent = `${pendingCounter} Counter Approval`
      } else if (activeQueue > 0) {
        activeQueueStatusVal.style.color = 'var(--sky)'
        activeQueueStatusVal.textContent = `${activeQueue} Printing`
      } else {
        activeQueueStatusVal.style.color = 'var(--emerald)'
        activeQueueStatusVal.textContent = '0 Pending (Clear)'
      }
    }

    // Daily KPI Cards
    if (todayRevenueVal) todayRevenueVal.textContent = formatCurrency(today.revenue || 0, profile)
    if (todayRevenueSub) {
      todayRevenueSub.textContent = `Online: ${formatCurrency(today.onlineRevenue || 0, profile)} · Counter: ${formatCurrency(today.counterRevenue || 0, profile)}`
    }

    if (todayPrintsVal) {
      const totalP = Number(today.totalPagesPrinted) || 0
      todayPrintsVal.textContent = `${totalP.toLocaleString('en-IN')} ${totalP === 1 ? 'Page' : 'Pages'}`
    }
    if (todayPrintsSub) {
      todayPrintsSub.textContent = `B&W: ${(Number(today.bwPagesPrinted) || 0).toLocaleString('en-IN')}p · Color: ${(Number(today.colorPagesPrinted) || 0).toLocaleString('en-IN')}p`
    }

    if (todayJobsVal) {
      const totalJ = Number(today.jobsCompleted) || 0
      todayJobsVal.textContent = `${totalJ.toLocaleString('en-IN')} ${totalJ === 1 ? 'Job' : 'Jobs'}`
    }
    if (todayJobsSub) {
      todayJobsSub.textContent = `B&W: ${Number(today.bwJobsCount) || 0} · Color: ${Number(today.colorJobsCount) || 0}`
    }

    if (todayPendingVal) {
      todayPendingVal.textContent = `${pendingCounter} Waiting`
    }
    if (todayPendingSub) {
      todayPendingSub.textContent = `In Queue: ${activeQueue} · Failed Today: ${Number(today.failedJobs) || 0}`
    }

    // Monthly & Lifetime Ledger Summary
    if (monthKeyLabel) monthKeyLabel.textContent = currentMonth.monthKey || '--'
    if (monthRevenueVal) monthRevenueVal.textContent = formatCurrency(currentMonth.revenue || 0, profile)
    if (monthPrintsVal) {
      monthPrintsVal.textContent = `${(Number(currentMonth.totalPagesPrinted) || 0).toLocaleString('en-IN')} Pages`
    }
    if (monthJobsVal) {
      monthJobsVal.textContent = `${(Number(currentMonth.jobsCompleted) || 0).toLocaleString('en-IN')} Jobs`
    }

    if (lifetimeRevenueVal) lifetimeRevenueVal.textContent = formatCurrency(lifetime.totalRevenue || 0, profile)
    if (lifetimePrintsVal) {
      lifetimePrintsVal.textContent = `${(Number(lifetime.totalPagesPrinted) || 0).toLocaleString('en-IN')} Pages`
    }
    if (lifetimeJobsVal) {
      lifetimeJobsVal.textContent = `${(Number(lifetime.totalJobsCompleted) || 0).toLocaleString('en-IN')} Jobs`
    }

    // Shop Setup Synced Details Panel
    if (detailShopName) {
      detailShopName.textContent = profile.shopName
        ? `${profile.shopName} (${shopCode})`
        : shopCode !== 'UNSET'
          ? shopCode
          : 'Not paired yet'
    }
    if (detailShopLocation) {
      const parts = [profile.ownerName, profile.cityState || profile.address, profile.phone].filter(Boolean)
      detailShopLocation.textContent = parts.length > 0 ? parts.join(' · ') : '--'
    }
    if (detailShopPlan) {
      const maxP = Number(profile.maxPrinters || config.maxPrinters) || 3
      const maxMb = profile.maxFileSizeMb ? ` · Max ${profile.maxFileSizeMb}MB/file` : ''
      detailShopPlan.textContent = planLabel
        ? `${planLabel} (${maxP} Printer${maxP > 1 ? 's' : ''}${maxMb})`
        : `${maxP} Printer(s) Allowed`
    }
    if (detailShopRates) {
      if (profile.bwRate != null || profile.colorRate != null) {
        const duplexNote = profile.pricingSettings?.duplexEnabled
          ? ` · Duplex +${formatCurrency(profile.pricingSettings.duplexExtraRate || 0, profile)}`
          : ''
        detailShopRates.textContent = `B&W: ${formatCurrency(profile.bwRate || 0, profile)}/p · Color: ${formatCurrency(profile.colorRate || 0, profile)}/p${duplexNote}`
      } else {
        detailShopRates.textContent = '--'
      }
    }

    // Recent Print Jobs Table
    if (recentJobsCountBadge) {
      recentJobsCountBadge.textContent = `${recentJobs.length} Job${recentJobs.length === 1 ? '' : 's'}`
    }

    if (recentJobsTableBody) {
      if (recentJobs.length === 0) {
        recentJobsTableBody.innerHTML = `
          <tr>
            <td colspan="5" class="empty-table-cell">No print jobs recorded yet for Shop ${escapeHtml(shopCode)}.</td>
          </tr>
        `
      } else {
        recentJobsTableBody.innerHTML = recentJobs
          .slice(0, 20)
          .map((job) => {
            const isColor = job.colorType === 'COLOR'
            const iconCls = fileIconClass ? fileIconClass(job.originalFileName) : 'bxs-file-pdf'
            const isWaitingCounter = job.status === 'WAITING_COUNTER_APPROVAL'
            const payLabel = job.isCounterOrder ? 'Counter' : 'Online'
            const actionButtons = isWaitingCounter
              ? `<button type="button" class="table-action-btn approve" data-approve-job="${escapeHtml(job.jobId)}" title="Approve & Print">Print</button>
                 <button type="button" class="table-action-btn deny" data-deny-job="${escapeHtml(job.jobId)}" title="Reject Order">Reject</button>`
              : ''

            return `
              <tr>
                <td>
                  <span class="job-id-cell">#${escapeHtml(job.jobId)}</span>
                  <span class="job-time-sub">${escapeHtml(formatTimeShort(job.createdAt))}</span>
                </td>
                <td>
                  <div class="job-file-cell" title="${escapeHtml(job.originalFileName)}">
                    <i class='bx ${escapeHtml(iconCls)}' style="color: var(--brand); margin-right: 4px;"></i>${escapeHtml(job.originalFileName)}
                  </div>
                  ${job.printedPrinterName ? `<span class="job-time-sub">Printer: ${escapeHtml(job.printedPrinterName)}</span>` : ''}
                  ${job.errorMessage && job.status === 'PRINT_FAILED' ? `<span class="job-time-sub" style="color: var(--rose);">${escapeHtml(job.errorMessage)}</span>` : ''}
                </td>
                <td>
                  <span class="job-spec-pill ${isColor ? 'is-color' : ''}">${isColor ? 'Color' : 'B&W'}</span>
                  <span class="job-spec-pill">${Number(job.totalPages) || 1}p × ${Number(job.copies) || 1}</span>
                  <span class="job-spec-pill">${job.isDuplex ? 'Duplex' : 'Simplex'} · ${escapeHtml(job.paperSize || 'A4')}</span>
                </td>
                <td>
                  <strong class="mono-font" style="color: var(--emerald);">${escapeHtml(formatCurrency(job.totalAmount || 0, job))}</strong>
                  <span class="job-time-sub">${escapeHtml(payLabel)}</span>
                </td>
                <td>
                  ${renderStatusBadgeHtml(job.status)}
                  ${actionButtons}
                </td>
              </tr>
            `
          })
          .join('')
      }
    }
  }

  // Handle inline Approve / Reject buttons in the Recent Print Jobs table
  if (recentJobsTableBody) {
    recentJobsTableBody.addEventListener('click', async (e) => {
      const approveBtn = e.target.closest('[data-approve-job]')
      if (approveBtn && isElectron) {
        const jobId = approveBtn.getAttribute('data-approve-job')
        approveBtn.disabled = true
        approveBtn.textContent = 'Printing...'
        const res = await window.electronAPI.approveCounterOrder(jobId)
        if (res?.success) {
          showToast(`Counter Order #${jobId} approved and sent to printer!`, 'success')
        } else {
          showToast(`Could not print #${jobId}: ${res?.error || 'Error'}`, 'error')
        }
        return
      }

      const denyBtn = e.target.closest('[data-deny-job]')
      if (denyBtn && isElectron) {
        const jobId = denyBtn.getAttribute('data-deny-job')
        denyBtn.disabled = true
        await window.electronAPI.denyCounterOrder(jobId)
        showToast(`Counter Order #${jobId} rejected.`, 'info')
      }
    })
  }

  // ===========================================================================
  // Load Initial Version, Configuration, Logs & DB Stats
  // ===========================================================================
  if (isElectron && typeof window.electronAPI.getAppVersion === 'function') {
    try {
      runtimeVersion = await window.electronAPI.getAppVersion()
      if (runtimeVersion) {
        if (appVersionSpan) appVersionSpan.textContent = `v${runtimeVersion}`
        if (currentVersionVal) currentVersionVal.textContent = `v${runtimeVersion}`
        if (updateStatusText) updateStatusText.textContent = `v${runtimeVersion} (Current)`
      }
    } catch {
      // Ignore version IPC error
    }
  }

  if (isElectron) {
    try {
      const saved = await window.electronAPI.getConfig()
      if (saved) config = { ...config, ...saved }
    } catch (e) {
      console.warn('Error loading config:', e)
    }
  }

  shopIdInput.value = config.shopId || ''
  secretKeyInput.value = config.secretKey || ''
  if (autoStartToggle) autoStartToggle.checked = config.autoStartOnBoot !== false
  if (displayShopCode) displayShopCode.textContent = config.shopId || 'UNSET'

  if (isElectron && typeof window.electronAPI.getRecentLogs === 'function') {
    try {
      const recentLogs = await window.electronAPI.getRecentLogs()
      if (Array.isArray(recentLogs)) {
        recentLogs.forEach((entry) => {
          logActivity(entry.level || 'INFO', entry.message || '', entry.uiType || 'info', entry.scope || '', entry.timestamp)
        })
      }
    } catch {
      // Ignore initial log fetch error
    }
  }

  if (isElectron && typeof window.electronAPI.getShopStats === 'function') {
    try {
      const initialStats = await window.electronAPI.getShopStats()
      if (initialStats) renderShopStatsSnapshot(initialStats)
    } catch {
      // Ignore initial stats error
    }
  }

  if (toggleSecretBtn) {
    toggleSecretBtn.addEventListener('click', () => {
      isPasswordVisible = !isPasswordVisible
      secretKeyInput.type = isPasswordVisible ? 'text' : 'password'
      toggleSecretBtn.innerHTML = isPasswordVisible ? '<i class="bx bx-hide"></i>' : '<i class="bx bx-show"></i>'
    })
  }

  if (copyShopCodeBtn) {
    copyShopCodeBtn.addEventListener('click', () => {
      if (!config.shopId) {
        showToast('Please set your Shop ID Code first', 'error')
        return
      }
      navigator.clipboard.writeText(config.shopId)
      showToast('Shop ID copied to clipboard!', 'success')
      logActivity('CLIPBOARD', `Copied Shop ID: ${config.shopId}`, 'info')
    })
  }

  if (reconnectBtn) {
    reconnectBtn.addEventListener('click', async () => {
      logActivity('SOCKET', 'Reconnecting to Cloud Server...', 'info')
      showToast('Reconnecting to server...', 'success')
      if (isElectron && typeof window.electronAPI.reconnectSocket === 'function') {
        await window.electronAPI.reconnectSocket()
      }
    })
  }

  if (openLogFileBtn) {
    openLogFileBtn.addEventListener('click', async () => {
      if (isElectron && typeof window.electronAPI.openLogsFolder === 'function') {
        await window.electronAPI.openLogsFolder()
      }
    })
  }

  if (sidebarQuitBtn) {
    sidebarQuitBtn.addEventListener('click', async () => {
      if (isElectron && typeof window.electronAPI.exitApp === 'function') {
        await window.electronAPI.exitApp()
      }
    })
  }

  // ===========================================================================
  // Application Update UI Controller
  // ===========================================================================
  function setUpdateUIState(state, data) {
    if (!checkForUpdatesBtn) return
    const curVer = data?.currentVer || data?.currentVersion || runtimeVersion || '--'

    switch (state) {
      case 'CHECKING': {
        checkForUpdatesBtn.disabled = true
        if (checkUpdateIcon) checkUpdateIcon.className = 'bx bx-loader-alt bx-spin'
        if (checkUpdateBtnText) checkUpdateBtnText.textContent = 'Checking for Updates...'
        if (updateStatusText) updateStatusText.textContent = 'Checking...'
        if (updateMessage) updateMessage.textContent = 'Checking for new releases on GitHub...'
        break
      }
      case 'UP_TO_DATE': {
        checkForUpdatesBtn.disabled = false
        checkForUpdatesBtn.style.display = 'inline-flex'
        if (checkUpdateIcon) checkUpdateIcon.className = 'bx bx-refresh'
        if (checkUpdateBtnText) checkUpdateBtnText.textContent = 'Check for Updates'
        if (updateStatusPill) updateStatusPill.className = 'status-pill connected'
        if (updateStatusText) updateStatusText.textContent = `v${curVer} (Up to Date)`
        if (targetVersionRow) targetVersionRow.style.display = 'none'
        if (updateProgressWrap) updateProgressWrap.style.display = 'none'
        if (installRestartBtn) installRestartBtn.style.display = 'none'
        if (dashboardUpdateBanner) dashboardUpdateBanner.style.display = 'none'
        if (updateMessage) updateMessage.textContent = `You are running the latest version of Scan&Print Agent (v${curVer}).`
        break
      }
      case 'DOWNLOADING': {
        const ver = data || 'New'
        checkForUpdatesBtn.disabled = true
        checkForUpdatesBtn.style.display = 'inline-flex'
        if (checkUpdateIcon) checkUpdateIcon.className = 'bx bx-cloud-download bx-fade-down'
        if (checkUpdateBtnText) checkUpdateBtnText.textContent = `Downloading v${ver}...`
        if (updateStatusPill) updateStatusPill.className = 'status-pill connected'
        if (updateStatusText) updateStatusText.textContent = `Downloading v${ver}`
        if (targetVersionRow) targetVersionRow.style.display = 'flex'
        if (targetVersionVal) targetVersionVal.textContent = `v${ver}`
        if (updateProgressWrap) updateProgressWrap.style.display = 'flex'
        if (updateProgressBar) updateProgressBar.style.width = '8%'
        if (updateProgressPercent) updateProgressPercent.textContent = '0%'
        if (updateProgressLabel) updateProgressLabel.textContent = 'Downloading update package...'
        if (installRestartBtn) installRestartBtn.style.display = 'none'
        if (updateMessage) updateMessage.textContent = `New version v${ver} detected! Background download in progress...`
        break
      }
      case 'DOWNLOADING_PROGRESS': {
        const percent = Math.min(Math.max(Number(data) || 0, 0), 100)
        if (updateProgressWrap) updateProgressWrap.style.display = 'flex'
        if (updateProgressBar) updateProgressBar.style.width = `${percent}%`
        if (updateProgressPercent) updateProgressPercent.textContent = `${percent}%`
        if (updateProgressLabel) updateProgressLabel.textContent = `Downloading update (${percent}%)...`
        if (checkUpdateBtnText) checkUpdateBtnText.textContent = `Downloading (${percent}%)...`
        break
      }
      case 'READY': {
        const readyVer = data || 'New'
        checkForUpdatesBtn.style.display = 'none'
        if (updateProgressWrap) updateProgressWrap.style.display = 'none'
        if (targetVersionRow) targetVersionRow.style.display = 'flex'
        if (targetVersionVal) targetVersionVal.textContent = `v${readyVer}`
        if (updateStatusPill) updateStatusPill.className = 'status-pill connected'
        if (updateStatusText) updateStatusText.textContent = `v${readyVer} (Ready)`
        if (updateMessage) updateMessage.textContent = `Update v${readyVer} has been verified and downloaded. Click below to install and restart.`
        if (installRestartBtn) {
          installRestartBtn.style.display = 'inline-flex'
          if (installRestartBtnText) installRestartBtnText.textContent = `Install & Restart (v${readyVer})`
        }
        if (dashboardUpdateBanner) {
          dashboardUpdateBanner.style.display = 'flex'
          const dashTitle = document.getElementById('dashboardUpdateTitle')
          if (dashTitle) dashTitle.textContent = `Update v${readyVer} Ready!`
          const dashSub = document.getElementById('dashboardUpdateSub')
          if (dashSub) dashSub.textContent = `Scan&Print Agent v${readyVer} is downloaded and ready to install.`
        }
        break
      }
      case 'DEV_MODE': {
        checkForUpdatesBtn.disabled = false
        checkForUpdatesBtn.style.display = 'inline-flex'
        if (checkUpdateIcon) checkUpdateIcon.className = 'bx bx-refresh'
        if (checkUpdateBtnText) checkUpdateBtnText.textContent = 'Check for Updates'
        if (updateStatusPill) updateStatusPill.className = 'status-pill unconfigured'
        if (updateStatusText) updateStatusText.textContent = 'Dev Mode'
        if (updateMessage) updateMessage.textContent = 'Running in unpackaged dev mode. Auto-updates activate in packaged production builds.'
        break
      }
      case 'ERROR': {
        checkForUpdatesBtn.disabled = false
        checkForUpdatesBtn.style.display = 'inline-flex'
        if (checkUpdateIcon) checkUpdateIcon.className = 'bx bx-refresh'
        if (checkUpdateBtnText) checkUpdateBtnText.textContent = 'Check for Updates'
        if (updateStatusPill) updateStatusPill.className = 'status-pill disconnected'
        if (updateStatusText) updateStatusText.textContent = 'Check Failed'
        if (updateMessage) updateMessage.textContent = `Could not verify updates: ${data || 'Check internet connection'}.`
        break
      }
    }
  }

  if (checkForUpdatesBtn) {
    checkForUpdatesBtn.addEventListener('click', async () => {
      setUpdateUIState('CHECKING')
      logActivity('UPDATE', 'Checking for updates on GitHub...', 'ready')
      try {
        if (isElectron && typeof window.electronAPI.checkForUpdates === 'function') {
          await window.electronAPI.checkForUpdates()
        } else {
          setUpdateUIState('UP_TO_DATE', { currentVer: runtimeVersion })
        }
      } catch (err) {
        setUpdateUIState('ERROR', err.message)
        showToast(`Update check failed: ${err.message}`, 'error')
      }
    })
  }

  const handleInstallAndRestart = async () => {
    logActivity('UPDATE', 'Installing update and restarting agent...', 'ready')
    showToast('Installing update and restarting agent...', 'info')
    if (installRestartBtn) installRestartBtn.disabled = true
    if (dashboardUpdateBtn) dashboardUpdateBtn.disabled = true
    if (installRestartBtnText) installRestartBtnText.textContent = 'Restarting Agent...'

    try {
      if (isElectron && typeof window.electronAPI.installUpdate === 'function') {
        const success = await window.electronAPI.installUpdate()
        if (success === false) {
          if (installRestartBtn) installRestartBtn.disabled = false
          if (dashboardUpdateBtn) dashboardUpdateBtn.disabled = false
          if (installRestartBtnText) installRestartBtnText.textContent = 'Install & Restart Now'
        }
      }
    } catch (err) {
      showToast(`Restart failed: ${err.message}`, 'error')
      if (installRestartBtn) installRestartBtn.disabled = false
      if (dashboardUpdateBtn) dashboardUpdateBtn.disabled = false
    }
  }

  if (installRestartBtn) installRestartBtn.addEventListener('click', handleInstallAndRestart)
  if (dashboardUpdateBtn) dashboardUpdateBtn.addEventListener('click', handleInstallAndRestart)

  if (clearLogBtn) {
    clearLogBtn.addEventListener('click', async () => {
      if (isElectron && typeof window.electronAPI.clearLogs === 'function') {
        await window.electronAPI.clearLogs()
      } else if (activityLog) {
        activityLog.innerHTML = ''
        logActivity('SYSTEM', 'Log history cleared by user.', 'info')
      }
    })
  }

  if (copyLogsBtn) {
    copyLogsBtn.addEventListener('click', async () => {
      try {
        const lines = []
        activityLog.querySelectorAll('.log-entry').forEach((el) => {
          if (el.style.display !== 'none') lines.push(el.innerText)
        })
        if (lines.length === 0) {
          showToast('No logs to copy', 'error')
          return
        }
        await navigator.clipboard.writeText(lines.join('\n'))
        showToast('Activity logs copied to clipboard!', 'success')
      } catch {
        showToast('Failed to copy logs', 'error')
      }
    })
  }

  if (logFilterGroup) {
    logFilterGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.log-filter-btn')
      if (!btn) return
      logFilterGroup.querySelectorAll('.log-filter-btn').forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')
      activeLogFilter = btn.dataset.filter || 'all'
      applyLogFilters()
    })
  }

  if (logSearchInput) {
    logSearchInput.addEventListener('input', applyLogFilters)
  }

  if (createShortcutBtn) {
    createShortcutBtn.addEventListener('click', async () => {
      if (isElectron && typeof window.electronAPI.createDesktopShortcut === 'function') {
        try {
          createShortcutBtn.disabled = true
          createShortcutBtn.innerHTML = '<span>Creating Shortcut...</span> <i class="bx bx-loader-alt bx-spin"></i>'
          const result = await window.electronAPI.createDesktopShortcut()
          if (result && result.success) {
            showToast('Shortcut created on your Windows Desktop!', 'success')
            logActivity('SYSTEM', 'Desktop icon created at: ' + (result.path || 'Desktop'), 'ready')
          } else {
            showToast(result?.message || 'Could not create shortcut', 'error')
            logActivity('ERROR', 'Desktop shortcut error: ' + (result?.message || 'Unknown'), 'error')
          }
        } catch {
          showToast('Error creating desktop shortcut', 'error')
        } finally {
          createShortcutBtn.disabled = false
          createShortcutBtn.innerHTML = '<span>Create Desktop Shortcut Icon <i class="bx bxs-pin"></i></span>'
        }
      }
    })
  }

  if (autoStartToggle) {
    autoStartToggle.addEventListener('change', async () => {
      const enabled = autoStartToggle.checked
      config.autoStartOnBoot = enabled
      if (isElectron) {
        await window.electronAPI.saveConfig({ autoStartOnBoot: enabled })
        logActivity('SYSTEM', `Auto-start on Windows boot set to: ${enabled ? 'ENABLED' : 'DISABLED'}`, 'info')
        showToast(`Auto-start ${enabled ? 'enabled' : 'disabled'}!`, 'success')
      }
    })
  }

  // ===========================================================================
  // Unified Printer Discovery, Capabilities & Assignment UI
  // ===========================================================================
  function statusToClass(text) {
    return String(text || 'unknown')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
  }

  function renderPrinterCard(p) {
    const statusCls = statusToClass(p.statusText)

    const colorCapBadge = p.supportsColor
      ? `<span class="cap-badge cap-yes cap-color"><i class='bx bx-palette'></i> ${escapeHtml(p.colorCapability || 'Color & B&W')}</span>`
      : `<span class="cap-badge"><i class='bx bx-adjust'></i> ${escapeHtml(p.colorCapability || 'B&W Only (Mono)')}</span>`

    const duplexCapBadge = p.supportsDuplex
      ? `<span class="cap-badge cap-yes cap-duplex"><i class='bx bx-duplicate'></i> ${escapeHtml(p.sidesCapability || 'Duplex & Simplex')}</span>`
      : `<span class="cap-badge"><i class='bx bx-file-blank'></i> ${escapeHtml(p.sidesCapability || 'Simplex Only')}</span>`

    const assignedRoles = []
    if (config.defaultBwPrinter && config.defaultBwPrinter === p.name) assignedRoles.push('B&W')
    if (config.defaultColorPrinter && config.defaultColorPrinter === p.name) assignedRoles.push('Color')
    if (config.defaultDuplexPrinter && config.defaultDuplexPrinter === p.name) assignedRoles.push('Duplex')

    const roleBadge =
      assignedRoles.length > 0
        ? `<span class="cap-badge cap-role"><i class='bx bxs-check-shield'></i> Assigned: ${escapeHtml(assignedRoles.join(' + '))}</span>`
        : ''

    return `
      <div class="printer-card ${p.isOnline ? 'is-online' : ''}">
        <div class="printer-card-top">
          <div class="printer-card-icon"><i class='bx bx-printer'></i></div>
          <div class="printer-card-name-wrap">
            <div class="printer-card-name" title="${escapeHtml(p.name)}">${escapeHtml(p.name)}</div>
            <div class="printer-card-port">${escapeHtml(p.portName || 'Local')} · ${escapeHtml(p.driverName || 'Driver')}</div>
            ${p.isDefault ? '<div class="printer-card-default-tag">Windows Default</div>' : ''}
          </div>
          <span class="printer-status-badge status-${escapeHtml(statusCls)}">
            <span class="status-dot"></span>${escapeHtml(p.statusText || 'Ready')}
          </span>
        </div>
        <div class="printer-cap-row">
          ${colorCapBadge}
          ${duplexCapBadge}
          ${roleBadge}
        </div>
        <div class="printer-meta-sub">
          <span>Mode: ${escapeHtml(p.currentColorMode || 'B&W')} · ${escapeHtml(p.currentDuplexMode || 'Simplex')}</span>
          <span>Paper: ${escapeHtml(p.defaultPaperSize || 'A4')}</span>
        </div>
      </div>
    `
  }

  function populatePrinterDropdowns(printersList) {
    bwPrinterSelect.innerHTML = ''
    colorPrinterSelect.innerHTML = ''
    duplexPrinterSelect.innerHTML = ''

    if (!Array.isArray(printersList) || printersList.length === 0) {
      bwPrinterSelect.innerHTML = '<option value="">-- No Windows Printers Found --</option>'
      colorPrinterSelect.innerHTML = '<option value="">-- No Windows Printers Found --</option>'
      duplexPrinterSelect.innerHTML = '<option value="">-- No Windows Printers Found --</option>'
      if (printersCountVal) printersCountVal.textContent = '0 Detected'
      return
    }

    const onlineCount = printersList.filter((p) => p.isOnline).length
    if (printersCountVal) {
      printersCountVal.textContent = `${printersList.length} Active (${onlineCount} Ready)`
    }

    let hasMatchedBw = false
    let hasMatchedColor = false

    const optDuplexNone = document.createElement('option')
    optDuplexNone.value = ''
    optDuplexNone.textContent = '-- None (use B&W/Color printer) --'
    duplexPrinterSelect.appendChild(optDuplexNone)

    const physicalPrinters = printersList.filter((p) => !p.isVirtual)
    const fallbackFirst = (physicalPrinters[0] || printersList[0])?.name || ''

    printersList.forEach((printer) => {
      const pName = printer.name
      const capTag = `[${printer.supportsColor ? 'Color' : 'B&W'}, ${printer.supportsDuplex ? 'Duplex' : 'Simplex'}]`
      const pLabel = `${pName} ${capTag}${printer.isDefault ? ' (Default)' : ''}`

      const optBw = document.createElement('option')
      optBw.value = pName
      optBw.textContent = pLabel
      if (config.defaultBwPrinter && config.defaultBwPrinter === pName) {
        optBw.selected = true
        hasMatchedBw = true
      }
      bwPrinterSelect.appendChild(optBw)

      const optColor = document.createElement('option')
      optColor.value = pName
      optColor.textContent = pLabel
      if (config.defaultColorPrinter && config.defaultColorPrinter === pName) {
        optColor.selected = true
        hasMatchedColor = true
      }
      colorPrinterSelect.appendChild(optColor)

      const optDuplex = document.createElement('option')
      optDuplex.value = pName
      optDuplex.textContent = pLabel
      if (config.defaultDuplexPrinter && config.defaultDuplexPrinter === pName) {
        optDuplex.selected = true
      }
      duplexPrinterSelect.appendChild(optDuplex)
    })

    if (!hasMatchedBw && fallbackFirst) {
      bwPrinterSelect.value = fallbackFirst
      config.defaultBwPrinter = fallbackFirst
    }
    if (!hasMatchedColor && fallbackFirst) {
      const colorCandidate = physicalPrinters.find((p) => p.supportsColor)?.name || fallbackFirst
      colorPrinterSelect.value = colorCandidate
      config.defaultColorPrinter = colorCandidate
    }

    applyPlanRestrictions()
  }

  function applyPlanRestrictions() {
    const maxPrinters = Number(config.maxPrinters) || 3
    const planBadge = document.getElementById('planBadge')
    const colorLockHint = document.getElementById('colorPrinterLockHint')
    const duplexLockHint = document.getElementById('duplexPrinterLockHint')

    if (planBadge) {
      const planLabel = PLAN_LABELS[String(config.planTier || '').toUpperCase()] || null
      if (planLabel) {
        planBadge.style.display = ''
        planBadge.textContent = `${planLabel} · up to ${maxPrinters} printer${maxPrinters > 1 ? 's' : ''}`
      } else {
        planBadge.style.display = 'none'
      }
    }

    const colorAllowed = maxPrinters >= 2
    const duplexAllowed = maxPrinters >= 3

    colorPrinterSelect.disabled = !colorAllowed
    duplexPrinterSelect.disabled = !duplexAllowed
    if (colorLockHint) colorLockHint.style.display = colorAllowed ? 'none' : ''
    if (duplexLockHint) duplexLockHint.style.display = duplexAllowed ? 'none' : ''

    if (!colorAllowed) {
      colorPrinterSelect.value = bwPrinterSelect.value
    }
    if (!duplexAllowed) {
      duplexPrinterSelect.value = ''
    }
  }

  async function loadAllPrinterData(forceRefresh = false, updateDropdowns = true) {
    if (!isElectron || typeof window.electronAPI.getPrintersStatus !== 'function') {
      if (printerCardsGrid) {
        printerCardsGrid.innerHTML = '<div class="empty-state-mini">Live printer status is available in the desktop app.</div>'
      }
      return
    }

    try {
      const list = await window.electronAPI.getPrintersStatus(forceRefresh)
      detailedPrinters = Array.isArray(list) ? list : []

      if (navPrintersBadge) navPrintersBadge.textContent = String(detailedPrinters.length)

      if (updateDropdowns) {
        populatePrinterDropdowns(detailedPrinters)
      } else if (printersCountVal) {
        const onlineCount = detailedPrinters.filter((p) => p.isOnline).length
        printersCountVal.textContent =
          detailedPrinters.length > 0 ? `${detailedPrinters.length} Active (${onlineCount} Ready)` : '0 Detected'
      }

      if (printerCardsGrid) {
        if (detailedPrinters.length === 0) {
          printerCardsGrid.innerHTML =
            '<div class="empty-state-mini">No printers detected on this PC. Connect a printer and click Refresh.</div>'
        } else {
          printerCardsGrid.innerHTML = detailedPrinters.map(renderPrinterCard).join('')
        }
      }
    } catch (err) {
      if (printerCardsGrid) {
        printerCardsGrid.innerHTML = `<div class="empty-state-mini">Could not read printer status: ${escapeHtml(err.message)}</div>`
      }
    }
  }

  bwPrinterSelect.addEventListener('change', () => {
    if (colorPrinterSelect.disabled) {
      colorPrinterSelect.value = bwPrinterSelect.value
    }
  })

  if (refreshPrintersBtn) {
    refreshPrintersBtn.addEventListener('click', async () => {
      refreshPrintersBtn.disabled = true
      refreshPrintersBtn.innerHTML = '<span>Refreshing...</span> <i class="bx bx-loader-alt bx-spin"></i>'
      await loadAllPrinterData(true, true)
      refreshPrintersBtn.disabled = false
      refreshPrintersBtn.innerHTML = '<span>Refresh</span> <i class="bx bx-refresh"></i>'
      showToast('Printer capabilities & status updated', 'success')
    })
  }

  if (saveAssignmentBtn) {
    saveAssignmentBtn.addEventListener('click', async () => {
      const newAssignment = {
        defaultBwPrinter: bwPrinterSelect.value,
        defaultColorPrinter: colorPrinterSelect.value,
        defaultDuplexPrinter: duplexPrinterSelect.value,
      }
      config = { ...config, ...newAssignment }
      if (isElectron) {
        const saved = await window.electronAPI.saveConfig(newAssignment)
        if (saved) {
          if (printerCardsGrid && detailedPrinters.length > 0) {
            printerCardsGrid.innerHTML = detailedPrinters.map(renderPrinterCard).join('')
          }
          showToast('Printer assignment saved!', 'success')
          logActivity(
            'CONFIG',
            `B&W → ${newAssignment.defaultBwPrinter || 'none'} | Color → ${newAssignment.defaultColorPrinter || 'none'} | Duplex → ${newAssignment.defaultDuplexPrinter || 'none'}`,
            'ready'
          )
        } else {
          showToast('Failed to save printer assignment', 'error')
        }
      }
    })
  }

  async function handleTestPrint(printerName, modeLabel) {
    if (!printerName) {
      showToast('Please select a target printer first', 'error')
      return
    }

    logActivity('PRINT', `Sending ${modeLabel} test print page to: ${printerName}...`, 'print')
    showToast(`Sending test page to ${printerName}...`, 'success')

    if (isElectron) {
      try {
        const result = await window.electronAPI.testPrint(printerName, modeLabel)
        if (result && result.success) {
          showToast(`Test print sent successfully to ${printerName}!`, 'success')
          logActivity('PRINT', `Test page spool completed on ${printerName}`, 'online')
        } else {
          showToast(`Test print failed: ${result?.error || 'Unknown error'}`, 'error')
          logActivity('ERROR', `Test print failed: ${result?.error || 'Unknown error'}`, 'error')
        }
      } catch (err) {
        showToast(`Spooler error: ${err.message}`, 'error')
        logActivity('ERROR', `Spooler error: ${err.message}`, 'error')
      }
    }
  }

  if (testBwPrintBtn) testBwPrintBtn.addEventListener('click', () => handleTestPrint(bwPrinterSelect.value, 'Black & White'))
  if (testColorPrintBtn) testColorPrintBtn.addEventListener('click', () => handleTestPrint(colorPrinterSelect.value, 'Color'))
  if (testDuplexPrintBtn) {
    testDuplexPrintBtn.addEventListener('click', () => {
      const printerToTest = duplexPrinterSelect.value || bwPrinterSelect.value
      handleTestPrint(printerToTest, 'Duplex Test')
    })
  }

  // Save Shop Credentials & Connect
  settingsForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const cleanShopCode = shopIdInput.value.trim().toUpperCase()
    const cleanSecret = secretKeyInput.value.trim()

    if (!cleanShopCode || !cleanSecret) {
      showToast('Please enter both Shop ID and Secret API Key', 'error')
      return
    }

    shopIdInput.value = cleanShopCode
    if (displayShopCode) displayShopCode.textContent = cleanShopCode

    const newConfig = {
      shopId: cleanShopCode,
      secretKey: cleanSecret,
      defaultBwPrinter: bwPrinterSelect.value,
      defaultColorPrinter: colorPrinterSelect.value,
      defaultDuplexPrinter: duplexPrinterSelect.value,
      autoStartOnBoot: autoStartToggle ? autoStartToggle.checked : true,
    }

    saveBtn.disabled = true
    saveBtn.innerHTML = '<span>Saving & Connecting...</span> <i class="bx bx-loader-alt bx-spin"></i>'

    if (isElectron) {
      const saved = await window.electronAPI.saveConfig(newConfig)
      if (saved) {
        config = { ...config, ...newConfig }
        showToast('Credentials saved! Connecting to cloud...', 'success')
        logActivity('CONFIG', `Credentials saved for ${cleanShopCode}. Connecting...`, 'ready')
      } else {
        showToast('Failed to save configuration', 'error')
      }
    }

    saveBtn.disabled = false
    saveBtn.innerHTML = '<span>Save Credentials & Connect <i class="bx bx-rocket"></i></span>'
  })

  // ===========================================================================
  // Live IPC Listeners from Main Process
  // ===========================================================================
  function updateUIStatus(status, details = {}) {
    const cleanStatus = String(status || 'DISCONNECTED').toUpperCase()
    statusCard.className = 'status-card ' + cleanStatus.toLowerCase()
    statusPill.className = 'status-pill ' + cleanStatus.toLowerCase()

    function setSidebarStatus(label, colorVar) {
      if (sidebarStatusLabel) sidebarStatusLabel.textContent = label
      if (sidebarStatusDot) sidebarStatusDot.style.color = colorVar
    }

    if (cleanStatus === 'CONNECTED') {
      statusText.innerHTML = 'Connected & Authorized <i class="bx bxs-zap"></i>'
      statusDot.className = 'status-dot pulse-animation'
      setSidebarStatus('Connected', 'var(--emerald)')
      if (displayShopCode && details.shopId) displayShopCode.textContent = details.shopId
    } else if (cleanStatus === 'DEVICE_NOT_APPROVED') {
      statusText.innerHTML = 'Pending Approval <i class="bx bx-time-five"></i>'
      statusDot.className = 'status-dot'
      setSidebarStatus('Pending Approval', 'var(--amber)')
      showToast('Device Approval Required! Approve this PC from your Shop Dashboard.', 'error')
    } else if (cleanStatus === 'DEVICE_REVOKED') {
      statusText.innerHTML = 'Device Unlinked <i class="bx bx-shield-x"></i>'
      statusDot.className = 'status-dot'
      setSidebarStatus('Unlinked', 'var(--rose)')
      showToast(details.message || 'Device unlinked from shop.', 'error')
    } else if (cleanStatus === 'AUTH_ERROR') {
      statusText.innerHTML = 'Invalid Credentials <i class="bx bx-error-circle"></i>'
      statusDot.className = 'status-dot'
      setSidebarStatus('Auth Error', 'var(--rose)')
      showToast(details.message || 'Invalid Shop ID or Secret Key.', 'error')
    } else if (cleanStatus === 'DISCONNECTED') {
      statusText.textContent = 'Disconnected (Retrying...)'
      statusDot.className = 'status-dot'
      setSidebarStatus('Disconnected', 'var(--rose)')
    } else if (cleanStatus === 'UNCONFIGURED') {
      statusText.textContent = 'Awaiting Shop Setup'
      statusDot.className = 'status-dot'
      setSidebarStatus('Setup Needed', 'var(--amber)')
    }
  }

  if (isElectron && typeof window.electronAPI.onStatusUpdate === 'function') {
    window.electronAPI.onStatusUpdate((payload) => {
      const status = payload?.status || payload
      const details = payload?.details || {}
      updateUIStatus(status, details)
    })
  }

  if (isElectron && typeof window.electronAPI.onShopStatsUpdated === 'function') {
    window.electronAPI.onShopStatsUpdated((snapshot) => {
      renderShopStatsSnapshot(snapshot)
    })
  }

  if (isElectron && typeof window.electronAPI.onConfigUpdated === 'function') {
    window.electronAPI.onConfigUpdated((updatedConfig) => {
      if (!updatedConfig) return
      const previousMax = config.maxPrinters
      config = { ...config, ...updatedConfig }
      applyPlanRestrictions()
      if (typeof updatedConfig.defaultBwPrinter === 'string' && updatedConfig.defaultBwPrinter) {
        bwPrinterSelect.value = updatedConfig.defaultBwPrinter
      }
      if (typeof updatedConfig.defaultColorPrinter === 'string') {
        colorPrinterSelect.value = updatedConfig.defaultColorPrinter
      }
      if (typeof updatedConfig.defaultDuplexPrinter === 'string') {
        duplexPrinterSelect.value = updatedConfig.defaultDuplexPrinter
      }
      if (printerCardsGrid && detailedPrinters.length > 0) {
        printerCardsGrid.innerHTML = detailedPrinters.map(renderPrinterCard).join('')
      }
      if (previousMax !== config.maxPrinters) {
        showToast(`Plan updated: up to ${config.maxPrinters} printer${config.maxPrinters > 1 ? 's' : ''} allowed`, 'success')
      }
    })
  }

  if (isElectron && typeof window.electronAPI.onIncomingJob === 'function') {
    window.electronAPI.onIncomingJob((job) => {
      const eventType = job?.eventType || 'DISPATCHED'

      if (eventType === 'COUNTER_PENDING') {
        flashIncomingJobBanner(job, 'COUNTER APPROVAL')
      } else if (eventType === 'DISPATCHED') {
        flashIncomingJobBanner(job, 'SPOOLING')
      } else if (eventType === 'PRINTING') {
        if (jobBanner && jobBanner.style.display === 'flex' && bannerJobBadge) {
          bannerJobBadge.textContent = 'PRINTING'
        }
      } else if (eventType === 'SUCCESS') {
        showToast(`Job #${job.jobId || ''} printed on ${job.printedOn || 'printer'}!`, 'success')
        setTimeout(() => loadAllPrinterData(false, false), 2500)
      } else if (eventType === 'FAILED') {
        showToast(`Print failed for Job #${job.jobId || ''}: ${job.error || 'Unknown error'}`, 'error')
      }
    })
  }

  if (isElectron && typeof window.electronAPI.onAgentLog === 'function') {
    window.electronAPI.onAgentLog((entry) => {
      if (!entry) return
      logActivity(
        entry.level || 'INFO',
        entry.message || '',
        entry.uiType || 'info',
        entry.scope || '',
        entry.timestamp
      )
    })
  }

  // Handle 10-minute automatic log truncation & manual clear events from main process
  if (isElectron && typeof window.electronAPI.onLogsCleared === 'function') {
    window.electronAPI.onLogsCleared((info) => {
      if (activityLog) {
        activityLog.innerHTML = ''
      }
      logActivity(
        'SYSTEM',
        info?.reason || 'Logs auto-cleared (10-minute disk saver cycle)',
        'info',
        'Logger',
        info?.timestamp || ''
      )
    })
  }

  if (isElectron && typeof window.electronAPI.onUpdateStatus === 'function') {
    window.electronAPI.onUpdateStatus((eventData) => {
      const { status, payload, currentVersion, downloadedVersion } = eventData || {}
      if (currentVersion) runtimeVersion = currentVersion
      if (status) {
        setUpdateUIState(status, payload)
        if (status === 'READY') {
          showToast(`Update v${downloadedVersion || payload} is ready to install!`, 'success')
        } else if (status === 'UP_TO_DATE') {
          showToast(`Agent is up to date (v${runtimeVersion}).`, 'success')
        } else if (status === 'DEV_MODE') {
          showToast('Dev mode: Updates are active in packaged builds.', 'info')
        }
      }
    })
  }

  if (isElectron && typeof window.electronAPI.getUpdateStatus === 'function') {
    try {
      const updateInfo = await window.electronAPI.getUpdateStatus()
      if (updateInfo?.currentVersion) runtimeVersion = updateInfo.currentVersion
      if (updateInfo?.isUpdateReady) {
        setUpdateUIState('READY', updateInfo.downloadedVersion)
      }
    } catch {
      // Ignore update status error
    }
  }

  await loadAllPrinterData(false, true)

  // Only refresh printer hardware status every 60s when the user is viewing the Printers tab
  let printerPollTimer = null

  function startPrinterPolling() {
    if (printerPollTimer) clearInterval(printerPollTimer)
    printerPollTimer = setInterval(() => {
      if (!document.hidden && activePanelName === 'printers') {
        loadAllPrinterData(false, false)
      }
    }, 60000)
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      startPrinterPolling()
    } else if (printerPollTimer) {
      clearInterval(printerPollTimer)
      printerPollTimer = null
    }
  })

  startPrinterPolling()
})
