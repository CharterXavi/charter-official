import React from 'react';

const MedkitIcon = () => {

return (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" viewBox="0 0 57 50" fill="none" className='icon'>
    <g filter="url(#medkit)">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.7222 4.86655C16.7222 3.28333 18.0056 1.99988 19.5888 1.99988H19.7444C19.7496 1.99988 19.7549 1.99989 19.7601 1.99992H37.2402C37.2454 1.99989 37.2507 1.99988 37.256 1.99988H37.4115C38.9947 1.99988 40.2782 3.28333 40.2782 4.86655V10.5999C40.2782 12.1831 38.9947 13.4665 37.4115 13.4665H37.256C35.6727 13.4665 34.3893 12.1831 34.3893 10.5999V7.73325H22.6111V10.5999C22.6111 12.1831 21.3276 13.4665 19.7444 13.4665H19.5888C18.0056 13.4665 16.7222 12.1831 16.7222 10.5999V4.86655Z" fill="#363F55"/>
        <rect x="2" y="10.5999" width="53" height="34.4" rx="1.91112" fill="url(#medkit1)"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M27.4673 20.1554C26.4118 20.1554 25.5562 21.011 25.5562 22.0665V24.9332H22.5596C21.5041 24.9332 20.6484 25.7888 20.6484 26.8443V28.7554C20.6484 29.8109 21.5041 30.6665 22.5596 30.6665H25.5562V33.5332C25.5562 34.5886 26.4118 35.4443 27.4673 35.4443H29.5339C30.5894 35.4443 31.445 34.5886 31.445 33.5332V30.6665H34.441C35.4965 30.6665 36.3521 29.8109 36.3521 28.7554V26.8443C36.3521 25.7888 35.4965 24.9332 34.441 24.9332H31.445V22.0665C31.445 21.011 30.5894 20.1554 29.5339 20.1554H27.4673Z" fill="white"/>
    </g>
    <defs>
        <filter id="medkit" x="0.088884" y="1.99988" width="56.8222" height="46.8224" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="1.91112"/>
            <feGaussianBlur stdDeviation="0.955558"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <linearGradient id="medkit1" x1="4.83929" y1="44.9999" x2="55.3029" y2="11.0501" gradientUnits="userSpaceOnUse">
            <stop offset="0.109375" stopColor="#F14D70"/>
            <stop offset="0.317708" stopColor="#FF008A"/>
            <stop offset="0.520833" stopColor="#FF446C"/>
            <stop offset="0.869792" stopColor="#FFB016"/>
        </linearGradient>
    </defs>
  </svg>
  );
}

export default MedkitIcon;