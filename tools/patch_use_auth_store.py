with open('/Users/apple/ScanAndPrint/app/dist/assets/useAuthStore-CFTOuz68.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update backend URL to /api
old_url = 'var nr=`https://scanandprint-sb7d.onrender.com/api`'
new_url = 'var nr=`/api`'
if old_url in text:
    text = text.replace(old_url, new_url)
    print("Updated nr to /api")
else:
    print("Could not find old_url")

# 2. Prevent kickout to / on admin 401
old_kickout = 'if(e.response?.status===401){if(r)return localStorage.removeItem(`adminToken`),typeof window<`u`&&window.location.pathname.startsWith(`/admin`)&&(window.location.href=`/`),Promise.reject(e);'
new_kickout = 'if(e.response?.status===401){if(r)return Promise.reject(e);'
if old_kickout in text:
    text = text.replace(old_kickout, new_kickout)
    print("Removed admin 401 kickout")
else:
    print("Could not find old_kickout")

with open('/Users/apple/ScanAndPrint/app/dist/assets/useAuthStore-CFTOuz68.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Saved useAuthStore-CFTOuz68.js")
