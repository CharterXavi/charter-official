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
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" width="363" height="490" viewBox="0 0 338 470" fill="none">
        <g filter="url(#filter0_d)">
        <path d="M0 15H289.013C289.013 15 212.543 103.196 289.013 219.454C365.484 335.713 289.013 465 289.013 465H0V15Z" fill="#363F55"/>
        </g>
        <defs>
        <filter id="filter0_d" x="-5" y="0" width="343" height="470" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="5" dy="-5"/>
        <feGaussianBlur stdDeviation="5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
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