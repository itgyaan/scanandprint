# Scan&Print - 100% Complete Full Clone

यह [Scan&Print](https://www.scanandprint.in/) का 100% identical, professional और fully-functional reverse engineered clone है।

---

## 🚀 Localhost पर Run कैसे करें

```bash
# 1. Workspace directory में जाएं
cd /Users/apple/ScanAndPrint

# 2. Server start करें
npm start
# या
node server.js
```

Server live हो जाएगा:
- **Local URL:** [http://localhost:5173](http://localhost:5173)
- **Shop Owner Login:** [http://localhost:5173/shop-login](http://localhost:5173/shop-login)
- **Customer Kiosk:** [http://localhost:5173/kiosk/GURUKIRP_8162](http://localhost:5173/kiosk/GURUKIRP_8162)

---

## 🔐 Credentials & Test Accounts

### 1. Shop Owner Account
- **Login URL:** [http://localhost:5173/shop-login](http://localhost:5173/shop-login)
- **Email:** `gfxburner786@gmail.com`
- **Password:** `Karan@1122`
- **Shop Code:** `GURUKIRP_8162` (Gurukirpa Photostate)

### 2. Super Admin Portal
- **Admin Login URL:** [http://localhost:5173/admin/login](http://localhost:5173/admin/login)  
  *(Original secret gateway: `http://localhost:5173/scanandprint/admin/control-panel/login`)*
- **Admin Email:** `admin@scanandprint.in` या `scanqrandprint@gmail.com`
- **Admin Password:** `admin123` या `Karan@1122`

---

## 📦 Features & Pages Included

### 1. Public Pages
- **Homepage (`/`):** Full hero section, dynamic 3D CTAs, feature breakdowns, live stats, comparison table, testimonials, and FAQs.
- **About (`/about`)**
- **Features (`/features`)**
- **Pricing (`/pricing`)**
- **How to Setup (`/how-to-setup`)**
- **Contact (`/contact`)**
- **Blog (`/blog`, `/blog/:slug`)**
- **Legal (`/privacy-policy`, `/terms-and-conditions`, `/refund-policy`, `/disclaimer`)**

### 2. Shop Owner Portal (`/owner/*`)
- **Login (`/shop-login`):** Live authentication with real JWT token generation.
- **Dashboard Overview (`/owner/dashboard`):** Real-time jobs count, revenue metrics, printer status.
- **Live Connected Printers (`/owner/printers`):** B&W, Color, Duplex routing configuration.
- **Print Jobs Queue (`/owner/jobs`):** Incoming customer print orders, payment status, reprint & cancel options.
- **Devices & Desktop Agent (`/owner/devices`, `/owner/agent`):** Windows desktop agent downloader & pairing keys.
- **QR Code Studio (`/owner/qr-code`):** High-resolution printable shop QR standee generator.
- **Pricing Configuration (`/owner/pricing`):** Set rates for B&W, Color, A3/A2/A1, Photo sheet, Resume, and Duplex printing.
- **Payment Setup (`/owner/payment-setup`):** Counter Cash, UPI QR, and online payment gateway options.
- **Subscription Management (`/owner/subscription`):** Demo 48-hr plan, monthly/yearly upgrades.
- **Settings & Profile (`/owner/settings`)**

### 3. Customer Print Kiosk (`/kiosk/:shopCode`)
- Mobile & Desktop friendly document upload interface.
- Supports PDF, Word documents (DOCX), Images (JPEG, PNG, WEBP), and HEIC formats.
- **PDF & Photo Studio:** Page selection, copies, color/B&W selection, passport photo maker, ID card crop, and document preview.
- **Payment Screen:** UPI QR scan payment & counter cash options.
- **Live Print Tracking:** Real-time WebSocket order tracking.

### 4. Admin Portal (`/admin/*`)
- `/admin/login`, `/admin/dashboard`, `/admin/shops`, `/admin/transactions`, `/admin/agents`, `/admin/plans`, `/admin/reviews`, `/admin/settings`.
