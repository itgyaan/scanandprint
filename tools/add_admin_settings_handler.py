with open('/Users/apple/ScanAndPrint/server.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Add admin settings handler to handleAdminApi
target = 'if (pathname.startsWith(\'/api/admin/transactions\')) {'

replacement = '''  if (pathname.startsWith('/api/admin/settings')) {
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

  if (pathname.startsWith('/api/admin/transactions')) {'''

if target in text:
    text = text.replace(target, replacement)
    print("Added /api/admin/settings to handleAdminApi")
else:
    print("Could not find target in server.js")

# Add settings object to MOCK_ADMIN
admin_target = 'const MOCK_ADMIN = {'
admin_replacement = '''const MOCK_ADMIN = {
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
  },'''

if admin_target in text and 'settings:' not in text:
    text = text.replace(admin_target, admin_replacement, 1)
    print("Added settings to MOCK_ADMIN")

with open('/Users/apple/ScanAndPrint/server.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Finished updating server.js")
