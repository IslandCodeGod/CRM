#!/bin/bash

echo "======================================="
echo "CRM System Startup Script"
echo "======================================="
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "[Error] Python3 not found. Please install Python 3.x first."
    exit 1
fi

echo "[1/4] Configure environment variables..."

# Check and set necessary environment variables
if [ -z "$SECRET_KEY" ]; then
    echo "[Info] SECRET_KEY not set, using default value"
    export SECRET_KEY="dev-secret-key-change-in-production"
fi

if [ -z "$PORT" ]; then
    echo "[Info] PORT not set, using default port 5001"
    export PORT="5001"
fi

if [ -z "$DATABASE_URL" ]; then
    echo "[Info] DATABASE_URL not set, using default SQLite database"
fi

echo "[Environment Configuration]"
if [ -n "$SECRET_KEY" ]; then echo "- SECRET_KEY: Configured (hidden)"; fi
if [ -n "$PORT" ]; then echo "- PORT: $PORT"; fi
if [ -n "$DATABASE_URL" ]; then echo "- DATABASE_URL: $DATABASE_URL"; else echo "- DATABASE_URL: Not set (using default SQLite)"; fi
echo ""

echo "[2/4] Check dependencies..."
if ! command -v pip3 &> /dev/null; then
    echo "[Error] pip3 not installed"
    exit 1
fi

echo "[3/4] Install dependencies..."
pip3 install -r requirements.txt

if [ $? -ne 0 ]; then
    echo "[Error] Failed to install dependencies"
    exit 1
fi

echo "[4/4] Start application..."
echo ""
echo "======================================="
echo "CRM System is starting..."
echo "Access URL: http://localhost:$PORT"
echo "Default account: admin / admin123"
echo "Press Ctrl+C to stop the server"
echo "======================================="
echo ""

# Start application with environment variables and port parameter
python3 app.py --port $PORT
