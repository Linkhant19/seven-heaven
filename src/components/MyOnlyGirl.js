// src/components/MyOnlyGirl.js
// My Only Girl page view

import React, { useState, useEffect } from 'react';
import '../assets/styles/main2.css';
import Footer from './Footer';

const image = require('../assets/images/photo3.JPG');

function MyOnlyGirl() {
    // use state for some clickable popups

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; 
            const maxScroll = document.body.scrollHeight - window.innerHeight; 
            const scale = 3;  // so that we can acheive the desired effect faster
            const minOpacity = 0.1;  // minimum opacity value that I want
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
                titleElement.style.textShadow = newOpacity > 0.9 ? textShadow : 'none';
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
                    <h1 id='poem-title'>My Only Girl</h1>
                </div>

                <div className="poem-container">
                    <p className='subtitle'>
                        My Only Girl | August 2024<br />
                    </p>
                    <div className='poem-image-container'>
                        <div className="image-background">
                            <img src={image} alt="My Only Girl" className="poem-image" />
                        </div>
                    </div>
                    <p>
                        She said, “It’s crazy that you pulled a girl like me.”<br />
                            <span className='middle-word'>silent.</span><br />
                        I just stared at midnight,<br />
                        gleaming with the moonlight.<br />
                        <br />

                        A curious boy found a dangerous mind mid-January.<br />
                            <span className='middle-word'>beat.</span><br />
                        I just stared in her eyes.<br />
                        Timing is a good time. <br />
                        <br />

                        Then, I guess life took over.<br />
                        All just went straight into a…tornado.<br />
                            <span className='middle-word'>beat.</span><br />
                        Life on the stage of a circus show<br />
                        I hung on a thread and she let go.<br />
                        Then, just before I crushed my bones,<br />
                        Come saving me was my only girl. <br />
                            <span className='middle-word'>beat.</span><br />
                        Life on the voyage in the seven seas<br />
                        I ignored the stars so you stayed with me. <br />
                        I created fake Gods and crafted beliefs. <br />
                        Just so I can make sense of keeping you with me.<br />
                        <br />

                            <span className='middle-word'>pause.</span><br />
                            <br />

                        When she grabbed my hand and took me places, <br />
                        I snapped on the hook and handed her the leash.<br />
                        <br />

                        When she pulled me onto the thin ice of a frozen river,<br />
                        I swore that I would die, but also felt the most alive.<br />
                        <br />

                        When she first saw me cry over the phone one summer night, <br />
                        She wrote me a letter and mailed it to me. <br />
                        <br />

                        When she confessed that another man got her down on her knees,<br />
                        I joked and said, <br />
                        “I’m down to share if it will make you stay with me.”<br />
                        <br />

                        When she took my first kiss without asking me first,<br />
                        the moment she pulled back,<br />
                            <span className='middle-word'>beat.</span><br />
                        I had fallen in love.<br />
                        <br />

                        I was in love.<br />
                        Falling in love.<br />
                        <br />

                        I was in love.<br />
                        Falling in love.<br />
                        <br />

                        I was in love...<br />
                        with falling in love. <br />
                        <br />

                        Until life took over.<br />
                        And. All. Just. Went. Straight. Into. A… Tornado.<br />
                            <span className='middle-word'>beat.</span><br />
                        Life on the stage of a circus show<br />
                        I hung on a thread and she let go.<br />
                        Then, just before I crushed my bones,<br />
                        Come saving me was my only girl. <br />
                            <span className='middle-word'>beat.</span><br />
                        Life on the voyage in the seven seas<br />
                        I ignored the stars so you stayed with me. <br />
                        I created fake Gods and crafted beliefs. <br />
                        Just so I can make sense of keeping you with me.<br />
                        <br />

                        She said, “It’s crazy that you pulled a girl like me.”<br />
                            <span className='middle-word'>silent.</span><br />
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

export default MyOnlyGirl;