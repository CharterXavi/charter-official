import React from 'react';

const StethoscopeIcon = () => {

return (
    <svg width="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
        <g filter="url(#stetho)">
            <circle cx="32" cy="30" r="29" fill="url(#stetho1)" stroke="#363F55" strokeWidth="2"/>
            <path d="M27.7969 8.39999C16.7068 23.1554 26.0004 28.2 26.0004 28.2M26.0004 28.2C26.0004 28.2 34.1334 33.1253 43.6392 17.9711M26.0004 28.2C26.0004 28.2 12.1989 41.4 20.5998 48.6C29.0008 55.8 47.6003 39.9048 47.6003 39.9048" stroke="white" strokeWidth="2"/>
            <ellipse cx="28.4" cy="7.19999" rx="2.4" ry="2.4" fill="#363F55"/>
            <ellipse cx="49.3997" cy="39" rx="4.2" ry="4.2" fill="#363F55"/>
            <ellipse cx="44.0001" cy="16.8" rx="2.4" ry="2.4" fill="#363F55"/>
            <ellipse cx="49.3999" cy="39" rx="3" ry="3" fill="white"/>
        </g>
        <defs>
            <filter id="stetho" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="stetho1" x1="5.21429" y1="60" x2="74.9105" y2="29.5666" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
  );
}

export default StethoscopeIcon;
