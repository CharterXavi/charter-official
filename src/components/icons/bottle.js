import React from 'react';

const BottleIcon = () => {

return (
  <svg fill="none" className="icon" viewBox="0 0 41 54" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#bottle1)">
      <rect x="5" y="8" width="30.833" height="41.667" rx="1.731" fill="url(#bottle2)"/>
      <path d="m18.457 21c-0.6201 0-1.1228 0.5027-1.1228 1.1228v4.2825h-4.2116c-0.6201 0-1.1228 0.5027-1.1228 1.1228v3.1598c0 0.6201 0.5027 1.1228 1.1228 1.1228h4.2116v4.2827c0 0.6201 0.5027 1.1228 1.1228 1.1228h3.0877c0.6201 0 1.1228-0.5027 1.1228-1.1228v-4.2827h4.2095c0.6201 0 1.1228-0.5027 1.1228-1.1228v-3.1598c0-0.6201-0.5027-1.1228-1.1228-1.1228h-4.2095v-4.2825c0-0.6201-0.5027-1.1228-1.1228-1.1228h-3.0877z" fill="#fff" clipRule="evenodd" fillRule="evenodd"/>
      <rect x="2" width="37" height="9.375" rx=".8655" fill="#363F55"/>
    </g>
    <defs>
      <filter id="bottle1" x=".26901" y="0" width="40.462" height="53.462" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="1.73099"/>
        <feGaussianBlur stdDeviation="0.865497"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="bottle2" x1="6.6518" x2="45.265" y1="49.667" y2="37.19" gradientUnits="userSpaceOnUse">
        <stop offset=".10938" stopColor="#F14D70"/>
        <stop offset=".31771" stopColor="#FF008A"/>
        <stop offset=".52083" stopColor="#FF446C"/>
        <stop offset=".86979" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default BottleIcon;