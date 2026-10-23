with open('/Users/apple/ScanAndPrint/app/dist/assets/useAuthStore-CFTOuz68.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('if(e.response?.status===401){')
print(text[idx:idx+800])
