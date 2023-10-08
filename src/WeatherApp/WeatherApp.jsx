import React, { useState } from 'react';
import CitySearch from './CitySearch';
import Temperature from './Temp';
import Condition from './Condition';
import Navigation from './Navigation';
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
        <Navigation setActiveModel={setActiveModel} />
        {activeModel === 'temperature' && ( <Temperature cityName={data?.name} temperatureData={data?.main?.temp} /> )}
        {activeModel === 'condition' &&  ( <Condition cityName={data?.name} conditionData={data?.weather?.[0]?.description}/> )}
    </div>
   );
};

export default WeatherApp;
