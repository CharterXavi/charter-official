import React from 'react';

const HospitalIcon = () => {

return (
  <svg width="58" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
    <g filter="url(#hospital)">
        <rect x="3.01807" y="18.0852" width="54.9643" height="30.8511" rx="2" fill="#363F55"/>
        <rect x="9.125" y="23.4043" width="4.07143" height="8.51064" rx="1" fill="white"/>
        <rect x="9.125" y="36.1704" width="4.07143" height="8.51064" rx="1" fill="white"/>
        <rect x="48.8218" y="23.4043" width="4.07142" height="8.51064" rx="1" fill="white"/>
        <rect x="48.8218" y="36.1704" width="4.07142" height="8.51064" rx="1" fill="white"/>
        <rect width="48.9362" height="26.46" rx="2" transform="matrix(0 -1 -1 0 44.46 48.9363)" fill="url(#hospital1)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M32.0201 4.25537C32.8485 4.25537 33.5201 4.92694 33.5201 5.75537V8.24473H35.8359C36.6644 8.24473 37.3359 8.91631 37.3359 9.74473V11.532C37.3359 12.3604 36.6644 13.032 35.8359 13.032H33.5201V15.5213C33.5201 16.3498 32.8485 17.0213 32.0201 17.0213H30.4405C29.612 17.0213 28.9405 16.3498 28.9405 15.5213V13.032H26.6236C25.7952 13.032 25.1236 12.3604 25.1236 11.532V9.74473C25.1236 8.9163 25.7952 8.24473 26.6236 8.24473H28.9405V5.75537C28.9405 4.92694 29.612 4.25537 30.4405 4.25537H32.0201Z" fill="white"/>
        <rect width="8.14154" height="8.51064" rx="1" transform="matrix(-1 0 0 1 35.3008 40.4255)" fill="white"/>
        <rect x="2" y="47.8723" width="57" height="2.12766" rx="1" fill="#363F55"/>
    </g>
    <defs>
        <filter id="hospital" x="0" y="0" width="61" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <linearGradient id="hospital1" x1="2.62158" y1="26.46" x2="43.5876" y2="-6.62302" gradientUnits="userSpaceOnUse">
            <stop offset="0.109375" stopColor="#F14D70"/>
            <stop offset="0.317708" stopColor="#FF008A"/>
            <stop offset="0.520833" stopColor="#FF446C"/>
            <stop offset="0.869792" stopColor="#FFB016"/>
        </linearGradient>
    </defs>
  </svg>
  );
}

export default HospitalIcon;