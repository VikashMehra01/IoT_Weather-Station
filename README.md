# 🌦️ IoT-Based Weather Station (ESP32 + React)

An end-to-end smart weather station using the **ESP32** microcontroller and a **React.js** dashboard to measure and display real-time environmental data. The system integrates multiple sensors and sends live weather updates wirelessly to a web interface.

## 🚀 Features

- 🌡️ Temperature monitoring (DHT11/DHT22)
- 💧 Humidity sensing
- 🌬️ Wind speed & direction measurement (Anemometer & Wind Vane)
- 🌧️ Rainfall detection (Rain Gauge / Raindrop sensor)
- 📈 Atmospheric pressure sensing (BMP180/BMP280)
- 📡 Wireless data transmission over Wi-Fi using ESP32
- 📊 Real-time web dashboard built with React.js

## 🔧 Hardware Used

- **ESP32 Dev Board**
- **DHT11 / DHT22** – Temperature and Humidity Sensor
- **BMP180 / BMP280** – Barometric Pressure Sensor
- **Rain Sensor** – Raindrop Detection Module or Tipping Bucket Rain Gauge
- **Anemometer** – Wind Speed Sensor
- **Wind Vane** – Wind Direction Sensor
- **Jumper wires, breadboard, resistors**, and supporting hardware

## 🧰 Software Stack

- **Firmware**: Arduino IDE for ESP32
- **Frontend**: React.js (bootstrapped with Create React App)
- **Communication**: Wi-Fi (HTTP or WebSocket)

## ⚙️ How It Works

1. ESP32 reads data from the connected sensors at fixed intervals.
2. Data is sent over Wi-Fi to a server or directly to the frontend dashboard.
3. The React dashboard displays live sensor readings in a clean UI.
4. System can optionally log historical data or raise alerts for abnormal weather events.

## 📦 Getting Started

### ESP32 Setup

- Open `Tinkering.ino` in Arduino IDE.
- Install required libraries:
  - `DHT sensor library by Adafruit`
  - `Adafruit BMP085 Unified`
  - `WiFi` (comes with ESP32 board)
- Connect sensors to the correct ESP32 GPIO pins.
- Replace placeholders with your Wi-Fi SSID and password in the sketch.
- Upload the code to your ESP32 board.

### React App Setup

```bash
git clone https://github.com/your-username/iot-weather-station.git
cd iot-weather-station
npm install
npm start
```
Open your browser and go to http://localhost:3000 to see live updates.

📌 Notes

    Sensor values update every few seconds as defined in the firmware.

    Dashboard can be expanded to support graphs, logs, and alerts.

    Wi-Fi credentials and server IP must be hardcoded or configured via OTA updates.
