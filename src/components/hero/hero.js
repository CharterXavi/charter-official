import React, {useEffect} from 'react'
import HeroImg from '../../images/hero-image.jpeg'
import ButtonPrimary from '../buttons/button-primary'
import './hero.css'
import AOS from "aos";
import "aos/dist/aos.css";

const HeroStrip = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <div className='Hero'>
            <div className='side-content content-width'>
                <svg class='homeIcon' xmlns="http://www.w3.org/2000/svg" width="48" height="54" viewBox="0 0 48 54" fill="none" data-aos='fade-up' data-aos-duration='600'>
                    <g filter="url(#filter1_d)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0403 0.621793C24.2519 -0.207265 22.93 -0.207264 22.1416 0.621793L2.55465 21.2195C1.34344 22.4932 2.24631 24.5977 4.00398 24.5977H5.3064V49.1676H42.3064V24.5977H43.1779C44.9355 24.5977 45.8384 22.4932 44.6272 21.2195L25.0403 0.621793Z" fill="url(#paint0_linear)"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6768 32.4044C34.0471 30.0243 33.8979 27.243 32.0891 25.5246C29.967 23.5086 26.3049 23.6627 23.5915 25.772C20.8781 23.6627 17.216 23.5086 15.0939 25.5246C13.2127 27.3117 13.1266 30.2484 14.6778 32.6878C14.6848 32.702 14.692 32.7161 14.6995 32.7303C15.9236 35.0561 18.297 37.9885 20.2877 40.2618C22.0853 42.3147 25.1995 42.3623 27.01 40.3208C28.8893 38.2016 31.1238 35.41 32.5341 32.7303C32.5927 32.619 32.6401 32.5103 32.6768 32.4044Z" fill="white"/>
                    <defs>
                    <filter id="filter1_d" x="0" y="0" width="47.1819" height="53.1676" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="2"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear" x1="4.31331" y1="49.1676" x2="56.38" y2="29.2002" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCE94"/>
                    <stop offset="1" stop-color="#F05F7E"/>
                    </linearGradient>
                    </defs>
                </svg>
                <h1 data-aos='fade-up' data-aos-duration='900'>
                    We're here for you.
                    <br></br>
                    We're there for you.  
                </h1>
                <p className='introduction-text' data-aos='fade-up' data-aos-duration='1000'>Throughout the many stages of post-accute care, we put YOU first.</p>
                <ButtonPrimary link='/about' content='Learn More' animation='fade-up' animationTime='1200' />
            </div>
            <div className='white-block'></div>
            <svg className='hero-wave-mobile-one' xmlns="http://www.w3.org/2000/svg" width="375" height="458" viewBox="0 0 375 458" fill="none">
                <g filter="url(#filter3_d)">
                <path d="M0 0H375V383.864C375 383.864 325 436.256 195.5 404.013C66 371.769 0 443 0 443V0Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter3_d" x="-15" y="-25" width="415" height="483" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="5" dy="-5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg className='hero-wave-mobile-two' xmlns="http://www.w3.org/2000/svg" width="375" height="525" viewBox="0 0 375 525" fill="none">
                <g filter="url(#filter4_d)">
                <path d="M0 0H375V452.93C375 452.93 340 488.728 199.5 458.637C59 428.545 0 510 0 510V0Z" fill="url(#paint4_linear)"/>
                </g>
                <defs>
                <filter id="filter4_d" x="-15" y="-25" width="415" height="550" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="5" dy="-5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint4_linear" x1="0" y1="510" x2="375" y2="510" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F493AA"/>
                <stop offset="1" stop-color="#F2D1C9"/>
                </linearGradient>
                </defs>
            </svg>
            <svg className='hero-wave-one' xmlns="http://www.w3.org/2000/svg" width="478" height="1000" viewBox="0 0 478 1000" fill="none">
                <g filter="url(#filter0_d)">
                <path d="M0 25H374C374 25 452.5 95 452.5 305.5C452.5 516 396.5 573 383 750.5C369.5 928 428.5 985 428.5 985H0V25Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d" x="-15" y="0" width="492.5" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="5" dy="-5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
            <svg className='hero-wave-two' xmlns="http://www.w3.org/2000/svg" width="1440" height="888" viewBox="0 0 1440 888" fill="none">
                <g filter="url(#filter2_d)">
                <path d="M0 25H1440V219C1440 219 1251.5 175 1098.5 248.5C945.5 322 920.5 531 758 615.5C595.5 700 464.5 698 314.5 723C164.5 748 0 873 0 873V25Z" fill="url(#paint2_linear)"/>
                </g>
                <defs>
                <filter id="filter2_d" x="-15" y="0" width="1480" height="888" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="5" dy="-5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint2_linear" x1="0" y1="873" x2="1440" y2="873" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F493AA"/>
                <stop offset="1" stop-color="#F2D1C9"/>
                </linearGradient>
                </defs>
            </svg>
            <img src={HeroImg} alt='Flowers on a pink background' />
        </div>
    );
};

export default HeroStrip