import React from 'react';

const PillIcon = () => {

return (
  <svg width="56" height="50" viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
    <g filter="url(#pill)">
      <path d="M28 14H43C48.5228 14 53 18.4772 53 24C53 29.5228 48.5228 34 43 34H28V14Z" fill="#363F55"/>
      <path d="M25 16H43C47.4183 16 51 19.5817 51 24C51 28.4183 47.4183 32 43 32H25V16Z" fill="white"/>
      <path d="M28 33H13C8.02944 33 4 28.9706 4 24C4 19.0294 8.02944 15 13 15H28L28 33Z" fill="url(#pill1)" stroke="#363F55" strokeWidth="2"/>
      <path d="M9.6412 17.7342C11.3021 17.1402 11.8433 17.4175 12.0109 17.8863C12.1786 18.355 11.9092 18.8376 10.2483 19.4316C7.57509 20.3877 7.48424 23.1868 7.3166 22.7181C7.14895 22.2493 6.72822 19.0736 9.6412 17.7342Z" fill="white"/>
    </g>
    <defs>
      <filter id="pill" x="1" y="14" width="54" height="24" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="pill1" x1="27.6071" y1="14" x2="0.410527" y2="29.4383" gradientUnits="userSpaceOnUse">
        <stop offset="0.109375" stopColor="#F14D70"/>
        <stop offset="0.317708" stopColor="#FF008A"/>
        <stop offset="0.520833" stopColor="#FF446C"/>
        <stop offset="0.869792" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default PillIcon;