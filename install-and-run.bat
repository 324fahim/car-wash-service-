@echo off
setlocal enabledelayedexpansion
cd /d "c:\Users\HP\OneDrive\Desktop\luxury-car-detailing-website"
set PATH=%PATH%;C:\Program Files\nodejs
cls
echo.
echo Installing dependencies...
echo.
call npm install
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Dependencies installed successfully!
    echo.
    echo Starting development server...
    echo.
    call npm run dev
) else (
    echo.
    echo Error installing dependencies!
    pause
)
