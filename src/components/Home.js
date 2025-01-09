// src/components/Home.js
// Home page view

import React from 'react';
import '../assets/styles/main2.css';

import Footer from './Footer';

// my image imports
const mainImage = require('../assets/images/door.jpg');
const Poem01Image = require('../assets/images/photo1.JPG');
const Poem02Image = require('../assets/images/photo2.JPG');
const Poem03Image = require('../assets/images/photo3.JPG');
const Poem04Image = require('../assets/images/photo4.JPG');
const Poem05Image = require('../assets/images/photo5.JPG');
const Poem06Image = require('../assets/images/photo6.JPG');
const Poem07Image = require('../assets/images/photo7.JPG');
function Home() {
    return (
        <div className='main-page-container'>
            <h1>SEVEN WAYS TO HEAVEN</h1>
            <div className='main-contents-container'>
                <div className='doorway-container'>
                    <img src={mainImage} alt="Main Page" className='doorway' />
                    {/* steps */}
                    <img src={mainImage} alt="Main Page" className='step1' />
                    <img src={mainImage} alt="Main Page" className='step2' />
                    <img src={mainImage} alt="Main Page" className='step3' />
                    <img src={mainImage} alt="Main Page" className='step4' />
                    <img src={mainImage} alt="Main Page" className='step5' />
                    <img src={mainImage} alt="Main Page" className='step6' />
                    <img src={mainImage} alt="Main Page" className='step7' />
                    {/* end of steps */}

                    {/* table of contents */}
                    <div className='main-image-container'>
                        <img src={Poem01Image} alt="Poem 01" className='main-image' onClick={()=>window.location.href='/san-jose'}/>
                        <img src={Poem02Image} alt="Poem 02" className='main-image' onClick={()=>window.location.href='/my-only-girl'}/>
                        <img src={Poem03Image} alt="Poem 03" className='main-image' onClick={()=>window.location.href='/the-man-who-wants-to-kill-me'}/>
                        <img src={Poem04Image} alt="Poem 04" className='main-image' onClick={()=>window.location.href='/the-fourth-poem-and-a-fourth-wall-break'}/>
                        <img src={Poem05Image} alt="Poem 05" className='main-image' onClick={()=>window.location.href='/mission21'}/>
                        <img src={Poem06Image} alt="Poem 06" className='main-image' onClick={()=>window.location.href='/wonder'}/>
                        <img src={Poem07Image} alt="Poem 07" className='main-image' onClick={()=>window.location.href='/seven-ways-to-heaven'}/>
                    </div>
                    {/* end of table of contents */}
                </div>

                

                {/* <div className='main-image-container'>
                    <img src={mainImage} alt="Main Page" className='main-image' />
                    <img src={Poem01Image} alt="Poem 01" className='main-image' />
                    <img src={Poem02Image} alt="Poem 02" className='main-image' />
                    <img src={Poem03Image} alt="Poem 03" className='main-image' />
                    <img src={Poem04Image} alt="Poem 04" className='main-image' />
                    <img src={Poem05Image} alt="Poem 05" className='main-image' />
                    <img src={Poem06Image} alt="Poem 06" className='main-image' />
                    <img src={Poem07Image} alt="Poem 07" className='main-image' />
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default Home;