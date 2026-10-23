with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function Ti(')
if idx == -1:
    idx = text.find('Ti=')
print('Found Ti at:', idx)
if idx != -1:
    print(text[idx:idx+600])
