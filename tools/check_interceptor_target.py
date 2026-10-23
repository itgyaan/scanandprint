with open('/Users/apple/ScanAndPrint/app/dist/assets/useAuthStore-CFTOuz68.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = 'if(e.response?.status===401){if(r)return localStorage.removeItem(`adminToken`),typeof window<`u`&&window.location.pathname.startsWith(`/admin`)&&(window.location.href=`/`),Promise.reject(e);'
print('Found target in useAuthStore:', target in text)
