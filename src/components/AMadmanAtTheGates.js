// src/components/AMadmanAtTheGates.js
// A Madman At The Gates page view

import React, { useState, useEffect } from 'react';
import '../assets/styles/main2.css';
import Footer from './Footer';

const image = require('../assets/images/photo5.JPG');

function AMadmanAtTheGates() {
    // use state for some clickable popups

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; 
            const maxScroll = document.body.scrollHeight - window.innerHeight; 
            const scale = 6;  // so that we can acheive the desired effect faster
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
                    <h1 id='poem-title' className='poem-title-madman'>A Madman At The Gates</h1>
                </div>
                
                <div className="poem-container">
                    <p className='subtitle'>
                        A Madman At The Gates | August 2024<br />
                    </p>
                    <div className='poem-image-container'>
                        <div className="image-background">
                            <img src={image} alt="SevenWaysToHeaven" className="poem-image" />
                        </div>
                    </div>
                    <p>
                    I feel deeply embarrassed to report back <br />
                    that I, in fact, did not find heaven. <br />
                    <br />
                    I have been away for too long <br />
                    been fighting alone, keeping myself strong <br />
                    embarked on this journey with one purpose <br />
                    and toward some company, peace, and happiness. <br />
                    <br />

                    I have been communicating with the dead <br />
                    been studying every word of the sacred text <br />
                    but, all the paths that they say I should follow <br />
                    the roads end up being just… hollow.<br />
                    <br />
                    <br />

                    So, I feel deeply embarrassed to report back<br />
                    that I, in fact, did not find heaven. <br />
                    The worst part is that<br />
                    I almost found it. <br />
                    <br />

                    Glimpses of white-veiled cities,<br />
                    Crystal-clear water fountains<br />
                    Grand golden gates<br />
                    Someone who looked like an angel greeted me there<br />
                    I remember telling myself<br />
                    “This is heaven. Just as I imagined.<br />
                    I finally found it.” <br />
                    <br />

                    But, fleeting miracle lights blinded the fool <br />
                    I should have known it was too good to be true<br />
                    A madman is only to admire the gates of heaven<br />
                    but never ever to take a step inside. <br />
                    <br />
                    <br />
                    So, I feel deeply embarrassed to report back<br />
                    that I, in fact, did not find heaven. <br />
                    I was taken by an angel <br />
                    ended up growing more mental. <br />
                    <br />
                    But, through the chaos, I learned a truth<br />
                    It’s not about the path you choose<br />
                    or the angel you run into<br />
                    It simply is about who<br />
                    …<br />
                    The path adapts to the person who walks on it. <br />
                    And, unfortunately for the disturbed like me,<br />
                    The roads just don’t bend our way.<br />
                    <br />
                    So, I feel deeply embarrassed to say<br />
                    I, in fact, did not find heaven. <br />
                    <br />
                    A madman stands still <br />
                    at the gates of heaven.<br />
                    <br />
                    What a terrifying way<br />
                    to find out I am just going to die. <br />


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

export default AMadmanAtTheGates;