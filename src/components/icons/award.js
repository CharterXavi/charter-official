import React from 'react';

const AwardIcon = () => {

return (
  <svg fill="none" className="icon" viewBox="0 0 44 54" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#award1)" stroke="#363F55">
    <path d="m10.11 44.291-0.74543 0.6666 0.74543-0.6666c-0.36481-0.408-0.88094-0.6487-1.428-0.6659l-0.03143 0.9995 0.03143-0.9995-5.0541-0.1589 5.9302-12.718 9.8526 4.5944-5.9302 12.717-3.3705-3.7695z" fill="#fff" strokeWidth="2"/>
    <path d="m35.284 43.625 0.0314 0.9995-0.0314-0.9995c-0.5471 0.0172-1.0632 0.2579-1.4281 0.6659l0.7455 0.6666-0.7455-0.6666-3.3705 3.7695-5.9302-12.717 9.8526-4.5944 5.9303 12.718-5.0541 0.1589z" fill="#fff" strokeWidth="2"/>
    <circle cx="22.307" cy="18.387" r="17.387" fill="url(#award2)" strokeWidth="2"/>
    <path d="m22.307 9.6716 1.5078 4.6405c0.2677 0.824 1.0356 1.3819 1.9021 1.3819h4.8793l-3.9475 2.868c-0.7009 0.5093-0.9943 1.412-0.7265 2.2361l1.5078 4.6404-3.9474-2.8679c-0.701-0.5093-1.6502-0.5093-2.3512 0l-3.9474 2.8679 1.5078-4.6404c0.2677-0.8241-0.0256-1.7268-0.7266-2.2361l-3.9474-2.868h4.8793c0.8664 0 1.6344-0.5579 1.9021-1.3819l1.5078-4.6405z" fill="#fff" strokeWidth="2"/>
    </g>
    <defs>
      <filter id="award1" x=".62646" y="0" width="42.712" height="54" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="award2" x1="5.8895" x2="48.607" y1="36.775" y2="18.122" gradientUnits="userSpaceOnUse">
        <stop offset=".10938" stopColor="#F14D70"/>
        <stop offset=".31771" stopColor="#FF008A"/>
        <stop offset=".52083" stopColor="#FF446C"/>
        <stop offset=".86979" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default AwardIcon;