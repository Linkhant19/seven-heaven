// src/components/SanJose.js
// San Jose page view

import React, { useState } from 'react';
import '../assets/styles/main.css';
import Footer from './Footer';

const image = require('../assets/images/photo1.JPG');

function SanJose() {
    // use state for some clickable popups
    const [showPopupBoy, setShowPopupBoy] = useState(false);
    const [showPopupRat, setShowPopupRat] = useState(false);

    const togglePopupBoy = () => {
        setShowPopupBoy(!showPopupBoy);
    };

    const togglePopupRat = () => {
        setShowPopupRat(!showPopupRat);
    };

    return (
        <div> 
            <div className='poem-page-container'>
                <div id='stars3'></div>
                <div id='stars3'></div>
                <h1>San Jose</h1>
                <div className="poem-container">
                    <p className='subtitle'>
                        San Jose | May 2024<br />
                    </p>
                    <img src={image} alt="San Jose" />
                    <p>
                        Three months in and you invited me over <br />
                        “Come stay with me at my parents’ house over summer.” <br />
                        I had my doubts but my little ghosts say, <br />
                        “This is the slowest you’ve taken with a <span className='popup-word'onClick={togglePopupBoy}>boy</span> anyway.” <br />
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
            <Footer />
        </div>
    );
};

export default SanJose;