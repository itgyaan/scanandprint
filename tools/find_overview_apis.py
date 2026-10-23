with open('/Users/apple/ScanAndPrint/app/dist/assets/AdminOverview-CBZtZljh.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'[`\'"](/admin/[^`\'"]+)[`\'"]', text)
print('AdminOverview APIs:', sorted(list(set(matches))))
