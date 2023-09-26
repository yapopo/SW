
import { useState , useEffect } from 'react';
import './App.css';
import Weather from './component/Weather';

function App() {

  let [weather,setWeather] = useState(null);


  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat,lon);

      console.log(lat,lon)
    });
    
  }


  
  const getWeather = async (lat, lon) =>{
    let apiKey = '8418e59d02d70f761eadf898430e8b86';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    let response = await fetch(url);   
    let data = await response.json();
    console.log(data)
    setWeather(data);

  }

  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <div className="App">
     <Weather weather={weather}/>
    </div>
  );
}

export default App;
