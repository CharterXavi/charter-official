import React from 'react';

const GroupIcon = () => {

return (
  <svg width="50" height="51" viewBox="0 0 60 51" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
    <g filter="url(#group)">
      <path d="M41.2094 18.437C44.5733 11.7355 53.8887 11.7356 56.7351 18.4371C59.5814 25.1386 56.7351 37.3589 56.7351 37.3589H48.9723H41.2095C41.2095 37.3589 37.8455 25.1385 41.2094 18.437Z" fill="white"/>
      <ellipse cx="48.8573" cy="7.18442" rx="6.53063" ry="7.18442" fill="white"/>
      <path d="M3.49505 18.437C6.85892 11.7355 16.1744 11.7356 19.0207 18.4371C21.8671 25.1386 19.0207 37.359 19.0207 37.359H11.2579H3.49516C3.49516 37.359 0.131184 25.1385 3.49505 18.437Z" fill="#363F55"/>
        <ellipse cx="11.1429" cy="7.18442" rx="6.53063" ry="7.18442" fill="#363F55"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M33.502 17.2909C36.4903 15.8789 38.5721 12.715 38.5721 9.03846C38.5721 4.04666 34.7345 0 30.0006 0C25.2667 0 21.4292 4.04666 21.4292 9.03846C21.4292 12.8402 23.6551 16.0938 26.8076 17.429C24.0327 18.3088 21.5149 20.2308 19.9627 23.195C15.5476 31.6259 19.9629 47 19.9629 47H30.1515H40.3401C40.3401 47 44.076 31.626 40.3401 23.1951C38.9531 20.0648 36.3956 18.0967 33.502 17.2909Z" fill="url(#group1)"/>
    </g>
    <defs>
      <filter id="group" x="0" y="0" width="60.0001" height="51" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="group1" x1="19.2862" y1="47" x2="50.9081" y2="39.9491" gradientUnits="userSpaceOnUse">
        <stop offset="0.109375" stopColor="#F14D70"/>
        <stop offset="0.317708" stopColor="#FF008A"/>
        <stop offset="0.520833" stopColor="#FF446C"/>
        <stop offset="0.869792" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default GroupIcon;