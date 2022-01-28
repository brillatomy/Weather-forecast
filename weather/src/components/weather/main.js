import React, { useEffect, useState } from "react"
import axios from "axios"
//Components
import CurrentWeather from "./CurrentWeather"
import Forecast from "./Forecast"
import ForecastGraph from './ForecastGraph'
//Styles
import { Container, Heading } from '../styles/CurrentWeatherStyle'
import '../../App.css'

const Weather = ()=> {
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
    const [temprature, setTemprature] = useState(null);
    const [wind, setWind] =useState(null);
    const [humidity, setHumidity] = useState(null);
    const [sunrise, setSunrise] = useState(null);
    const [sunset, setSunset] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setloading] = useState(true);


 useEffect(()=>{
        location()
 },[lat,long])

  const location =(()=>{
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });

          console.log("Latitude is:", lat)
          console.log("Longitude is:", long)
        
          axios.get(`${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${long}&exclude=hourly,minutely&appid=${process.env.REACT_APP_API_KEY}`)
            .then(weatherData => {
                      setloading(false)
                      setTemprature(weatherData.data.current.temp);
                      setSunset(weatherData.data.current.sunset)
                      setSunrise(weatherData.data.current.sunrise)
                      setHumidity(weatherData.data.current.humidity)
                      setWind(weatherData.data.current.wind_speed)
                      setCity(weatherData.data.timezone)
                      setDescription(weatherData.data.current.weather[0].description)
                      setForecast(weatherData.data.daily)
                      console.log(weatherData)
            })             
  })  

  return (
      <Container className="container">  
            <Heading>Current Weather</Heading>        
            {loading ? (
              <div>
                <p>Loading..Please Wait</p>                
              </div>
            ) : (
              <CurrentWeather
                    temprature={temprature}
                    humidity={humidity}
                    description = {description}
                    sunrise={sunrise}
                    sunset={sunset}
                    city={city}
                    wind={wind}
              />
            )}     
            <Heading>Weather Forecast</Heading>
            <Forecast forecast={forecast} />  
            <Heading>Weather Forecast Graph</Heading>  
            <ForecastGraph forecast={forecast}/>      
      </Container>    
  )
}

export default Weather