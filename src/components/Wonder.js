// src/components/Wonder.js
// Wonder page view

import React, { useState, useEffect } from 'react';
import '../assets/styles/main2.css';
import Footer from './Footer';

const image = require('../assets/images/photo2.JPG');

function Wonder() {
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
                <h1 id='poem-title'>Wonder</h1>
                <div className="poem-container">
                    <p className='subtitle'>
                        Wonder | July 2024<br />
                    </p>
                    <div className='poem-image-container'>
                        <div className="image-background">
                            <img src={image} alt="Wonder" className="poem-image" />
                        </div>
                    </div>
                    <p>
                        Can you hold my hand when I tell you this?<br />
                        Being your friend<br />
                        is like<br /> 
                        getting to experience<br />
                        one of the wonders of the world. <br />
                        <br />

                        And, it is becoming more apparent now that<br />
                        there’s sand on my nude back and <br />
                        we are staring at the same starry sky. <br />
                        <br />

                        I promised the stars I would let them know<br />
                        when I found someone who understood me wholly. <br />
                        Look at how brightly they are smiling at us now. <br />
                        <br />

                        He said, <br />
                        “I feel like I’ve become a better person<br />
                        because of you.”<br />
                        <br />

                        And, my whole world hasn’t felt the same since. <br />
                        <br />

                        I reminisced about the times<br />
                        I came to the stars after feeling so suffocated in masks <br />
                        I created for myself. <br />
                        But, under the stars, I could take everything off and <br />
                        be the broken piece I felt like I was destined to be. <br />
                        I told them, <br />
                        “If I ever find someone who understands me for who I am, <br />
                        I will bring them to you.”<br />
                        <br />

                        Now, I see stars in his eyes <br />
                        and I can feel the whole wide space in our touch. <br />
                        There is a calmness in being broken together with someone. <br />
                        And, his smile reminds me that <br />
                        broken pieces fit better than ones that have no rough edges. <br />
                        <br />

                        I said, <br />
                        “Being your friend is like<br />
                        getting to experience <br />
                        one of the wonders of the world.” <br />
                        <br />

                        He smiled. <br />
                        <br />

                        And every burnt bridge from my past flashed. <br />
                        But, this time, they all just smiled at me <br />
                        like they knew they had been leading me…here. <br />
                        <br />

                        He said, <br />
                        “I was uninvited from a Thanksgiving dinner<br />
                        with a friend group that was never mine.<br />
                        …<br />
                        I made a calendar invite for that day<br />
                        a year ahead to check in with myself<br />
                        to see how I was doing. <br />
                        When the notification popped up a year later, <br />
                        I was with you.” <br />
                        <br />

                        And, my whole world hasn’t felt the same since. <br />
                        <br />

                        I know I can’t make up for all the uninvited dinners from your past,<br />
                        but I will be at your door every Thanksgiving, <br />
                        and I know you will keep me company every Christmas. <br />
                        <br />

                        Now, I am in my room again and I see <br />
                        two friends, tangled, with legs up against the wall. <br />
                        There’s been nothing I needed more. <br />
                        <br />

                        Hey, <br />
                        If you are going to be this nice to me, <br />
                        I might start thinking the universe is not against me.<br />
                        <br />

                        If all the stars are going to be shining this bright tonight, <br />
                        I might start to believe you love me. <br />
                        <br />

                        I promised the stars I would let them know<br />
                        when I found someone who understood me wholly. <br />
                        You should see how brightly they smile at us now. <br />
                        <br />

                        Can you hold my hand when I tell you this?<br />
                        Being your friend<br />
                        is like <br />
                        getting to experience<br />
                        one of the wonders of the world. <br />
                        <br />

                        I might start to believe someone can love me after all. <br />
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

export default Wonder;