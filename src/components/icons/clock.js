import React from 'react';

const ClockIcon = () => {
    return (
    <svg fill="none" className="icon" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg" width='54' height='54'>
        <g filter="url(#clock1)">
            <circle cx="27" cy="25" r="24" fill="url(#clock2)" stroke="#363F55" strokeWidth="2"/>
            <path d="m24.846 7c0-0.55228 0.4477-1 1-1h2c0.5523 0 1 0.44772 1 1v23c0 0.5523-0.4477 1-1 1h-2c-0.5523 0-1-0.4477-1-1v-23z" fill="#363F55"/>
            <path d="m34.429 18.499c0.4786-0.2757 1.1035-0.1193 1.3959 0.3492l1.0586 1.6969c0.2923 0.4685 0.1414 1.0719-0.3372 1.3475l-12.563 7.2367c-0.4786 0.2757-1.1035 0.1193-1.3959-0.3492l-1.0586-1.6969c-0.2923-0.4685-0.1414-1.0719 0.3372-1.3475l12.563-7.2367z" fill="#363F55"/>
            <circle cx="27" cy="25" r="1" fill="#fff"/>
            <path d="m28 3c0 0.55228-0.4477 1-1 1s-1-0.44772-1-1 0.4477-1 1-1 1 0.44772 1 1z" fill="#fff"/>
            <path d="m47 14c0 0.5523-0.4477 1-1 1s-1-0.4477-1-1 0.4477-1 1-1 1 0.4477 1 1z" fill="#fff"/>
            <path d="m9 14c0 0.5523-0.44772 1-1 1s-1-0.4477-1-1 0.44772-1 1-1 1 0.4477 1 1z" fill="#fff"/>
            <path d="m47 36c0 0.5523-0.4477 1-1 1s-1-0.4477-1-1 0.4477-1 1-1 1 0.4477 1 1z" fill="#fff"/>
            <path d="m39 44c0 0.5523-0.4477 1-1 1s-1-0.4477-1-1 0.4477-1 1-1 1 0.4477 1 1z" fill="#fff"/>
            <path d="m39 6c0 0.55228-0.4477 1-1 1s-1-0.44772-1-1 0.4477-1 1-1 1 0.44772 1 1z" fill="#fff"/>
            <path d="m17 44c0 0.5523-0.4477 1-1 1s-1-0.4477-1-1 0.4477-1 1-1 1 0.4477 1 1z" fill="#fff"/>
            <path d="m17 6c0 0.55228-0.4477 1-1 1s-1-0.44772-1-1 0.4477-1 1-1 1 0.44772 1 1z" fill="#fff"/>
            <path d="m9 36c0 0.5523-0.44772 1-1 1s-1-0.4477-1-1 0.44772-1 1-1 1 0.4477 1 1z" fill="#fff"/>
            <path d="m50 25c0 0.5523-0.4477 1-1 1s-1-0.4477-1-1 0.4477-1 1-1 1 0.4477 1 1z" fill="#fff"/>
            <path d="m28 47c0 0.5523-0.4477 1-1 1s-1-0.4477-1-1 0.4477-1 1-1 1 0.4477 1 1z" fill="#fff"/>
            <path d="m6 25c0 0.5523-0.44772 1-1 1s-1-0.4477-1-1 0.44772-1 1-1 1 0.4477 1 1z" fill="#fff"/>
        </g>
        <defs>
            <filter id="clock1" x="0" y="0" width="54" height="54" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="clock2" x1="4.6786" x2="62.759" y1="50" y2="24.639" gradientUnits="userSpaceOnUse">
                <stop offset=".10938" stopColor="#F14D70"/>
                <stop offset=".31771" stopColor="#FF008A"/>
                <stop offset=".52083" stopColor="#FF446C"/>
                <stop offset=".86979" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
    )
}

export default ClockIcon;