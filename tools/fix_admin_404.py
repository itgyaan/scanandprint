import os

file_path = '/Users/apple/ScanAndPrint/app/dist/assets/index-DT7bjHxJ.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update Wi definition to '/admin/login'
old_wi = 'var Wi=`/${`scanandprint/admin/control-panel/login`.replace(/^\\/+|\\/+$/g,``)||`sp-control-7x9q`}`'
new_wi = 'var Wi=`/admin/login`'

if old_wi in text:
    text = text.replace(old_wi, new_wi)
    print("Successfully updated Wi to /admin/login")
else:
    print("Could not find exact old_wi")

# 2. Update ea route guard to redirect to /admin/login instead of 404
old_ea = 'function ea({children:e}){return typeof window<`u`&&localStorage.getItem(`adminToken`)?e:(0,R.jsx)(Qi,{})}'
new_ea = 'function ea({children:e}){return typeof window<`u`&&localStorage.getItem(`adminToken`)?e:(0,R.jsx)(o,{to:`/admin/login`,replace:!0})}'

if old_ea in text:
    text = text.replace(old_ea, new_ea)
    print("Successfully updated ea to redirect to /admin/login")
else:
    print("Could not find exact old_ea")

# 3. Ensure both routes /admin/login and /scanandprint/admin/control-panel/login are registered
old_routes = '(0,R.jsx)(_,{path:Wi,element:(0,R.jsx)(Va,{})}),(0,R.jsx)(_,{path:`/admin/login`,element:(0,R.jsx)(Va,{})})'
new_routes = '(0,R.jsx)(_,{path:`/admin/login`,element:(0,R.jsx)(Va,{})}),(0,R.jsx)(_,{path:`/scanandprint/admin/control-panel/login`,element:(0,R.jsx)(Va,{})})'

if old_routes in text:
    text = text.replace(old_routes, new_routes)
    print("Successfully updated admin routes")
else:
    print("Could not find exact old_routes")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Finished applying updates to index-DT7bjHxJ.js")
