with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'(?:function\s+vi|var\s+vi\s*=|let\s+vi\s*=|const\s+vi\s*=)[^;]{1,300}', text)
for m in matches:
    print('MATCH vi:', m)
