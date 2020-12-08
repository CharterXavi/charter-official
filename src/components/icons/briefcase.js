import React from 'react';

const BriefcaseIcon = () => {

return (
  <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
    <g filter="url(#briefcase)">
      <path fillRule="evenodd" clipRule="evenodd" d="M32.5764 0.00181364C32.6064 0.000770188 32.6365 0.000244141 32.6668 0.000244141C34.0782 0.000244141 35.2223 1.14441 35.2223 2.5558V8.39707C35.2223 9.80847 34.0782 10.9526 32.6668 10.9526C31.2554 10.9526 30.1112 9.80846 30.1112 8.39707V5.47647H19.8888V8.39709C19.8888 9.80848 18.7446 10.9526 17.3332 10.9526C15.9218 10.9526 14.7777 9.80848 14.7777 8.39708V2.78153C14.7775 2.76717 14.7773 2.75278 14.7773 2.73837C14.7773 2.72396 14.7775 2.70957 14.7777 2.69521V2.55581C14.7777 1.14442 15.9218 0.000258287 17.3332 0.000258287C17.3633 0.000258287 17.3932 0.000776929 17.423 0.00180575C17.4537 0.000787927 17.4845 0.000274994 17.5154 0.000274994H32.4837C32.5147 0.000274994 32.5456 0.000790577 32.5764 0.00181364Z" fill="#363F55"/>
      <rect x="2.9127" y="9.12705" width="44.1746" height="31.0317" rx="0.912699" fill="url(#briefcase1)" stroke="#363F55" strokeWidth="1.8254"/>
      <rect x="3.64258" y="25.4644" width="42.7143" height="1.64286" fill="#363F55"/>
      <mask id="briefcase2" fill="white">
        <rect x="20.8931" y="23" width="8.21429" height="7.39286" rx="0.912699"/>
      </mask>
      <rect x="20.8931" y="23" width="8.21429" height="7.39286" rx="0.912699" fill="white" stroke="#363F55" stroke-width="3.65079" mask="url(#briefcase2)"/>
    </g>
    <defs>
      <filter id="briefcase" x="0.174603" y="0" width="49.6508" height="44.7223" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="1.8254"/>
        <feGaussianBlur stdDeviation="0.912699"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="briefcase1" x1="4.46429" y1="41.0715" x2="50.7782" y2="12.7589" gradientUnits="userSpaceOnUse">
        <stop offset="0.109375" stopColor="#F14D70"/>
        <stop offset="0.317708" stopColor="#FF008A"/>
        <stop offset="0.520833" stopColor="#FF446C"/>
        <stop offset="0.869792" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>

  );
}

export default BriefcaseIcon;