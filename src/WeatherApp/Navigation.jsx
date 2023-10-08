import React from 'react';
const Navigation = ({ setActiveModel }) => {
    return (
        <nav className='nav-bar'>
            <button className='btn' onClick={() => setActiveModel('temperature')}>Temperature</button>
            <button className='btn' onClick={() => setActiveModel('condition')}>Condition</button>
        </nav>
    );
}

export default Navigation;