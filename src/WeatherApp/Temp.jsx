import React from 'react';

const Temperature = ({ cityName, temp, temp_max, temp_min }) => {
    return (
        <div>
            <h1>{cityName}</h1>
            <h2>{temp}</h2>
            <h2>{temp_max}</h2>
            <h2>{temp_min}</h2>
        </div>
    );
}

export default Temperature; 