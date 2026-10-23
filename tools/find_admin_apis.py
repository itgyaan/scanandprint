import re

with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'[`\'"](/admin/[^`\'"]+)[`\'"]', text)
print('Admin routes/APIs:')
for m in sorted(list(set(matches))):
    print(' ', m)
