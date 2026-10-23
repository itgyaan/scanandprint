with open('/Users/apple/ScanAndPrint/app/dist/assets/useAuthStore-CFTOuz68.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('===`localhost`')
print(text[idx-150:idx+100])
