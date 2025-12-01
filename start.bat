@echo off
echo ========================================
echo CRM System Startup Script
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [Error] Python not found. Please install Python 3.x first.
    echo Download URL: https://www.python.org/downloads/
    pause
    exit /b 1
)

echo [1/4] Configure environment variables...

REM Check and set necessary environment variables
if not defined SECRET_KEY (
    echo [Info] SECRET_KEY not set, using default value
    set SECRET_KEY=dev-secret-key-change-in-production
)

if not defined PORT (
    echo [Info] PORT not set, using default port 5000
    set PORT=5000
)

REM Set Flask specific port environment variable
set FLASK_RUN_PORT=%PORT%

if not defined DATABASE_URL (
    echo [Info] DATABASE_URL not set, using default SQLite database
)

echo [Environment Configuration]
if defined SECRET_KEY echo - SECRET_KEY: Configured (hidden)
if defined PORT echo - PORT: %PORT%
if defined FLASK_RUN_PORT echo - FLASK_RUN_PORT: %FLASK_RUN_PORT%
if defined DATABASE_URL echo - DATABASE_URL: %DATABASE_URL%
if not defined DATABASE_URL echo - DATABASE_URL: Not set (using default SQLite)
echo.

echo [2/4] Check dependencies...
python -m pip --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [Error] pip not installed
    pause
    exit /b 1
)

echo [3/4] Install dependencies...
python -m pip install -r requirements.txt

if %errorlevel% neq 0 (
    echo [Error] Failed to install dependencies
    pause
    exit /b 1
)

echo [4/4] Start application...
echo.
echo ========================================
echo CRM System is starting...
echo Access URL: http://localhost:%PORT%
echo Default account: admin / admin123
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Start application using Flask CLI with port parameter
set FLASK_APP=app.py
set FLASK_ENV=development
flask run --host=0.0.0.0 --port=%PORT%

pause
