import re

with open("/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js", "r", encoding="utf-8") as f:
    text = f.read()

routes = re.findall(r'path:\s*[`"\']([^`"\']+)[`"\']', text)
print("Found routes:", len(routes))
for r in sorted(list(set(routes))):
    print(" ", r)
