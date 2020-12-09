import React from 'react';

const DataIcon = () => {

return (
  <svg width="54" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
    <g filter="url(#data)">
      <path d="M5 48H53" stroke="#363F55" strokeWidth="4.8" strokeLinecap="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M51.08 0.96C51.08 0.429807 50.6502 0 50.12 0H42.44C41.9098 0 41.48 0.429804 41.48 0.959997V43.2C41.48 43.7302 41.9098 44.16 42.44 44.16H50.12C50.6502 44.16 51.08 43.7302 51.08 43.2V0.96ZM29.96 14.4C29.96 13.8698 30.3898 13.44 30.92 13.44H38.6C39.1302 13.44 39.56 13.8698 39.56 14.4V43.2C39.56 43.7302 39.1302 44.16 38.6 44.16H30.92C30.3898 44.16 29.96 43.7302 29.96 43.2V14.4ZM28.04 24C28.04 23.4698 27.6102 23.04 27.08 23.04H19.4C18.8698 23.04 18.44 23.4698 18.44 24V43.2C18.44 43.7302 18.8698 44.16 19.4 44.16H27.08C27.6102 44.16 28.04 43.7302 28.04 43.2V24ZM16.52 29.76C16.52 29.2298 16.0902 28.8 15.56 28.8H7.88C7.34981 28.8 6.92 29.2298 6.92 29.76V43.2C6.92 43.7302 7.34981 44.16 7.88 44.16H15.56C16.0902 44.16 16.52 43.7302 16.52 43.2V29.76Z" fill="url(#data1)"/>
    </g>
    <defs>
      <filter id="data" x="0.600098" y="0" width="56.8" height="54.4001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="data1" x1="9.28564" y1="44.16" x2="60.582" y2="21.761" gradientUnits="userSpaceOnUse">
        <stop offset="0.109375" stopColor="#F14D70"/>
        <stop offset="0.317708" stopColor="#FF008A"/>
        <stop offset="0.520833" stopColor="#FF446C"/>
        <stop offset="0.869792" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default DataIcon;