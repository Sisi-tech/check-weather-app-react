import React from 'react';

const Condition = ({ cityName,conditionData }) => {
    return (
        <div>
            <h1>{cityName}</h1>
            <h2>Condition: { conditionData}</h2>
        </div>
    );
}

export default Condition; 