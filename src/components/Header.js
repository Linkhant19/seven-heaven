// src/components/Header.js
// Header component

import React from 'react';
import '../assets/styles/main2.css';

function Header() {
    return (
        <div className="main-header">
            {/* I will send back to the main page */}
            <h1 onClick={() => window.location.href = '/'}>⌂</h1>
        </div>
    );
}

export default Header;