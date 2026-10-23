with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'(?:function\s+h|var\s+h\s*=|let\s+h\s*=|const\s+h\s*=)[^;]{1,300}', text)
for m in matches:
    print('MATCH h:', m)
