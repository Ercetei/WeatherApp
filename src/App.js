import './App.css';
import Card from './components/Card/Card';
import React, { useEffect, useState } from "react";
import WeatherBackground from './components/WeatherBackground/WeatherBackground';

export default function App() {
  
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [data, setData] = useState([]);
  // Default city is Tokyo in case we do not get user location
  const [city, setCity] = useState('Tokyo');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // First try to get user location to set current weather
        if (!navigator.geolocation) {
          // Geolocation is not supported by the browser
          setLat(35.6895);
          setLong(139.6917);
        } else {
          // Geolocation is supported by the browser
          await navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          }, function(error) {
            // User did not give permission for location access
            setLat(35.6895);
            setLong(139.6917);
          });
        }
  
        // If we get the coordinate, we go fetch the info to the API
        if (lat && long) {
          await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
              setData(result);
              console.log(result);
          });
        }
      } catch(error) {
        console.log(error);
      }
    } 
     fetchData();
   }, [lat,long]);

  // Handle city change on the form
  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  // API request if the user is looking for a specific location on the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`);
      const result = await response.json();

      // If no result, we display an error on below the form
      if (result.cod === "404") {
        setError("Sorry, I cannot find the weather for " + city + " !");
        setCity("Tokyo");
      } else {
        setData(result);
        setError(null);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" value={city} onChange={handleCityChange} />
        <button type="submit">Get weather</button>
      </form>
      {data && <WeatherBackground data={data} />}
      {error ? (
        <div className="error">{error}</div>
      ) : (
        data && <Card data={data} />
      )}
    </div>
  );
}
