import React, {useEffect, useState} from 'react';
import ButtonPrimary from '../buttons/button-primary';
import charterFeather from '../../images/iconography/charter-feather.png';
import heroGraphic from '../../images/iconography/hero-graphic.png';
import './hero7.css';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroStrip7 = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const [videoState, setVideoState] = useState(false);
    const [buttonState, setButtonState] = useState(false);
  
    const showVideo = () => {
      setVideoState(!videoState);
      setButtonState(!buttonState);
    }

    return (
        <div className='Hero7'>


            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <img src={charterFeather} alt="Feather logo" data-aos='fade-up' data-aos-duration='600'/>
                    <h1 data-aos='fade-up' data-aos-duration='700'>Healthcare Solutions for every age and stage.</h1>
                    <p data-aos='fade-up' data-aos-duration='900'>With top-tier providers, a wide variety of programs, and a track record of success, we’re equipped to meet our patients where they’re at and provide them the quality care they need.</p>
                    <div data-aos='fade-up' data-aos-duration='1300'>
                        <div className='play-btn-wrapper' onClick={showVideo} onKeyDown={showVideo} role='button'>
                            {videoState ? <ButtonPrimary content='Hide Video' /> : <ButtonPrimary content='Watch Video' />}
                        </div>
                    </div>
                </div>
                <div className='hero-assets'>
                    <iframe 
                        className={`video ${videoState ? 'active' : ''}`} 
                        src="https://player.vimeo.com/video/312555365" 
                        title='Charter Healthcare Introduction and Information'
                        width="640" height="360" frameBorder="0" allowFullScreen
                    />
                    <img src={heroGraphic} alt="Icons" className={`hero-graphic ${videoState ? 'active-graphic' : ''}`} data-aos='fade-up' data-aos-duration='700' />
                </div>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 187" fill="none" className='hero-wave'>
                <g filter="url(#filter0_d)">
                <path d="M15 75.3871C15 75.3871 279.5 -49.2332 727 75.386C1174.5 200.005 1415 75.3871 1415 75.3871V177H15V75.3871Z" fill="#F6F7FB"/>
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="1430" height="187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="-5"/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>

            
        </div>
    );
};

export default HeroStrip7;