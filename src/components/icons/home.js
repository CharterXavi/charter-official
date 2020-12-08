import React from 'react';

const HomeIcon = () => {

return (
  <svg xmlns="http://www.w3.org/2000/svg" width="54" viewBox="0 0 54 57" fill="none" className='icon'>
    <g filter="url(#home)">
        <path fillRule="evenodd" clipRule="evenodd" d="M49.577 26L27.0317 2L4.48633 26H5.83332V53H48.73V26H49.577Z" fill="url(#home1)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M28.3562 1.52831C27.5902 0.821779 26.4101 0.821781 25.6441 1.52831L2.64898 22.7391C1.31047 23.9737 2.18402 26.2092 4.005 26.2092H5.10587C5.12811 25.7856 5.30592 25.3613 5.6731 25.0226L25.8872 6.37704C26.5605 5.75595 27.5979 5.75595 28.2712 6.37704L48.4853 25.0226C48.8525 25.3613 49.0303 25.7856 49.0526 26.2092H49.9953C51.8163 26.2092 52.6898 23.9737 51.3513 22.7391L28.3562 1.52831Z" fill="#363F55"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M33.7413 37.9676C34.7286 36.258 34.6221 34.2592 33.3208 33.0245C31.7952 31.577 29.1624 31.6877 27.2118 33.2023C25.2611 31.6877 22.6284 31.5771 21.1028 33.0246C19.7514 34.3067 19.6886 36.4131 20.8013 38.1639C20.8069 38.1752 20.8127 38.1866 20.8187 38.1981C21.6996 39.8696 23.4084 41.9776 24.8403 43.6104C26.1309 45.0821 28.3643 45.1164 29.6642 43.6529C31.0161 42.1308 32.6249 40.1242 33.6399 38.1981C33.6814 38.1194 33.7151 38.0426 33.7413 37.9676Z" fill="white"/>
    </g>
    <defs>
        <filter id="home" x="0" y="0.998413" width="54" height="56.0016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <linearGradient id="home1" x1="6.9019" y1="53" x2="61.1768" y2="32.0465" gradientUnits="userSpaceOnUse">
            <stop offset="0.109375" stopColor="#F14D70"/>
            <stop offset="0.317708" stopColor="#FF008A"/>
            <stop offset="0.520833" stopColor="#FF446C"/>
            <stop offset="0.869792" stopColor="#FFB016"/>
        </linearGradient>
    </defs>
  </svg>
  );
}

export default HomeIcon;