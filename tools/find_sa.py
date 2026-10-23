with open('/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('sa=$(')
print(text[idx-300:idx+100])
