import React, { useState } from 'react';
import CitySearch from './CitySearch';
import Temperature from './Temp';
import Condition from './Condition';
import Navigation from './Navigation';
import Wind from './Wind';
import './App.css';

const WeatherApp = () => {
    const [activeModel, setActiveModel] = useState('temperature');
    const [data, setData] = useState(null);
    const [city, setCity] = useState("");

    const handleCitySearch = (city) => {
        setCity(city);

        const apiKey = 'b39add481b5b9f4353d9507747e0a8ff'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                console.log(data);
                console.log(data.name);
                setData(data);
            } catch (error) {
                console.log('There was an error while fetching:', error);
            }
        };
        fetchData();
   };

   return (
    <div className='main-container'>
        <CitySearch activeModel={activeModel} onSearch={handleCitySearch} />
        {data?.name ? (
             <div className='display-area'>
             <Navigation setActiveModel={setActiveModel} />
             {activeModel === 'temperature' && 
             (<Temperature 
                cityName={data?.name} 
                temp={`Temperature: ${data?.main?.temp}°F`} 
                temp_max={`Max-Temp: ${data?.main?.temp_max}°F`}
                temp_min={`Min-Temp: ${data?.main?.temp_min}°F`}/> 
             )}
             {activeModel === 'condition' &&  
             ( <Condition 
                cityName={data?.name} 
                conditionData={data?.weather?.[0]?.description}/> 
             )}
             {activeModel === 'wind' && 
             (<Wind 
                cityName={data?.name}
                windDeg={`Wind-deg: ${data?.wind?.deg}`}
                windSpeed={`Wind speed: ${data?.wind?.speed}`} />
             )}
         </div>
        ) : (
        <div className='display-area reminder'>
            <img src="src/assets/cloud.png" className='cloud-Img' />
            <h2>Enter the City to Check the Weather</h2>
        </div>
        )}
    </div>
   );
};

export default WeatherApp;
