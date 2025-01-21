// src/components/SanJose.js
// San Jose page view

import React, { useState, useEffect } from 'react';
import '../assets/styles/main2.css';
import Footer from './Footer';
import Header from './Header';

const image = require('../assets/images/photo1.JPG');

function SanJose() {
    // no body border for this page
    document.body.style.border = 'none';

    // use state for some clickable popups
    const [showPopupBoy, setShowPopupBoy] = useState(false);
    const [showPopupRat, setShowPopupRat] = useState(false);

    const togglePopupBoy = () => {
        setShowPopupBoy(!showPopupBoy);
    };

    const togglePopupRat = () => {
        setShowPopupRat(!showPopupRat);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; 
            const maxScroll = document.body.scrollHeight - window.innerHeight; 
            const scale = 5;  // so that we can acheive the desired effect faster
            const minOpacity = 0.04;  // minimum opacity value that I want
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
            const titleElement = document.getElementById('poem-title-san-jose');
            if (titleElement) {
                titleElement.style.textShadow = newOpacity > 0.95 ? textShadow : 'none';
            }

            // if opacity is less than 0.2, set the text in direction-text to ' '
            const directionTextElement = document.getElementById('direction-text');
            if (directionTextElement) {
                directionTextElement.style.opacity = newOpacity > 0.4 ? 1 : 0;
            }

            const directionTextElement2 = document.getElementById('direction-text2');
            if (directionTextElement2) {
                directionTextElement2.style.opacity = newOpacity > 0.4 ? 1 : 0;
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); 
    }, []);
       

    return (
        <div> 
            <Header />
            <div className='poem-page-container'>
                <div id='stars3'></div>
                <div id='stars3'></div>
                <p id='direction-text'>Scroll Up ↑</p>
                <p id='direction-text2'>⛧ all poems are fictional.</p>

                <div className='poem-title-container'>
                    <h1 id='poem-title-san-jose'>San Jose</h1>
                </div>

                <div className="poem-container">
                    <p className='subtitle'>
                        San Jose | May 2024 <br />
                    </p>
                    <div className='poem-image-container'>
                        <div className="image-background">
                            <img src={image} alt="San Jose" className="poem-image" />
                        </div>
                    </div>
                    <p>
                        Three months in and you invited me over <br />
                        “Come stay with me at my parents’ house over summer.” <br />
                        I had my doubts but my little ghosts say, <br />
                        “This is the slowest you’ve taken with a <span className='popup-word' onClick={togglePopupBoy}>boy</span> anyway.” <br />
                        <br />
                        <br />

                        So, I packed my suitcase and my jokes, <br />
                        flew over to your hometown riding hope. <br />
                        This was the start of a year-long play <br />
                        when I first met you, <i>San Jose</i>. <br />
                        We were soulmates, <i>San Jose</i>. <br />
                        <br />

                        So, the days had turned us into certified gamers, <br />
                        and the nights were when we whispered love to each other. <br />
                        But most times, we would just argue for days and days. <br />
                        The truth’s for the realists, so I got high on your lies anyway. <br />
                        <br />
                        <br />

                        Once, you threw away my suitcase and my keeps, <br />
                        SCREECHING at me while I hid under the sheets. <br />
                        Tears attended to me as I realized I needed to… leave. <br />
                        I needed to leave <i>San Jose</i>. <br />
                        But we were soulmates, <i>San Jose</i>. <br />
                        <br />
                        <br />

                        …And, I remember this action-adventure game we were playing. <br />
                        We climbed to the highest tower, <br />
                        and we could almost see the escape, <br />
                        but, the final boss burned down the bridge, <br />
                        and summoned his army. <br />
                        After we’d killed all his minions, <br />
                        and the <span className='popup-word'onClick={togglePopupRat}>rat</span> devil showed up smiling, <br />
                        I remember thinking… <br />
                        He looked just like you. <br />
                        .<br />
                        .<br />
                        <br />

                        …And, now that we are oversharing, <br />
                        There is something I could never get to admitting. <br />
                        That one time you almost jumped off the dorm building <br />
                        was the time I fell back in love with you truly. <br />
                        As you were curled up in my arms crying <br />
                        about how you wanted to stop existing, <br />
                        I saw someone as crazy and broken as me. <br />
                        And that was the first and the only time <br />
                        I felt like I deserved love from someone, <br />
                        and that they loved me. <br />
                        I knew no one else was going to love me. <br />
                        <br />

                        No one else is going to love me. <br />
                        <br />
                        No one else is going to love me. <br />
                        <br />
                        <br />

                        Three months in and you invited me over <br />
                        “Come stay with me in <i>San Jose</i> over summer.” <br />
                        <br />

                        I knew no one else was going to love me. <br />
                        <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    </p>
                    {showPopupBoy && (
                        <div className="popup-boy">
                            <p>Boy (n): a male child or adolescent.</p>
                        </div>
                    )}
                    {showPopupRat && (
                        <div className="popup-rat">
                            <p>Rat (n): a small, furry rodent.</p>
                        </div>
                    )}
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

export default SanJose;