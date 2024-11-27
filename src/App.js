import React, { useState, useEffect } from "react";
import "./App.css";

const WeatherStation = () => {
  const [temperature, setTemperature] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the ThingSpeak data
        const response = await fetch(
          "https://api.thingspeak.com/channels/2764736/feeds.json?results=2"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from ThingSpeak.");
        }

        // Parse the JSON data
        const data = await response.json();

        // Log the full response for debugging
        console.log(data);

        // Extract temperature (field1) and pressure (field3) from the feeds
        const feeds = data.feeds;
        const latestFeed = feeds[0]; // Get the most recent data point

        const temp = latestFeed.field1; // Temperature from field1
        const pres = latestFeed.field3; // Pressure from field3

        // Update the state
        setTemperature(temp);
        setPressure(pres);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="weather-station">
      <h1>Weather Station {temperature ? temperature : "N/A"} °C</h1>
      <div className="weather-data">
        <div className="data-item">
          <h3>Temperature</h3>
          <iframe
            width={450}
            height={250}
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2764736/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          ></iframe>
        </div>
        <div className="data-item">
          <h3>Humidity</h3>
          <iframe
            width={450}
            height={250}
            src="https://thingspeak.com/channels/2764736/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          />
        </div>
        <div className="data-item">
          <h3>Pressure</h3>
          <iframe
            width={450}
            height={250}
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2764736/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          ></iframe>
        </div>
        <div className="data-item">
          <h3>Wind Speed</h3>
          <iframe
            width={450}
            height={250}
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2764736/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          ></iframe>
        </div>
        <div className="data-item">
          <h3>Rain</h3>
          <iframe
            width={450}
            height={250}
            style={{ border: " 1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2764736/widgets/978855"
          ></iframe>
        </div>
        <div className="data-item">
          <h3>UV Index</h3>
          <iframe
            width={450}
            height={250}
            style={{ border: "1px solid #cccccc" }}
            src="https://thingspeak.com/channels/2764736/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WeatherStation;
