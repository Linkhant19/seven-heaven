// src/components/Mission21.js
// Mission 21 page view

import React, { useState, useEffect } from 'react';
import '../assets/styles/main2.css';
import Footer from './Footer';

const image = require('../assets/images/photo4.JPG');

function Mission21() {
    // use state for some clickable popups

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; 
            const maxScroll = document.body.scrollHeight - window.innerHeight; 
            const scale = 3;  // so that we can acheive the desired effect faster
            const minOpacity = 0.05;  // minimum opacity value that I want
            const newOpacity = Math.max(
                minOpacity,
                1 - Math.min((scrollTop / maxScroll) * scale, 1) 
            );
            
            const imageElement = document.querySelector('.poem-container img');
            if (imageElement) {
                imageElement.style.opacity = newOpacity;  // assigning the new opacity
            }

            // for h1 title with id poem-title
            const textShadow = '1px 1px 0px white, -1px 1px 0px white,  1px -1px 0px white, -1px -1px 0px white';
            const titleElement = document.getElementById('poem-title');
            if (titleElement) {
                titleElement.style.textShadow = newOpacity > 0.95 ? textShadow : 'none';
            }

            // if opacity is less than 0.2, set the text in direction-text to ' '
            const directionTextElement = document.getElementById('direction-text');
            if (directionTextElement) {
                directionTextElement.style.opacity = newOpacity > 0.4 ? 1 : 0;
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); 
    }, []);
       

    return (
        <div> 
            <div className='poem-page-container'>
                <div id='stars3'></div>
                <div id='stars3'></div>
                <p id='direction-text'>Scroll Up ↑</p>

                <div className='poem-title-container'>
                    <h1 id='poem-title'>Mission 21</h1>
                </div>
                
                <div className="poem-container">
                    <p className='subtitle'>
                        Mission 21 | December 2024<br />
                    </p>
                    <div className='poem-image-container'>
                        <div className="image-background">
                            <img src={image} alt="Mission21" className="poem-image" />
                        </div>
                    </div>
                    <p>
                        “If we were to secretly date,<br />
                        how long could we keep it up?” <br />
                        <br />

                        ‘I would say… 21 months<br />
                        give or take.’<br />
                        <br />

                        “And, your… our friends won’t find out?”<br />
                        <br />

                        ‘They might… after 21 months.’<br />
                        <br />

                        “And, even your closest friend won’t notice?”<br />
                        <br />

                        ‘She won’t. But, when we tell her though, <br />
                        she will act like she always knew.’<br />
                        <br />

                        “I want to see that shock on her face.<br />
                        Would be funny.”<br />
                        <br />

                        ‘She’s gonna be so mad I didn’t tell her though.’<br />
                        <br />

                        “Would be funny.<br />
                        ...    <br />
                        So, do you want to be my boyfriend?<br />
                        For at least 21 months anyway?”<br />
                        <br />

                        ‘Hmm… what are the perks?’<br />
                        <br />

                        “You can lean on my shoulder on game nights.”<br />
                        <br />

                        ‘Only if you promise to act like you can’t care less.’<br />
                        <br />

                        “Deal. I will also make you dinner…<br />
                        if you want.”<br />
                        <br />

                        ‘I will help!’<br />
                        <br />

                        “Sounds good.”<br />
                        <br />

                        ‘We can make up fake crushes<br />
                        and talk about all the hottest girls in our classes.’<br />
                        <br />

                        “We can sometimes disappear during hangouts and<br />
                        exchange… kisses”<br />
                        <br />

                        ‘or blowjobs’<br />
                        <br />

                        “Keep it classy, now.”<br />
                        <br />

                        ‘Sure. We can go on dates,<br />
                        have dinner and drinks, <br />
                        and climb into each other’s beds…<br />
                        then, just stare at the ceiling<br />
                        and draw maps of our future <br />
                        that we are not sure exists.’<br />
                        <br />

                        “I can act straight <br />
                        and make them think<br />
                        you can finally keep a close friend.”<br />
                        <br />


                        ‘I can write about us in my poems<br />
                        and post them online.’<br />
                        <br />

                        “As long as you change some information<br />
                        to keep them doubting.”<br />
                        <br />

                        ‘Deal.’<br />
                        <br />

                        “Deal.”<br />
                        <br />

                        ‘Then, I would say we have a mission<br />
                        for about 21 months, give or take.’<br />
                        <br />

                        “I am going to love you so much<br />
                        and no one will interfere.”<br />
                        <br />

                        ‘I am going to write so much about you<br />
                        and no one will know.’<br />

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />


                    </p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
};

export default Mission21;