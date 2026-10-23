with open('/Users/apple/ScanAndPrint/app/dist/assets/AdminSettings-D2AkO9nU.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'label:\s*[`\'"]([^`\'"]+)[`\'"]', text)
print('Labels in AdminSettings:')
for l in sorted(list(set(matches))):
    print(' ', l)
