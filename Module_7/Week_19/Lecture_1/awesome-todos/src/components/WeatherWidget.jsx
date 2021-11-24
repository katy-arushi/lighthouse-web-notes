import axios from "axios";
import { useEffect, useState } from "react";

export default function WeatherWidget(props){

    const [weatherData, setWeatherData] = useState({});


    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid={API KEY}")
        .then((res) => {
            setWeatherData(res.data)
            console.log()
        })
    }, [])
    return(
        <>
        {weatherData.name && <div className="WeatherWidget">
        <p>{weatherData.name}</p>
        <p>{Math.round(weatherData.main.temp - 273)}</p>
        <p>{weatherData.weather[0].description}</p>
        </div>
        }
        </>
    );
}