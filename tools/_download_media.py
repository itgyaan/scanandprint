import os
import urllib.request

media_list = [
   "/images/auth-bg-image.webp",
   "/images/blogs/1.webp",
   "/images/blogs/2.webp",
   "/images/blogs/3.webp",
   "/images/blogs/4.webp",
   "/images/blogs/5.webp",
   "/images/blogs/6.webp",
   "/images/blogs/7.webp",
   "/images/blogs/8.webp",
   "/images/blogs/9.webp",
   "/images/og/og-blog-choosing-printer-guide.png",
   "/images/og/og-blog-cyber-cafe-2026.png",
   "/images/og/og-blog-document-privacy-guide.png",
   "/images/og/og-blog-duplex-printing-guide.png",
   "/images/og/og-blog-id-card-printing.png",
   "/images/og/og-blog-passport-photo-printing-guide.png",
   "/images/og/og-blog-start-qr-print-shop.png",
   "/images/og/og-blog-upi-payments-guide.png",
   "/images/og/og-blog-whatsapp-queues.png",
   "/images/og/og-home.png",
   "/svgs/background-landing.svg",
   "/svgs/background.svg",
   "/svgs/logo.svg"
]

public_dir = "/Users/apple/ScanAndPrint/_site_dump/public"

for m in media_list:
    url = "https://www.scanandprint.in" + m
    local_path = os.path.join(public_dir, m.lstrip("/"))
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    if os.path.exists(local_path):
        continue
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp, open(local_path, "wb") as out:
            out.write(resp.read())
        print(f"Downloaded: {m}")
    except Exception as e:
        print(f"Failed {m}: {e}")
