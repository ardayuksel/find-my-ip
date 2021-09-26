import { useEffect, useState } from "react";
import "./css/reset.css";
import "./css/App.css";
import gif from "./assets/loading.gif";
import axios from "axios";

function App() {
  const [ip, setIP] = useState(null);
  const [city, setCity] = useState("");
  const API_URL = "https://geolocation-db.com/json/";

  const getData = async () => {
    const res = await axios.get(API_URL);
    setIP(res.data.IPv4);
    setCity(res.data.city);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {ip === null ? (
        <img src={gif} alt="loading" />
      ) : (
        <h1>
          Your IP Address: <span>{ip}</span>
        </h1>
      )}
      <h2>{city}</h2>
    </div>
  );
}

export default App;
