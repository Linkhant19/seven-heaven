// src/components/SevenWaysToHeaven.js
// Seven ways to heaven page view

import React, { useState, useEffect } from 'react';
import '../assets/styles/main2.css';
import Footer from './Footer';
import Header from './Header';

const image = require('../assets/images/photo6.JPG');

function SevenWaysToHeaven() {
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
            <Header />
            <div className='poem-page-container'>
                <div id='stars3'></div>
                <div id='stars3'></div>
                <p id='direction-text'>Scroll Up ↑</p>

                <div className='poem-title-container'>
                    <h1 id='poem-title'>Seven Ways To Heaven</h1>
                </div>
                
                <div className="poem-container">
                    <p className='subtitle'>
                        Seven Ways To Heaven | August 2024<br />
                    </p>
                    <div className='poem-image-container'>
                        <div className="image-background">
                            <img src={image} alt="SevenWaysToHeaven" className="poem-image" />
                        </div>
                    </div>
                    <p>
                        The Professor barges into the room, <br />
                        holding up and waving around a black case file. <br />
                        He slams it on his desk and words… fly. <br />
                        <br />
                        “STUDENTS!!!<br />
                        I have an assignment!<br />
                        Here, I have cases of people who died, <br />
                        went to heaven,<br />
                        and came back,”<br />
                        Professor exclaims. <br />
                        <br />

                        “We are here in this creative writing class to… <br />
                        Create. <br />
                        Experience. <br />
                        EXPERIMENT! <br />
                        Next time we meet, in seven days, <br />
                        I want you to present to the class <br />
                        the seven ways...”<br />
                        <br />

                        His voice is already fading away in the background. <br />
                        My thoughts have joined me. <br />
                        I have been here before. <br />
                        I know many ways one can reach heaven. <br />
                        And it all starts with… <br />
                        <br />
                        <br />

                        <span className='number'>1.</span><br />
                        <br />

                        <span className='way'>
                        I was just cooking the other day,<br />
                        and there in the corner just standing was my microwave. <br />
                        I said, “hi”, <br />
                        opened its door, <br />
                        and wondered <br />
                        what if I somehow rigged its features,<br />
                        and inserted my head inside,<br />
                        and turned on the microwave. <br />
                        I never did it, but I thought to myself,<br />
                        “That’s one way to heaven.”<br />
                        <br />
                        <br />
                        </span>

                        <span className='number'>2.</span><br />
                        <br />

                        <span className='way'>
                        I remember.<br />
                        I was a kid riding shotgun in my dad’s car. <br />
                        A man dressed in a gown and in full makeup<br />
                        was crossing the road when my dad pointed at him<br />
                        and said...<br />
                        To be honest, I don’t remember the specific words but <br />
                        I remember the connotations: <br />
                        Pathetic. Shameful. Suffering. <br />
                        Weird. <br />
                        The other day, <br />
                        I looked in the mirror and saw...the full me...<br />
                        or whatever I was becoming.<br />
                        One of the most painful ways to die is to <br />
                        slowly succumb to the realization that <br />
                        you are becoming the son your parents were so afraid of. <br />
                        <br />
                        <br />
                        </span>

                        <span className='number'>3.</span><br />
                        <br />

                        <span className='way'>

                                I was on the cliffside rocks the other day.<br />
                        From below, I heard the ocean call out my name.<br />
                        She said, “Come touch me for a final embrace, <br />
                        I can show you one of the ways<br />
                        to heaven.” <br />
                        <br />
                        <br />
                        </span>

                        <span className='number'>4.</span><br />
                        <br />

                        <span className='way'>
                                
                                In life, <br />
                        there are things that we are only allowed to dream of<br />
                        because for most of them, <br />
                        some of us are not born<br />
                            rich enough nor<br />
                            pretty enough nor<br />
                            lucky enough<br />
                        to get them. <br />
                        But, there is nothing that kills you faster than<br />
                        getting the taste of everything you ever wanted<br />
                        and having it ripped away from you<br />
                        by some uncontrollable life forces. <br />
                        You could have had it all…<br />
                        but now, you are at the gates of heaven, <br />
                        begging to be taken in. <br />
                        <br />
                        <br />
                        </span>

                        <span className='number'>5.</span><br />
                        <br />

                        <span className='way'>

                                I saw wonders<br />
                                inside you.<br />
                                You saw wonders <br />
                                within me. <br />
                                But, wherever my love goes<br />
                                the madness follows. <br />
                                And, thorns I use to make myself bleed<br />
                                are now making you bleed.<br />
                                Soon, you too will leave. <br />
                                <br />
                                <br />
                        </span>

                        <span className='number'>6.</span><br />
                        <br />

                        <span className='way'>
                                Sometimes,<br />
                                an angel. <br />
                                Sometimes,<br />
                                a devil. <br />
                                Sometimes, <br />
                                they clash.<br />
                                Sometimes,<br />
                                they work in unison <br />
                        to get me to heaven.<br />
                                I never told anyone how I<br />
                        walked into the bathroom with a knife in my hand,<br />
                        and how tears came out when I was just trying to let the sink run.<br />
                        Then, without a sound, I screamed and screamed <br />
                        because the guy in the mirror wanted to kill me.<br />
                        <br />
                        <br />

                        </span>

                        <span className='number'>7.</span><br />
                        <br />

                        <span className='way'>
                                
                                even after all this,<br />
                                the fastest way to heaven…<br />
                        is to fall in love with someone who can never love you back.<br />
                        <br />
                        </span>
                        <br />
                        <br />


                        Faded clapping arose in the background<br />
                        I was standing in front of the class<br />
                        with a sudden striking feeling that<br />
                        I was naked to the core.<br />
                        Holding tight to a file in my hand,<br />
                        I realized<br />
                        <br />
                        I was falling in love.<br />

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

export default SevenWaysToHeaven;