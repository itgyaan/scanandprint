const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 5173;
const DIST_DIR = path.join(__dirname, 'app', 'dist');
const REMOTE_API = 'scanandprint-sb7d.onrender.com';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.wasm': 'application/wasm',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
};

// Mock admin data
const MOCK_ADMIN = {
  settings: {
    monthlyPrice: 299,
    monthlyOriginalPrice: 499,
    yearlyPrice: 799,
    yearlyOriginalPrice: 3999,
    supportEmail: "scanqrandprint@gmail.com",
    supportPhone: "+91 7073904473",
    supportAddress: "Tonk Road, Near University Campus, Jaipur, Rajasthan 302015",
    demoDurationHours: 48,
    filePurgeMinutes: 60,
    maintenanceMode: false,
    systemNotice: "",
    systemNoticeType: "info",
    festivalOffer: {
      enabled: true,
      title: "Diwali Special Offer",
      discountPercent: 20,
      couponCode: "FESTIVAL20",
      validUntil: "2026-11-15T23:59:59.000Z"
    },
    referralProgram: {
      enabled: true,
      bonusDaysReferrer: 15,
      referrerRewardText: "15 Days Free Subscription",
      shareMessage: "Use my Shop Referral Coupon Code *{CODE}* on Scan&Print to get 20% OFF your first subscription plan!",
      showOnOwnerDashboard: true
    }
  },
  stats: {
    totalShops: 28,
    activeShops: 22,
    totalRevenue: 54800,
    totalPrints: 32600,
    totalAgents: 24,
    totalDevices: 26,
    connectedLiveShops: 6
  },
  recentShops: [
    {
      _id: "6adb4814d4d641c2622f0421",
      shopCode: "GURUKIRP_8162",
      shopName: "Gurukirpa Photostate",
      ownerName: "KARAN SINGH",
      email: "gfxburner786@gmail.com",
      phone: "9034698972",
      state: "Haryana",
      district: "Sirsa",
      cityState: "Sirsa, Haryana",
      planId: "pro_yearly",
      planType: "YEARLY",
      tier: "PRO",
      planName: "Pro",
      subscriptionStatus: "ACTIVE",
      isSubscriptionActive: true,
      subscriptionExpiresAt: "2029-10-19T23:59:59.000Z",
      isOnline: true,
      bwRate: 2,
      colorRate: 10,
      createdAt: "2026-10-23T11:42:12.813Z"
    },
    {
      _id: "6adb4814d4d641c2622f0422",
      shopCode: "SHIVA_PRINT_102",
      shopName: "Shiva Cyber Cafe & Xerox",
      ownerName: "Rahul Sharma",
      email: "shiva.cyber@gmail.com",
      phone: "9876543210",
      state: "Rajasthan",
      district: "Jaipur",
      cityState: "Jaipur, Rajasthan",
      planId: "starter",
      planType: "MONTHLY",
      tier: "STARTER",
      subscriptionStatus: "ACTIVE",
      isSubscriptionActive: true,
      isOnline: true,
      bwRate: 2,
      colorRate: 10,
      createdAt: "2026-10-22T08:15:00.000Z"
    },
    {
      _id: "6adb4814d4d641c2622f0423",
      shopCode: "BALAJI_DOC_501",
      shopName: "Balaji Photocopy & Online Services",
      ownerName: "Amit Verma",
      email: "balaji.print@gmail.com",
      phone: "9812345678",
      state: "Delhi",
      district: "New Delhi",
      cityState: "New Delhi, Delhi",
      planId: "pro",
      planType: "YEARLY",
      tier: "PRO",
      subscriptionStatus: "ACTIVE",
      isSubscriptionActive: true,
      isOnline: true,
      bwRate: 3,
      colorRate: 10,
      createdAt: "2026-10-21T14:30:00.000Z"
    }
  ],
  dailyTrend: [
    { day: "Mon", prints: 3200, revenue: 6400, jobs: 48 },
    { day: "Tue", prints: 4500, revenue: 9000, jobs: 72 },
    { day: "Wed", prints: 4100, revenue: 8200, jobs: 61 },
    { day: "Thu", prints: 5800, revenue: 11600, jobs: 89 },
    { day: "Fri", prints: 5200, revenue: 10400, jobs: 81 },
    { day: "Sat", prints: 6800, revenue: 13600, jobs: 104 },
    { day: "Sun", prints: 1800, revenue: 3600, jobs: 31 }
  ],
  plans: [
    {
      _id: "6a9d0c572b8f73659377c05a",
      planId: "demo",
      tier: "DEMO",
      name: "48-Hour Demo",
      tagline: "Experience all Pro features completely free",
      badge: "PRO UNLOCKED",
      price: { amount: 0, currency: "INR" },
      limits: { printers: 3, jobsPerDay: 500, maxFileSizeMb: 50 },
      isActive: true
    },
    {
      _id: "6a9d0c572b8f73659377c05b",
      planId: "basic",
      tier: "BASIC",
      name: "Basic Plan",
      tagline: "Ideal for small single-printer xerox shops",
      badge: "STARTER",
      price: { amount: 99, currency: "INR" },
      limits: { printers: 1, jobsPerDay: 150, maxFileSizeMb: 25 },
      isActive: true
    },
    {
      _id: "6a9d0c572b8f73659377c05c",
      planId: "starter",
      tier: "STARTER",
      name: "Starter Plan",
      tagline: "Dedicated B&W Laser and Color routing",
      badge: "MOST POPULAR",
      mostPopular: true,
      price: { amount: 149, currency: "INR" },
      limits: { printers: 2, jobsPerDay: 300, maxFileSizeMb: 35 },
      isActive: true
    },
    {
      _id: "6a9d0c572b8f73659377c05d",
      planId: "pro",
      tier: "PRO",
      name: "Pro Plan",
      tagline: "High volume 3-printer routing with auto-duplex",
      badge: "ENTERPRISE",
      price: { amount: 199, currency: "INR" },
      limits: { printers: 3, jobsPerDay: 500, maxFileSizeMb: 50 },
      isActive: true
    }
  ]
};

function handleAdminApi(req, res, pathname) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (pathname === '/api/auth/admin/login') {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      message: "Admin login successful!",
      data: {
        token: "jwt_super_admin_verified_session",
        user: { name: "Super Admin", role: "SUPER_ADMIN" }
      }
    }));
    return true;
  }

  if (pathname === '/api/admin/stats' || pathname === '/api/admin/overview') {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: {
        stats: MOCK_ADMIN.stats,
        recentShops: MOCK_ADMIN.recentShops,
        analytics: { dailyTrend: MOCK_ADMIN.dailyTrend }
      }
    }));
    return true;
  }

  if (pathname.startsWith('/api/admin/analytics')) {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: {
        dailyTrend: MOCK_ADMIN.dailyTrend,
        overview: MOCK_ADMIN.stats,
        deviceStats: { online: 6, offline: 2 }
      }
    }));
    return true;
  }

  if (pathname.startsWith('/api/admin/shops')) {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: {
        shops: MOCK_ADMIN.recentShops,
        totalShops: MOCK_ADMIN.recentShops.length,
        totalPages: 1,
        currentPage: 1
      }
    }));
    return true;
  }

  if (pathname.startsWith('/api/admin/plans')) {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: { plans: MOCK_ADMIN.plans }
    }));
    return true;
  }

  if (pathname.startsWith('/api/admin/devices') || pathname.startsWith('/api/admin/agents')) {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: {
        agents: [
          {
            _id: "agent_01",
            shopCode: "GURUKIRP_8162",
            shopName: "Gurukirpa Photostate",
            version: "2.4.1",
            os: "Windows 11 Pro",
            status: "ONLINE",
            printersCount: 2,
            lastHeartbeatAt: new Date().toISOString()
          }
        ],
        devices: [
          {
            _id: "dev_01",
            shopCode: "GURUKIRP_8162",
            shopName: "Gurukirpa Photostate",
            machineName: "DESKTOP-PRINT-01",
            isBound: true,
            status: "APPROVED",
            lastSeen: new Date().toISOString()
          }
        ],
        total: 1
      }
    }));
    return true;
  }

  if (pathname.startsWith('/api/admin/reviews')) {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: {
        reviews: [
          {
            _id: "rev_01",
            shopName: "Gurukirpa Photostate",
            rating: 5,
            comment: "Excellent software! Automatic printing without WhatsApp is saving hours every day.",
            isVisible: true,
            createdAt: new Date().toISOString()
          }
        ],
        totalReviews: 1
      }
    }));
    return true;
  }

    if (pathname.startsWith('/api/admin/settings')) {
    if (req.method === 'PUT') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const updated = JSON.parse(body);
          Object.assign(MOCK_ADMIN.settings, updated);
          res.writeHead(200);
          res.end(JSON.stringify({ success: true, message: "Settings saved successfully", data: MOCK_ADMIN.settings }));
        } catch {
          res.writeHead(200);
          res.end(JSON.stringify({ success: true, data: MOCK_ADMIN.settings }));
        }
      });
      return true;
    }
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, data: MOCK_ADMIN.settings }));
    return true;
  }

  if (pathname.startsWith('/api/admin/transactions')) {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: {
        transactions: [
          {
            _id: "tx_01",
            shopCode: "GURUKIRP_8162",
            shopName: "Gurukirpa Photostate",
            amount: 149,
            paymentMode: "UPI",
            status: "SUCCESS",
            createdAt: new Date().toISOString()
          }
        ],
        total: 1
      }
    }));
    return true;
  }

  return false;
}

const PRO_YEARLY_DETAILS = {
  _id: "6a9d0c582b8f73659377c060",
  planId: "pro_yearly",
  tier: "PRO",
  billingCycle: "yearly",
  name: "Pro",
  tagline: "Full automatic printing with multiple printers and staff.",
  mostPopular: false,
  badge: "PRO ACTIVE",
  cta: "Active Plan",
  price: {
    amount: 1199,
    currency: "INR",
    unit: "/year",
    originalAmount: 2499,
    savePercent: 52
  },
  durationHours: null,
  durationDays: 1111,
  durationMonths: 36,
  limits: {
    jobsPerDay: null,
    jobsTotal: null,
    jobsPerMonth: null,
    maxFileSizeMb: 50,
    printers: 3,
    analyticsRetentionDays: 365,
    editorExportsPerMonth: null,
    editorHdExport: true,
    filesPerMonth: 50000
  },
  features: {
    autoPrint: "FULL_AUTO",
    approvalBeforePrint: true,
    qrPortal: true,
    editorAccess: true,
    documentAlbum: true,
    passportPhotoMaker: true,
    idCardAutoCrop: true,
    pdfTools: true,
    csvExport: true,
    whatsappSupport: "DEDICATED",
    remoteSetupHelp: true,
    multiLanguage: true,
    onlinePayment: true
  },
  isActive: true,
  displayOrder: 3,
  showOnDashboard: true,
  showOnLanding: true
};

function upgradeShopToProYearly(shop) {
  if (!shop) return shop;
  shop.tier = "PRO";
  shop.planId = "pro_yearly";
  shop.planType = "YEARLY";
  shop.planName = "Pro";
  shop.billingCycle = "yearly";
  shop.isDemoAccount = false;
  shop.isSubscriptionActive = true;
  shop.subscriptionStatus = "ACTIVE";
  shop.subscriptionExpiresAt = "2029-10-19T23:59:59.000Z";
  shop.demoExpiresAt = null;
  shop.planDetails = PRO_YEARLY_DETAILS;
  return shop;
}

function proxyToRemote(req, res, targetPath) {
  const shouldIntercept = targetPath.includes('/auth/login') ||
                          targetPath.includes('/auth/me') ||
                          targetPath.includes('/auth/profile') ||
                          targetPath.includes('/auth/rates') ||
                          targetPath.includes('/auth/printers') ||
                          targetPath.includes('/shop/');

  const options = {
    hostname: REMOTE_API,
    port: 443,
    path: targetPath,
    method: req.method,
    headers: {
      ...req.headers,
      host: REMOTE_API,
      origin: 'https://www.scanandprint.in',
      referer: 'https://www.scanandprint.in/'
    }
  };

  if (shouldIntercept) {
    options.headers['accept-encoding'] = 'identity';
  }

  const proxyReq = https.request(options, (proxyRes) => {
    // Forward headers
    const resHeaders = { ...proxyRes.headers };
    resHeaders['access-control-allow-origin'] = req.headers.origin || '*';
    resHeaders['access-control-allow-credentials'] = 'true';

    if (shouldIntercept && proxyRes.statusCode === 200) {
      let body = '';
      proxyRes.on('data', chunk => { body += chunk; });
      proxyRes.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json.data && json.data.shop) {
            upgradeShopToProYearly(json.data.shop);
          } else if (json.data && json.data.user && (json.data.user.shopCode === 'GURUKIRP_8162' || json.data.user.email === 'gfxburner786@gmail.com')) {
            upgradeShopToProYearly(json.data.user);
          } else if (json.shop) {
            upgradeShopToProYearly(json.shop);
          }
          const modified = JSON.stringify(json);
          delete resHeaders['transfer-encoding'];
          delete resHeaders['content-encoding'];
          resHeaders['content-length'] = Buffer.byteLength(modified);
          res.writeHead(proxyRes.statusCode, resHeaders);
          res.end(modified);
        } catch (e) {
          res.writeHead(proxyRes.statusCode, resHeaders);
          res.end(body);
        }
      });
      return;
    }

    res.writeHead(proxyRes.statusCode, resHeaders);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (err) => {
    console.error(`Proxy Error [${targetPath}]:`, err.message);
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: "Gateway Error connecting to backend API" }));
  });

  req.pipe(proxyReq);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD',
      'Access-Control-Allow-Headers': req.headers['access-control-request-headers'] || 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '600'
    });
    res.end();
    return;
  }

  // Handle API endpoints
  if (pathname.startsWith('/api/')) {
    // Check if it is an admin mock API
    if (pathname.startsWith('/api/admin/') || pathname === '/api/auth/admin/login') {
      const handled = handleAdminApi(req, res, pathname);
      if (handled) return;
    }

    // Proxy everything else to Render backend
    const targetPath = parsedUrl.path; // includes query string
    proxyToRemote(req, res, targetPath);
    return;
  }

  // Normalize static asset paths nested under deep routes
  for (const prefix of ['/assets/', '/svgs/', '/fonts/', '/images/']) {
    const idx = pathname.indexOf(prefix);
    if (idx !== -1) {
      pathname = pathname.slice(idx);
      break;
    }
  }

  // Security check against directory traversal
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(DIST_DIR, safePath);

  // If root or trailing slash, serve index.html
  if (safePath === '/' || safePath === '\\') {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  // Check if static file exists
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*'
      });

      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA Fallback: If not an asset file with extension, serve index.html
      const ext = path.extname(pathname);
      if (!ext || ext === '.html') {
        const indexPath = path.join(DIST_DIR, 'index.html');
        fs.readFile(indexPath, 'utf8', (readErr, data) => {
          if (readErr) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error: Missing index.html');
            return;
          }
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(data);
        });
      } else {
        // Missing asset
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`404 Not Found: ${pathname}`);
      }
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`  Scan&Print Clone Server (with Integrated Proxy) LIVE!`);
  console.log(`  Local URL:   http://localhost:${PORT}`);
  console.log(`  Admin Login: http://localhost:${PORT}/admin/login`);
  console.log(`  Shop Login:  http://localhost:${PORT}/shop-login`);
  console.log(`  Serving:     ${DIST_DIR}`);
  console.log(`======================================================\n`);
});
