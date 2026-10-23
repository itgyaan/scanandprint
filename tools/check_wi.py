with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('path:Wi')
print(text[idx-200:idx+400])
