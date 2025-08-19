#!/bin/bash
# نصب سریع backend و frontend

# نصب python3 و pip
apt update
apt install -y python3 python3-pip

# نصب fastapi و sqlalchemy
pip3 install fastapi uvicorn sqlalchemy pydantic

# اجرای backend
cd backend
nohup uvicorn main:app --host 0.0.0.0 --port 8000 &

# نصب Node.js و npm (اگر لازم بود)
apt install -y nodejs npm
cd ../frontend
npm install
nohup npm start &