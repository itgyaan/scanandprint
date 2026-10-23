with open('/Users/apple/ScanAndPrint/app/dist/assets/useAuthStore-CFTOuz68.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('https://scanandprint-sb7d.onrender.com/api')
print(text[idx-50:idx+150])
