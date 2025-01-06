// src/components/Home.js
// Home page view

import React from 'react';
import '../assets/styles/main2.css';

// my image imports
const mainImage = require('../assets/images/photo5.JPG');
const Poem01Image = require('../assets/images/photo1.JPG');
const Poem02Image = require('../assets/images/photo2.JPG');
const Poem03Image = require('../assets/images/photo3.JPG');
const Poem04Image = require('../assets/images/photo4.JPG');
const Poem05Image = require('../assets/images/photo5.JPG');
const Poem06Image = require('../assets/images/photo6.JPG');
const Poem07Image = require('../assets/images/photo7.JPG');
function Home() {
    return (
        <div>
            <h1>SEVEN WAYS TO HEAVEN</h1>
            <div className='main-contents-container'>
                <div className='main-image-container'>
                    <img src={mainImage} alt="Main Page" className='main-image' />
                    <img src={Poem01Image} alt="Poem 01" className='main-image' />
                    <img src={Poem02Image} alt="Poem 02" className='main-image' />
                    <img src={Poem03Image} alt="Poem 03" className='main-image' />
                    <img src={Poem04Image} alt="Poem 04" className='main-image' />
                    <img src={Poem05Image} alt="Poem 05" className='main-image' />
                    <img src={Poem06Image} alt="Poem 06" className='main-image' />
                    <img src={Poem07Image} alt="Poem 07" className='main-image' />
                </div>
            </div>
        </div>
    );
};

export default Home;