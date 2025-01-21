// src/components/CrownDreams.js
// Crown Dreams page view

import React, { useState, useEffect } from 'react';
import '../assets/styles/main2.css';
import Footer from './Footer';
import Header from './Header';

const image = require('../assets/images/photo13.JPG');

function CrownDreams() {
    // no body border for this page
    document.body.style.border = 'none';

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; 
            const maxScroll = document.body.scrollHeight - window.innerHeight; 
            const scale = 7;  // so that we can acheive the desired effect faster
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
                    <h1 id='poem-title'>Crown Dreams</h1>
                </div>
                
                <div className="poem-container">
                    <p className='subtitle'>
                        Crown Dreams | January 2025<br />
                    </p>
                    <div className='poem-image-container'>
                        <div className="image-background">
                            <img src={image} alt="CrownDreams" className="poem-image" />
                        </div>
                    </div>
                    <p>
                    I vividly remember this drawing assignment from <br />
                    when I was in elementary school. <br />
                    “Draw what you want to be when you grow up.”<br />
                    Without hesitation,<br />
                    I drew a stickman with a crown on his head,<br />
                    and little sticks around it to make it… glistering. <br />
                    <br />
                    The teacher took my drawing,<br />
                    held it up in front of the whole class, and<br />
                    declared it as the best submission for the assignment.<br />
                    That day, she became my favorite teacher<br />
                    and I was her favorite student. <br />
                    <br />

                    Then, in one class, we learned about famous painters. <br />
                    I don’t remember much, but I remember…<br />
                    Vincent.<br />
                    None of his paintings, but how the teacher described him<br />
                    <span className='dreamy'>
                    about how he walked on one wheel<br />
                    </span>
                    <span className='dreamy'>
                    in a two-legged world,<br />
                    </span>
                    <span className='dreamy'>
                    about how he took his dream piece <br />
                    </span>
                    <span className='dreamy'>
                    and splattered it across the wall, <br />
                    </span>
                    <span className='dreamy'>
                    …and about how any of us could do it all. <br />
                    </span>
                    <br />

                    I vividly remember thinking<br />
                    I know they will love me<br />
                    wearing their crown dreams<br />
                    radiating… as they are looking at me.<br />
                    <br />
                    <br />


                    Then, I was never anyone’s favorite again<br />
                    because I always ranked second in my school.<br />
                    I tried and tried and tried<br />
                    and tried<br />
                    and with a pinch of luck and <br />
                    more than 14 hours of daily studies,<br />
                    I finally got first in my school.<br />
                    <br />

                    Then, they said if I got first in my town, <br />
                    they would love me more.<br />
                    <br />
                    I did. <br />
                    <br />

                    Then, they said if I got first in my state, <br />
                    they would love me more.<br />
                    <br />
                    I did. <br />
                    <br />

                    Then, they said if I got first in the whole country, <br />
                    they would love me more.<br />
                    <br />
                    I got second. <br />
                    <br />

                    They said they loved me no matter what. <br />
                    But, at that moment, <br />
                    something in the air whispered to me <br />
                    that they love me now more than they would have<br />
                    if I didn’t win anything. <br />
                    And, they would have loved me even more<br />
                    if I was holding the first-place trophy instead.<br />
                    I remember walking into the bathroom<br />
                    with the trophy in my hand, <br />
                    and I remember the feeling of<br />
                    not being able to hold in my tears. <br />
                    <br />
                    <br />

                    #####<br />
                    <br />
                    <br />

                    For a few years after, <br />
                    a type of loathing slowly arose. <br />
                    I came into the thinking process that<br />
                    I had been wanting love incorrectly<br />
                    and that they only loved me because of my name.<br />
                    I got worse at my studies. <br />
                    I lost track of my dreams.<br />
                    My perception of the top place had been tainted. <br />
                    <br />

                    I vividly remember thinking<br />
                    I know they hate me<br />
                    a mirror of their lost dreams<br />
                    reflecting… as they are looking at me.<br />
                    <br />

                    Vincent…<br />
                    <span className='way'>
                    did he ever happen to cry? <br />
                    did he ever think about throwing himself from over a hundred feet high? <br />
                    did he care more about those who loved him or those who didn’t lie? <br />
                    did he ever want to die? <br />
                    </span>
                    <br />
                    <br />

                    At this point in life, <br />
                    I hadn’t won anything special in years.<br />
                    I tried to talk to someone, <br />
                    but nothing felt more like love<br />
                    than someone approving what I attempted.<br />
                    and nothing felt more like an accomplishment<br />
                    than getting what I wanted. <br />
                    <br />

                    But, if someone asked me<br />
                    if I would have changed anything,<br />
                    I would reply no. <br />
                    I still enjoyed feeling better than most people at some things. <br />
                    I don’t know how flawed a man would have to be<br />
                    to hold on to the same beliefs <br />
                    after being proven wrong. <br />
                    That same man swore,<br />
                    “If these beliefs stray me away from heaven, <br />
                    I will fly myself up there.”<br />
                    <br />

                    One day,<br />
                    trying to reclaim my sense of self back,<br />
                    I entered a competition.<br />
                    I said if I got first place for this one, <br />
                    I would prove myself capable once again.<br />
                    And, maybe I will finally be able to love being me.<br />
                    <br />

                    I did… win.<br />
                    <br />

                    Holding the trophy up and seeing it in the mirror<br />
                    I finally smiled.<br />
                    then tears gathered<br />
                    as I realized<br />
                    I hated myself, too. <br />


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

export default CrownDreams;