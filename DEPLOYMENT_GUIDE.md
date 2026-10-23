# Scan&Print - Complete Deployment & Hosting Guide

इस प्रोजेक्ट में सम्पूर्ण Scan&Print इकोसिस्टम (Frontend, Proxy Server, Mock Super Admin & Reverse Engineered Windows Print Agent) शामिल है।

---

## 🚀 1-Click / Fast Startup Options

### 1. Localhost / VPS (Linux, macOS, Windows)
```bash
# सीधा सर्वर रन करें (Zero Dependency - कोई npm install की जरूरत नहीं):
node server.js
```
या:
```bash
./start.sh   # Linux / Mac
start.bat    # Windows
```
ब्राउज़र में खोलें:
* **Frontend Home:** `http://localhost:5173/`
* **Shop Login:** `http://localhost:5173/shop-login`
  * Email: `gfxburner786@gmail.com`
  * Password: `Karan@1122`
  * Shop Code: `GURUKIRP_8162` (Yearly Pro Plan Active)
* **Photo & Doc Studio Editor:** `http://localhost:5173/editor`
* **Super Admin Login:** `http://localhost:5173/admin/login`
  * Email: `admin@scanandprint.in`
  * Password: `admin123`

---

## 🌐 Web Hosting Deployment Guide

### Option A: Linux VPS (Ubuntu / Debian / CentOS / Hetzner / DigitalOcean / AWS EC2)
1. सर्वर पर Node.js (v18 या अधिक) और PM2 इनस्टॉल करें:
   ```bash
   sudo apt update && sudo apt install -y nodejs npm
   npm install -g pm2
   ```
2. यह ज़िप फ़ाइल अपलोड करके अनज़िप करें:
   ```bash
   unzip ScanAndPrint_Full_Source_Code.zip -d /var/www/scanandprint
   cd /var/www/scanandprint
   ```
3. PM2 से 24/7 बैकग्राउंड में स्टार्ट करें:
   ```bash
   PORT=80 pm2 start server.js --name "scanandprint"
   pm2 startup
   pm2 save
   ```

### Option B: Docker (1-Click Deployment)
```bash
docker compose up -d --build
```
यह स्वचालित रूप से पोर्ट 5173 पर पूरा ऐप चालू कर देगा।

### Option C: cPanel Hosting (Setup Node.js App)
1. cPanel में **"Setup Node.js App"** पर जाएँ।
2. **"Create Application"** पर क्लिक करें।
3. सेटिंग्स भरें:
   * **Node.js version:** `18.x` या `20.x`
   * **Application mode:** `Production`
   * **Application root:** `scanandprint` (जहाँ आपने फाइलें अपलोड की हैं)
   * **Application startup file:** `server.js`
4. **"Create"** पर क्लिक करें और **"Run JS script"** से चालू कर दें।

### Option D: Cloud Hosting (Render, Railway, Fly.io, Heroku)
1. अपना GitHub repo लिंक करें।
2. **Build Command:** (खाली छोड़ दें या `npm install`)
3. **Start Command:** `node server.js`
4. Render / Railway अपने आप `$PORT` असाइन करके इसे लाइव कर देगा।

---

## 📁 प्रोजेक्ट स्ट्रक्चर (Folder Contents)

* `server.js`: प्रोडक्शन-ग्रेड Node.js प्रॉक्सी और स्टैटिक वेब सर्वर।
* `app/dist/`: पूरा प्री-बिल्ट React 18 SPA (सभी 93+ JS Chunks, Stylesheets, Fonts, SVGs, WASM AI Portait Models & Preview Images).
* `agent_source_code/`: Windows Desktop Print Agent (`.exe`) का पूरा Reverse Engineered अनपैक सोर्स कोड (`main.js`, `socketService`, `printService`, `printerManager`, `counter-popup.html`, आदि).
* `tools/`: एक्सट्रैक्शन और पैचिंग स्क्रिप्ट्स।
* `Dockerfile` & `docker-compose.yml`: डॉकर कंटेनर कॉन्फ़िगरेशन।
* `start.sh` / `start.bat`: क्विक स्टार्ट स्क्रिप्ट्स।
