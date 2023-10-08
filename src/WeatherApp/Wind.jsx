import React from "react";

const Wind = ({ cityName, windDeg, windSpeed }) => {
    return (
        <div>
            <h2>{cityName}</h2>
            <h2>{windDeg}</h2>
            <h2>{windSpeed}</h2>
        </div>
    )
}

export default Wind; 