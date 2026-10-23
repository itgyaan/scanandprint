with open('/Users/apple/ScanAndPrint/app/dist/assets/useAuthStore-CFTOuz68.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'.{0,100}interceptors\.response.{0,400}', text)
for m in matches:
    print('INTERCEPTOR:', m)
