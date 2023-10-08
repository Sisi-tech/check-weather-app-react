import React, { useState } from 'react';

const CitySearch = ({ activeModel, onSearch }) => {
    const [city, setCity] = useState("");

    const capitalizeWords = (str) => {
        if (!str) return '';
        const words = str.split(' ');
        const capitalizedWords = words.map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        return capitalizedWords.join(' ');
    }

    const handleInputChange = (e) => {
        setCity(capitalizeWords(e.target.value));
    };

    const handleCitySearch = () => {
        onSearch(city);
        setCity('');
    };

    return (
        <div className='search-bar'>
            <input 
            type="text"
            placeholder='Search City'
            value={city}
            onChange={handleInputChange}
            />
            <button className='btn' onClick={handleCitySearch}>Search</button>
        </div>
    );
}

export default CitySearch; 
