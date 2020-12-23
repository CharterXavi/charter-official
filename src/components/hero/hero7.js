import React, {useEffect, useState} from 'react';
import ButtonPrimary from '../buttons/button-primary';
import HeroGraphic from '../../components/icons/hero-graphic';
import PlusSign from '../../components/icons/plus-sign';
import HeartIcon from '../../components/icons/heart';
import HealthcareIcon from '../../components/icons/healthcare';
import './hero7.css';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroStrip7 = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
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
                    <h5 data-aos='fade-up' data-aos-duration='600'>Post-acute care is complicated.</h5>
                    <h1 data-aos='fade-up' data-aos-duration='800'>Let's navigate it together.</h1>
                    <h6 className='detail-title' data-aos='fade-up' data-aos-duration='1000'>With top-tier providers, a wide variety of programs, and a track record of success, we’re equipped to meet our patients where they’re at and provide them the quality care they need.</h6>
                    <div data-aos='fade-up' data-aos-duration='1300'>
                        <div className='play-btn-wrapper' onClick={showVideo} onKeyDown={showVideo} role='button' tabIndex='0'>
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
                    <HeroGraphic classProp={`hero-graphic ${videoState ? 'active-graphic' : ''}`} />
                </div>
            </div>

            <div className="animation"> 
                <HeartIcon />
                <PlusSign />
                <HeartIcon />
                <HealthcareIcon />
                <PlusSign />
                <HeartIcon />
                <HealthcareIcon />
                <HeartIcon />
                <PlusSign />
                <HealthcareIcon />
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 187" fill="none" className='hero-wave'>
                <g filter="url(#filter0_d)">
                <path d="M15 75.3871C15 75.3871 279.5 -49.2332 727 75.386C1174.5 200.005 1415 75.3871 1415 75.3871V177H15V75.3871Z" fill="#F6F7FB"/>
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="0" width="1430" height="187" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
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