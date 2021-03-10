import './hero7.css';
import "aos/dist/aos.css";

import React, {useEffect, useState} from 'react';

import AOS from "aos";
import ButtonPrimary from '../buttons/button-primary';
import HealthcareIcon from '../icons/healthcare';
import HeartIcon from '../icons/heart';
import HeroGraphic from '../icons/hero-graphic';
import PlusSign from '../icons/plus-sign';
import coverImage from '../../images/headers/cover5.webp';

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
            <img src={coverImage} alt="nurse"/>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <h1>Post-acute care is complicated.</h1>
                    <h2>Let's navigate your total home health care together.</h2>
                    <h6 className='detail-title'>
                        With top-tier providers, a wide variety of programs, and a track record of success,
                        we’re equipped to meet our patients where they’re at and provide them the best total 
                        home and post-acute health care available.
                    </h6>
                    <div>
                        <div className='play-btn-wrapper' onClick={showVideo} onKeyDown={showVideo} role='button' tabIndex='0'>
                            {videoState ? <ButtonPrimary content='Hide Video' link='#' /> : <ButtonPrimary content='Watch Video' link='#'/>}
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