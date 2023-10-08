import React from 'react';

const Temperature = ({ cityName, temperatureData }) => {
    return (
        <div>
            <h1>{cityName}</h1>
            <h2>Temperature: {temperatureData} °F</h2>
        </div>
    );
}

export default Temperature; 