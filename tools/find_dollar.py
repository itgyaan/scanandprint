with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find definition of function $( or var $=
matches = re.findall(r'(?:function\s+\$|var\s+\$\s*=|let\s+\$\s*=|const\s+\$\s*=)[^;]{1,300}', text)
for m in matches:
    print('MATCH $:', m)
