import React from 'react'
import './hero.css'


const HeroStrip = () => {

    return (
        <div className='Hero'>
            <div className='side-content'>
                <h1>
                    We're here for you.
                    <br></br>
                    We're there for you.  
                </h1>
                <h3>Throughout the many stages of post-accute care, we put YOU first.</h3>
            </div>
            <svg className='hero-wave-one' xmlns="http://www.w3.org/2000/svg" width="453" height="960" viewBox="0 0 453 960" fill="none">
                <path d="M0 0H374C374 0 452.5 70 452.5 280.5C452.5 491 396.5 548 383 725.5C369.5 903 428.5 960 428.5 960H0V0Z" fill="white"/>
            </svg>
            <svg className='hero-wave-two' xmlns="http://www.w3.org/2000/svg" width="1440" height="848" viewBox="0 0 1440 848" fill="none">
                <path d="M0 0H1440V194C1440 194 1251.5 150 1098.5 223.5C945.5 297 920.5 506 758 590.5C595.5 675 464.5 673 314.5 698C164.5 723 0 848 0 848V0Z" fill="url(#paint0_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="0" y1="848" x2="1440" y2="848" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F493AA"/>
                <stop offset="1" stop-color="#F2D1C9"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

export default HeroStrip