with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function Fi(')
if idx == -1:
    idx = text.find('Fi=')
print('Found Fi at:', idx)
if idx != -1:
    print(text[idx:idx+1500])
