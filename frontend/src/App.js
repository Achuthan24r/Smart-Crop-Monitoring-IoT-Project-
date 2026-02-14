import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/data");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🌾 Smart Crop Dashboard</h1>
      {data.map((item, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <p>🌡 Temp: {item.temperature} °C</p>
          <p>💧 Humidity: {item.humidity} %</p>
          <p>🌱 Soil: {item.soil}</p>
          <p>🔥 Flame: {item.flame == 0 ? "Detected" : "Safe"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
