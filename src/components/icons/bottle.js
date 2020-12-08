import React from 'react';

const BottleIcon = () => {

return (
  <svg width="41" height="54" viewBox="0 0 41 54" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
    <g filter="url(#bottle)">
      <rect x="5" y="8" width="30.8333" height="41.6667" rx="1.73099" fill="url(#bottle1)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.4572 21C17.8371 21 17.3344 21.5027 17.3344 22.1228V26.4053H13.1228C12.5027 26.4053 12 26.908 12 27.5281V30.6879C12 31.308 12.5027 31.8107 13.1228 31.8107H17.3344V36.0934C17.3344 36.7135 17.8371 37.2162 18.4572 37.2162H21.5449C22.165 37.2162 22.6677 36.7135 22.6677 36.0934V31.8107H26.8772C27.4973 31.8107 28 31.308 28 30.6879V27.5281C28 26.908 27.4973 26.4053 26.8772 26.4053H22.6677V22.1228C22.6677 21.5027 22.165 21 21.5449 21H18.4572Z" fill="white"/>
      <rect x="2" width="37" height="9.375" rx="0.865497" fill="#363F55"/>
    </g>
    <defs>
      <filter id="bottle" x="0.269006" y="0" width="40.462" height="53.462" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="1.73099"/>
        <feGaussianBlur stdDeviation="0.865497"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="bottle1" x1="6.65179" y1="49.6667" x2="45.2653" y2="37.1896" gradientUnits="userSpaceOnUse">
        <stop offset="0.109375" stopColor="#F14D70"/>
        <stop offset="0.317708" stopColor="#FF008A"/>
        <stop offset="0.520833" stopColor="#FF446C"/>
        <stop offset="0.869792" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>

  );
}

export default BottleIcon;