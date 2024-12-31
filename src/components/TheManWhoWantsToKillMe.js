// src/components/TheManWhoWantsToKillMe.js
// The man who wants to kill me page view

import React, { useState, useEffect } from 'react';
import '../assets/styles/main2.css';
import Footer from './Footer';

const image = require('../assets/images/photo5.JPG');

function TheManWhoWantsToKillMe() {
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
                <h1 id='poem-title'>The Man Who Wants To Kill Me</h1>
                <div className="poem-container">
                    <p className='subtitle'>
                        The Man Who Wants To Kill Me | August 2024<br />
                    </p>
                    <div className='poem-image-container'>
                        <div className="image-background">
                            <img src={image} alt="The Man Who Wants To Kill Me" className="poem-image" />
                        </div>
                    </div>
                    <p>
                        Every morning, <br />
                        I look in the mirror and see the man who wanted to kill me last night.<br /> 
                        <br />

                        Every night, <br />
                        I hide from him.<br />
                        I place the kitchen knife safely in a drawer.<br />
                        I throw my pills in my bag, carefully zipped. <br />
                        I phone a friend. <br />
                        <br />

                        Because<br />
                        lately, I have been dreading the idea of being alone with him. <br />
                        I write about how much I hate him.<br />
                        He tells me ways of how he is going to kill me. <br />
                        <br />

                        But, to make amends, <br />
                        I took a walk at night with him. <br />
                        My favorite sweater, and same color headphones. <br />
                        An empty football field, and a starry sky. <br />
                        In a rare state of calmness, I told him<br />
                        that if we worked together,<br />
                        we could be as bright as the stars above. <br />
                        He whispered back to me, <br />
                        “Every brightest star had to die first.”<br />
                        <br />

                        Every morning, <br />
                        I look in the mirror and see the man who wanted to kill me last night. <br />
                        <br />

                        One night, <br />
                        He convinced me I was not making it out alive in the morning. <br />
                        He told me my heart got tired of beating for me. <br />
                        So, I wrote letters to my two closest friends,<br />
                        and left them on my desk for someone to find. <br />
                        <br />

                        But,<br />
                        I woke up. <br />
                        And, I just cried and cried and cried. <br />
                        <br />

                        I cried, <br />
                        “I hate you,” <br />
                        in my native language so it hurts him more. <br />
                        “I hate you. <br />
                        …<br />
                        I hate you. <br />
                        I drowned bottles and bottles of Vodka <br />
                        with hopes that at the bottom of the bottle <br />
                        laid a reason for me to love you again. <br />
                        <br />

                        I know the pride and the pain of carrying you. <br />
                        And you know<br />
                        how much I’ve thought about losing you. <br />
                        But, I still choose to continue because<br />
                        deep down, I want to love you.<br />
                        I do love you.<br />
                        But, I want to love you without hating you.<br />
                        I want to love you without fearing you.”<br />
                        <br />

                        My hope…<br />
                        My only hope is that<br />
                        <br />

                        One morning, <br />
                        I will look in the mirror and just smile.<br />

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

export default TheManWhoWantsToKillMe;