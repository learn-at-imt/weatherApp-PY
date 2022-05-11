import React from 'react';
import "./style.css";
import { useEffect, useState } from 'react';
import Details from "./Details";

const SearchMain = () => {
    const [longitude, setLongitude] = useState([]);
    const [latitude, setLatitude] = useState([]);
     const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
      try{
          let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=c4671be32bcf17453217310fbcad6cc5`;

          let res = await fetch(url);
          let data = await res.json();
          const {temp, humidity, pressure} = data.main;
          const {main: weatherType} = data.weather[0];
          const{lon, lat } = data.coord;
          const {speed} = data.wind;
          const {name} = data;
          const {sunset} = data.sys;
          
          const myNewWeatherInfo = {
              temp, humidity, pressure, weatherType, name, lon, lat, sunset, speed
          };
            setTempInfo(myNewWeatherInfo);

          console.log(data);
      } catch (error) {
          console.log(error);
      }
    }


    useEffect(() => {
        getWeatherInfo()
    },[])

    
  return (
      <>
    <div className='wrap'>
    <div className="search">
        <input type="search" placeholder='longitude' id="search" value={longitude} onChange={(e) => setLongitude(e.target.value)}/>
        <input type="search" placeholder='latitude' id="search" value={latitude} onChange={(a) => setLatitude(a.target.value)}/> 
        <button className='searchButton' onClick={getWeatherInfo}>
       search
   </button>
    </div>
  
    </div>
    <Details {...tempInfo}/>
    </>
  )
}

export default SearchMain