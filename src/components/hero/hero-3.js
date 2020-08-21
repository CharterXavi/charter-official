import React, {useEffect} from 'react';
import iconBlast from '../../images/icon-blast.png';
import doctorGraphic from '../../images/doctor-graphic.png';
import ButtonPrimary from '../buttons/button-primary';
import charterFeather from '../../images/charter-feather.png';
import './hero-3.css';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroStrip3 = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <div className='Hero3'>
            <div className='hero-wrapper'>
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
                <div data-aos='fade-left' data-aos-duration='1500' className='icon-blast-wrapper'>
                    <img className='icon-blast' src={iconBlast} alt="Healthcare icons floating around" />
                </div>
                <img className='doctor-graphic' src={doctorGraphic} alt="Doctor at a desk" />
                <div className='hero-content'>
                    <img src={charterFeather} alt="Feather logo" data-aos='fade-right' data-aos-duration='1500'/>
                    <h1>Charter Healthcare Group</h1>
                    <h2 data-aos='fade-up' data-aos-duration='900'>
                        We're here for you.
                        <br></br>
                        We're there for you.  
                    </h2>
                    <ButtonPrimary link='/about' content='Learn More' animation='fade-up' animationTime='1200' />
                </div>
            </div>
        </div>
    );
};

export default HeroStrip3