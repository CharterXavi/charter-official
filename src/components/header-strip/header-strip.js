import React, {useEffect} from 'react';
import './header-strip.css';
import featherImage from '../../images/headers/feather.png';
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderStrip = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HeaderStrip'>
        <svg className='wave' xmlns="http://www.w3.org/2000/svg" width="363" height="490" viewBox="0 0 363 490" fill="none">
            <g filter="url(#filter0_d)">
            <path d="M15 25H304.013C304.013 25 227.543 113.196 304.013 229.454C380.484 345.713 304.013 475 304.013 475H15V25Z" fill="url(#paint0_linear)"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="363" height="490" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear" x1="15" y1="475" x2="338" y2="475" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F493AA"/>
            <stop offset="1" stop-color="#F2D1C9"/>
            </linearGradient>
            </defs>
        </svg>
        <img src={featherImage} alt="Feather Logo" className='feather' data-aos='fade-right' data-aos-duration='1500'/>
        <img src={props.image} alt="Group of Nurses" className='image' />
        <h1 data-aos='fade-right' data-aos-duration='800'>{props.title}</h1>
        <h2 data-aos='fade-right' data-aos-duration='1000'>{props.headline}</h2>
    </div>
  );
}

export default HeaderStrip;