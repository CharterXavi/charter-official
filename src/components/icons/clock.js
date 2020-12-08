import React from 'react';

const ClockIcon = () => {
    return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
        <g filter="url(#clock)">
            <circle cx="27" cy="25" r="24" fill="url(#clock1)" stroke="#363F55" strokeWidth="2"/>
            <path d="M24.8461 7C24.8461 6.44772 25.2938 6 25.8461 6H27.8461C28.3984 6 28.8461 6.44772 28.8461 7V30C28.8461 30.5523 28.3984 31 27.8461 31H25.8461C25.2938 31 24.8461 30.5523 24.8461 30V7Z" fill="#363F55"/>
            <path d="M34.4293 18.4992C34.9079 18.2235 35.5328 18.3799 35.8252 18.8484L36.8838 20.5453C37.1761 21.0138 37.0252 21.6172 36.5466 21.8928L23.9839 29.1295C23.5053 29.4052 22.8804 29.2488 22.588 28.7803L21.5294 27.0834C21.2371 26.6149 21.388 26.0115 21.8666 25.7359L34.4293 18.4992Z" fill="#363F55"/>
            <circle cx="27" cy="25" r="1" fill="white"/>
            <path d="M28 3C28 3.55228 27.5523 4 27 4C26.4477 4 26 3.55228 26 3C26 2.44772 26.4477 2 27 2C27.5523 2 28 2.44772 28 3Z" fill="white"/>
            <path d="M47 14C47 14.5523 46.5523 15 46 15C45.4477 15 45 14.5523 45 14C45 13.4477 45.4477 13 46 13C46.5523 13 47 13.4477 47 14Z" fill="white"/>
            <path d="M9 14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13C8.55228 13 9 13.4477 9 14Z" fill="white"/>
            <path d="M47 36C47 36.5523 46.5523 37 46 37C45.4477 37 45 36.5523 45 36C45 35.4477 45.4477 35 46 35C46.5523 35 47 35.4477 47 36Z" fill="white"/>
            <path d="M39 44C39 44.5523 38.5523 45 38 45C37.4477 45 37 44.5523 37 44C37 43.4477 37.4477 43 38 43C38.5523 43 39 43.4477 39 44Z" fill="white"/>
            <path d="M39 6C39 6.55228 38.5523 7 38 7C37.4477 7 37 6.55228 37 6C37 5.44772 37.4477 5 38 5C38.5523 5 39 5.44772 39 6Z" fill="white"/>
            <path d="M17 44C17 44.5523 16.5523 45 16 45C15.4477 45 15 44.5523 15 44C15 43.4477 15.4477 43 16 43C16.5523 43 17 43.4477 17 44Z" fill="white"/>
            <path d="M17 6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6C15 5.44772 15.4477 5 16 5C16.5523 5 17 5.44772 17 6Z" fill="white"/>
            <path d="M9 36C9 36.5523 8.55228 37 8 37C7.44772 37 7 36.5523 7 36C7 35.4477 7.44772 35 8 35C8.55228 35 9 35.4477 9 36Z" fill="white"/>
            <path d="M50 25C50 25.5523 49.5523 26 49 26C48.4477 26 48 25.5523 48 25C48 24.4477 48.4477 24 49 24C49.5523 24 50 24.4477 50 25Z" fill="white"/>
            <path d="M28 47C28 47.5523 27.5523 48 27 48C26.4477 48 26 47.5523 26 47C26 46.4477 26.4477 46 27 46C27.5523 46 28 46.4477 28 47Z" fill="white"/>
            <path d="M6 25C6 25.5523 5.55228 26 5 26C4.44772 26 4 25.5523 4 25C4 24.4477 4.44772 24 5 24C5.55228 24 6 24.4477 6 25Z" fill="white"/>
        </g>
        <defs>
            <filter id="clock" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="clock1" x1="4.67857" y1="50" x2="62.7587" y2="24.6388" gradientUnits="userSpaceOnUse">
            <stop offset="0.109375" stopColor="#F14D70"/>
            <stop offset="0.317708" stopColor="#FF008A"/>
            <stop offset="0.520833" stopColor="#FF446C"/>
            <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
    )
}

export default ClockIcon;