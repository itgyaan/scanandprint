import os
import re
import urllib.request
import urllib.error

dump_dir = "/Users/apple/ScanAndPrint/_site_dump"
base_url = "https://www.scanandprint.in/assets/"

to_download = set()

# Seed with files found in index-DT7bjHxJ.js
with open(os.path.join(dump_dir, "index-DT7bjHxJ.js"), "r", encoding="utf-8") as f:
    text = f.read()

matches = re.findall(r'([a-zA-Z0-9_\-]+\.(?:js|css))', text)
for m in matches:
    to_download.add(m)

downloaded = set(os.listdir(dump_dir))

while True:
    new_downloads = to_download - downloaded
    if not new_downloads:
        break
    for filename in list(new_downloads):
        file_url = base_url + filename
        dest_path = os.path.join(dump_dir, filename)
        try:
            req = urllib.request.Request(
                file_url,
                headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
            )
            with urllib.request.urlopen(req) as resp, open(dest_path, "wb") as out:
                out.write(resp.read())
            downloaded.add(filename)
            print(f"Downloaded: {filename}")
            
            # Scan new file for more js/css files
            if filename.endswith(".js"):
                try:
                    with open(dest_path, "r", encoding="utf-8", errors="ignore") as f:
                        content = f.read()
                    sub_matches = re.findall(r'([a-zA-Z0-9_\-]+\.(?:js|css))', content)
                    for sm in sub_matches:
                        if sm not in downloaded:
                            to_download.add(sm)
                except Exception as e:
                    pass
        except urllib.error.HTTPError as e:
            # 404 or other
            downloaded.add(filename)
            # print(f"Skip {filename}: {e.code}")
        except Exception as e:
            downloaded.add(filename)
            # print(f"Error {filename}: {e}")

print(f"Total downloaded files in dump: {len(os.listdir(dump_dir))}")
