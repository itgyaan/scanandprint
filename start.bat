@echo off
title ScanAndPrint Server
cd /d "%~dp0"
echo ======================================================
echo  Starting Scan^&Print Platform on Windows
echo  Open in browser: http://localhost:5173
echo ======================================================
node server.js
pause
