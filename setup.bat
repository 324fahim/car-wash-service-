@echo off
setlocal
cd /d "c:\Users\HP\OneDrive\Desktop\luxury-car-detailing-website"
if exist node_modules (
    echo Removing old node_modules...
    rmdir /s /q node_modules >nul 2>&1
)
echo.
echo Installing dependencies...
set PATH=%PATH%;C:\Program Files\nodejs
call npm ci 2>&1
echo.
if %ERRORLEVEL% EQU 0 (
    echo Dependencies installed! Starting dev server...
    echo.
    call npm run dev
) else (
    echo npm install failed
    pause
)
