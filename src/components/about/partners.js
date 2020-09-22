import React from "react";
import './partners.css';
import covina from '../../images/covina.png';
import epic from '../../images/epic.png';
import valley from '../../images/valley.png';
import primecare from '../../images/primecare.png';
import iehp from '../../images/iehp.png';
import lomalinda from '../../images/lomalinda.png';
import lakeside from '../../images/lakeside.png';
import regal from '../../images/regal.png';

const Partners = () => {

  return (
    <div className='Partners'>
        <img src={covina} alt="Company Logo" />
        <img src={epic} alt="Company Logo" />
        <img src={valley} alt="Company Logo" />
        <img src={primecare} alt="Company Logo" />
        <img src={iehp} alt="Company Logo" />
        <img src={lomalinda} alt="Company Logo" />
        <img src={lakeside} alt="Company Logo" />
        <img src={regal} alt="Company Logo" />
        <svg className='partner-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="428" viewBox="0 0 1440 428" fill="none">
            <g filter="url(#filter28_d)">
            <path d="M-2 395C-2 395 257 134.5 729.5 241C1202 347.5 1438 15 1438 15C1438 99.2057 1438 338.294 1438 422.5H688.5H-2V395Z" fill="url(#paint28_linear)"/>
            </g>
            <defs>
            <filter id="filter28_d" x="-7" y="0" width="1460" height="427.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint28_linear" x1="-2" y1="422.5" x2="1438" y2="422.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F493AA"/>
            <stop offset="1" stopColor="#F2D1C9"/>
            </linearGradient>
            </defs>
        </svg> 
    </div>
  )
}

export default Partners;