import React, {useEffect} from 'react';
import './header-strip2.css';
import AOS from "aos";
import "aos/dist/aos.css";
import charterCompass from '../../images/charter-compass-v6-white.webp';

const HeaderStrip2 = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HeaderStrip2'>
      <img src={charterCompass} alt="Compass" className='logo'/>
      <div className='header-content'>
        <h1 data-aos='fade-right' data-aos-duration='800'>{props.title}</h1>
        <h5 data-aos='fade-right' data-aos-duration='1000'>{props.headline}</h5>
      </div>
      <img src={props.image} alt="header" className='header-image' />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 199" fill="none" className='header-wave'>
        <g filter="url(#filter0_d)">
        <path d="M-1 35.9684C-1 35.9684 248.444 -30.983 794.556 109.296C1340.67 249.575 1599 35.9684 1599 35.9684V189H-1V35.9684Z" fill="#F6F7FB"/>
        </g>
        <defs>
        <filter id="filter0_d" x="-16" y="0" width="1630" height="199" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
}

export default HeaderStrip2;