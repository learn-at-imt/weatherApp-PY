import React, { useEffect, useState } from "react";
import "./style.css";

const Details = (
    { temp, humidity, pressure, weatherType, name, lon, lat, sunset, speed}
) => {
    const [weatherState, setWeatherState] = useState("");
    useEffect(() => {
     if(weatherType){
         switch (weatherType){
             case "Clouds":
                 setWeatherState("wi-day-cloudy");
                 break;
                 case "Haze":
                     setWeatherState("wi-fog")
                     break;
                     case "Clear":
                         setWeatherState("wi-day-sunny")
                         break;
                         case "Mist":
                         setWeatherState("wi-dust");
                         break;
                         case "Rain":
                         setWeatherState("wi-day-rain");
                         break;
                         default:
                             setWeatherState("wi-day-sunny");
                             break;
         }
     }
    }, [weatherType])
    // converting sec to time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}: ${date.getMinutes()}`;
  return (
     
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{ weatherType}</div>
            <div className="place">{name},{lon},{lat}</div>
            
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"} />
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"} />
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"} />
              </p>
              <p className="extra-info-leftside">
                {pressure}<br />
                pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"} />
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Details;
