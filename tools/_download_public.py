import os
import re
import urllib.request

dump_dir = "/Users/apple/ScanAndPrint/_site_dump"
public_dir = "/Users/apple/ScanAndPrint/_site_dump/public"
os.makedirs(public_dir, exist_ok=True)

# Scan index.html and style-D3BF7A9p.css for static assets like /fonts/, /svgs/, /images/, /icons/
static_urls = set()

for fname in ["index.html", "style-D3BF7A9p.css"]:
    p = os.path.join(dump_dir, fname)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        found = re.findall(r'["\'](/(?:fonts|svgs|images|icons|assets|static)/[^"\'\)]+)["\']', content)
        found_url = re.findall(r'url\(["\']?(/[^"\'\)]+)["\']?\)', content)
        static_urls.update(found)
        static_urls.update(found_url)

print(f"Found {len(static_urls)} static asset URLs")
for u in sorted(static_urls):
    print(u)
    # Download
    full_url = "https://www.scanandprint.in" + u
    local_path = os.path.join(public_dir, u.lstrip("/"))
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    try:
        req = urllib.request.Request(full_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req) as resp, open(local_path, "wb") as out:
            out.write(resp.read())
        print(f"Saved: {u}")
    except Exception as e:
        print(f"Failed {u}: {e}")
