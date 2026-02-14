#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>

#define DHTPIN D4
#define DHTTYPE DHT11
#define SOIL_PIN A0
#define FLAME_PIN D5

DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";
const char* serverName = "http://192.168.1.5:5000/api/data";  
// Replace with your PC IP address

void setup() {
  Serial.begin(9600);
  dht.begin();
  pinMode(FLAME_PIN, INPUT);

  WiFi.begin(ssid, password);
  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {

    WiFiClient client;
    HTTPClient http;

    float temp = dht.readTemperature();
    float humidity = dht.readHumidity();
    int soil = analogRead(SOIL_PIN);
    int flame = digitalRead(FLAME_PIN);

    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");

    String json = "{\"temperature\":" + String(temp) +
                  ",\"humidity\":" + String(humidity) +
                  ",\"soil\":" + String(soil) +
                  ",\"flame\":" + String(flame) + "}";

    int httpResponseCode = http.POST(json);

    Serial.println(json);
    http.end();
  }

  delay(10000);
}
