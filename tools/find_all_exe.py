import os
import re

dist_assets = '/Users/apple/ScanAndPrint/app/dist/assets'
matches = set()

for fname in os.listdir(dist_assets):
    if fname.endswith('.js'):
        p = os.path.join(dist_assets, fname)
        with open(p, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        found = re.findall(r'https?://[^\s`\'"]+?\.exe', content)
        for u in found:
            matches.add((fname, u))

print(f"Total .exe URLs found: {len(matches)}")
for fname, u in sorted(matches):
    print(f"  {fname}: {u}")
