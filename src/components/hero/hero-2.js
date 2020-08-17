import React, {useEffect} from 'react';
import iconBlast from '../../images/icon-blast.png';
import doctorGraphic from '../../images/doctor-graphic.png';
import ButtonPrimary from '../buttons/button-primary';
import './hero-2.css';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroStrip2 = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <div className='Hero2'>
            <svg className='hero-wave-left' xmlns="http://www.w3.org/2000/svg" width="442" height="663" viewBox="0 0 442 663" fill="none">
                <g filter="url(#filter20_d)">
                <path d="M0 6.14358C0 6.14358 165.5 -2.85595 179.5 121.644C193.5 246.144 281 259.644 255.5 419.144C230 578.644 431 656.144 431 656.144H0V6.14358Z" fill="url(#paint20_linear)"/>
                </g>
                <defs>
                <filter id="filter20_d" x="-1" y="0" width="443" height="662.144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="5"/>
                <feGaussianBlur stdDeviation="3"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint20_linear" x1="0" y1="656.144" x2="431" y2="656.144" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F493AA"/>
                <stop offset="1" stop-color="#F2D1C9"/>
                </linearGradient>
                </defs>
            </svg>
            <svg className='hero-wave-right' xmlns="http://www.w3.org/2000/svg" width="442" height="663" viewBox="0 0 442 663" fill="none">
                <g filter="url(#filter21_d)">
                <path d="M442 6.14355C442 6.14355 244 38.1436 265 172.144C286 306.144 126.5 365.644 126.5 497.144C126.5 628.644 11 656.144 11 656.144H442V6.14355Z" fill="url(#paint21_linear)"/>
                </g>
                <defs>
                <filter id="filter21_d" x="0" y="0.143555" width="443" height="662" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="-5"/>
                <feGaussianBlur stdDeviation="3"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint21_linear" x1="442" y1="656.144" x2="11" y2="656.144" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F493AA"/>
                <stop offset="1" stop-color="#F2D1C9"/>
                </linearGradient>
                </defs>
            </svg>
            <img className='icon-blast' src={iconBlast} alt="Healthcare icons floating around" />
            <img className='doctor-graphic' src={doctorGraphic} alt="Doctor at a desk" />
            <div className='hero-content'>
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
        </div>
    );
};

export default HeroStrip2