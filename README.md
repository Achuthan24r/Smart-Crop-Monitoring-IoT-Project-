# Smart-Crop-Monitoring-IoT-Project-
🌾 Smart Crop Monitoring & Protection System (IoT + Web Dashboard)

An advanced IoT-based agriculture monitoring system using Arduino + ESP8266 + Node.js + MongoDB + React.

This system monitors:

🌡 Temperature

💧 Humidity

🌱 Soil Moisture

🔥 Fire Detection

Sensor data is sent to a backend server and displayed on a live web dashboard.

🚀 Features

✅ Real-time sensor monitoring
✅ Data stored in MongoDB
✅ Live dashboard updates
✅ Fire detection alert
✅ Soil dryness monitoring
✅ WiFi-based IoT communication
✅ Full-stack integration

🏗️ Project Architecture
Sensors → Arduino → ESP8266 WiFi → Node.js Backend → MongoDB
                                              ↓
                                        React Dashboard

🧰 Hardware Components

Arduino UNO

ESP8266 WiFi Module

DHT11 Temperature & Humidity Sensor

Soil Moisture Sensor

Flame Sensor

Jumper Wires

Breadboard

Power Supply

💻 Software Stack
Layer	Technology Used
Microcontroller	Arduino
WiFi Module	ESP8266
Backend	Node.js + Express
Database	MongoDB
Frontend	React.js
📂 Project Structure
smart-agri-iot/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── arduino/
    └── smart_agri.ino

⚙️ Installation Guide
🔹 1️⃣ Backend Setup
Navigate to backend folder:
cd backend

Install dependencies:
npm install

Start server:
node server.js


Server runs at:

http://localhost:5000

🔹 2️⃣ MongoDB Setup

Install MongoDB locally
OR use MongoDB Atlas.

Default local connection:

mongodb://127.0.0.1:27017/agri_iot

🔹 3️⃣ Frontend Setup

Navigate to frontend folder:

cd frontend


Install dependencies:

npm install


Start frontend:

npm start


Frontend runs at:

http://localhost:3000

🔹 4️⃣ Arduino Setup

Install ESP8266 board package in Arduino IDE

Install required libraries:

DHT sensor library

ESP8266WiFi

Update WiFi credentials inside code:

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";


Replace backend IP:

const char* serverName = "http://YOUR_PC_IP:5000/api/data";


Upload code to ESP8266

📡 API Endpoints
POST Sensor Data
POST /api/data

GET Latest Data
GET /api/data

🔥 How It Works

Sensors collect environmental data

Arduino reads sensor values

ESP8266 sends JSON data to backend

Backend stores data in MongoDB

Frontend fetches and displays data every 5 seconds

🚨 Alert Conditions (Can Be Extended)

Temperature > 40°C

Soil moisture below threshold

Flame detected

📈 Future Improvements

SMS alerts using Twilio

WhatsApp notifications

Real-time charts using Chart.js

Auto irrigation system

Cloud deployment

Mobile app integration

AI-based crop prediction

🧠 Learning Outcomes

This project teaches:

IoT device communication

REST API development

MongoDB integration

Full-stack development

Real-time dashboard creation

Hardware + Software integration

👨‍💻 Author

Achuthan Rameshkumar

Full Stack Developer & IoT Enthusiast 🚀
