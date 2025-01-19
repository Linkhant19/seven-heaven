// src/components/Home.js
// Home page view

import React from 'react';
import '../assets/styles/main2.css';

import Footer from './Footer';

// my image imports
const mainImage = require('../assets/images/door.jpg');

const poems = [
    {
        src: require('../assets/images/photo1.JPG'),
        alt: 'Poem 01',
        title: '1. San Jose',
        link: '/san-jose'
    },
    {
        src: require('../assets/images/photo3.JPG'),
        alt: 'Poem 02',
        title: '2. My Only Girl',
        link: '/my-only-girl'
    },
    {
        src: require('../assets/images/photo4.JPG'),
        alt: 'Poem 03',
        title: '3. The Man Who Wants To Kill Me',
        link: '/the-man-who-wants-to-kill-me'
    },
    {
        src: require('../assets/images/photo5.JPG'),
        alt: 'Poem 04',
        title: '4. A Madman At The Gates',
        link: '/a-madman-at-the-gates'
    },    
    {
        src: require('../assets/images/photo2.JPG'),
        alt: 'Poem 05',
        title: '5. Wonder',
        link: '/wonder'
    },
    {
        src: require('../assets/images/photo13.JPG'),
        alt: 'Poem 06',
        title: '6. Crown Dreams',
        link: '/crown-dreams'
    },
    {
        src: require('../assets/images/photo6.JPG'),
        alt: 'Poem 07',
        title: '7. Seven Ways To Heaven',
        link: '/seven-ways-to-heaven'
    }
]

function Home() {
    return (
        <div className='main-page-container'>
            <div className='main-title-container'>
                <h1 className='title-seven'>Seven Ways</h1>
                {/* <h1 className='title-ways'>Ways</h1> */}
                <h1 className='title-to'>to</h1>
                <h1 className='title-heaven'>HE VEN</h1>
            </div>
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
                        {poems.map((poem, index) => (
                            <div
                                className='each-poem'
                                key={index}
                                onClick={() => window.open(poem.link, '_blank')}
                            >
                                <img
                                    src={poem.src}
                                    alt={poem.alt}
                                    className='main-image'
                                />
                                <h2>{poem.title}</h2>
                            </div>
                        ))}
                    </div>

                    {/* end of table of contents */}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Home;