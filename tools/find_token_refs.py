with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'.{0,100}localStorage\.getItem\([`\'"]adminToken[`\'"]\).{0,200}', text)
for m in matches:
    print('ADMIN TOKEN REF:', m)
