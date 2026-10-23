with open('/Users/apple/ScanAndPrint/app/dist/assets/OwnerAgentDownload-C4MF5Lvs.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'href:\s*[`\'"]([^`\'"]+)[`\'"]', text)
print('href in OwnerAgentDownload:', matches)
urls = re.findall(r'https?://[^\s`\'"]+', text)
print('URLs in OwnerAgentDownload:', urls)
exes = re.findall(r'[`\'"][^`\'"]*?\.exe[^`\'"]*?[`\'"]', text)
print('.exe in OwnerAgentDownload:', exes)
