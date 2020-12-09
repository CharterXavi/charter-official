import React from 'react';

const HealthcareIcon = () => {

return (
    <svg xmlns="http://www.w3.org/2000/svg" width="54" viewBox="0 0 54 54" fill="none" className='icon'>
        <g filter="url(#healthcare)">
            <circle cx="27" cy="25" r="24" fill="url(#healthcare1)" stroke="#363F55" strokeWidth="2"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M32 12C32 10.8954 31.1046 10 30 10H24C22.8954 10 22 10.8954 22 12V18C22 19.1046 21.1046 20 20 20H14C12.8954 20 12 20.8954 12 22V28C12 29.1046 12.8954 30 14 30H20C21.1046 30 22 30.8954 22 32V38C22 39.1046 22.8954 40 24 40H30C31.1046 40 32 39.1046 32 38V32C32 30.8954 32.8954 30 34 30H40C41.1046 30 42 29.1046 42 28V22C42 20.8954 41.1046 20 40 20H34C32.8954 20 32 19.1046 32 18V12Z" fill="white"/>
        </g>
        <defs>
            <filter id="healthcare" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="healthcare1" x1="4.67857" y1="50" x2="62.7587" y2="24.6388" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
  );
}

export default HealthcareIcon;