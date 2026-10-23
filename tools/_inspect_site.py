import os
import re

dump_dir = "/Users/apple/ScanAndPrint/_site_dump"

media_files = set()
api_endpoints = set()

for fname in os.listdir(dump_dir):
    if fname.endswith(".js"):
        p = os.path.join(dump_dir, fname)
        with open(p, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        
        # Images/svgs/media
        media = re.findall(r'["\'](/(?:svgs|images|icons|illustrations|fonts)/[^"\'\s]+?\.(?:svg|png|jpg|jpeg|webp|ico|gif|woff2?))["\']', content)
        media_files.update(media)
        
        # API endpoints
        apis = re.findall(r'["\'](/(?:api|v1)/[^"\'\s]+)["\']', content)
        api_endpoints.update(apis)
        
        # full URLs
        urls = re.findall(r'https?://[a-zA-Z0-9.\-_:]+/(?:api|v1)[^"\'\s]+', content)
        api_endpoints.update(urls)

print("Found media files:", len(media_files))
for m in sorted(media_files):
    print("  ", m)

print("\nFound API endpoints:", len(api_endpoints))
for a in sorted(api_endpoints):
    print("  ", a)
