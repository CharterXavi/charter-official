import React from 'react';

const AwardIcon = () => {

return (
  <svg width="44" height="54" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
    <g filter="url(#award)">
      <path d="M10.1098 44.2911L9.36437 44.9577L10.1098 44.2911C9.74499 43.8831 9.22886 43.6424 8.68178 43.6252L8.65035 44.6247L8.68178 43.6252L3.62768 43.4663L9.55791 30.7488L19.4105 35.3432L13.4803 48.0606L10.1098 44.2911Z" fill="white" stroke="#363F55" strokeWidth="2"/>
      <path d="M35.2838 43.6253L35.3152 44.6248L35.2838 43.6253C34.7367 43.6425 34.2206 43.8832 33.8557 44.2912L34.6012 44.9578L33.8557 44.2912L30.4852 48.0607L24.555 35.3433L34.4076 30.7489L40.3379 43.4664L35.2838 43.6253Z" fill="white" stroke="#363F55" strokeWidth="2"/>
      <circle cx="22.3068" cy="18.3874" r="17.3874" fill="url(#award1)" stroke="#363F55" strokeWidth="2"/>
      <path d="M22.3068 9.67161L23.8146 14.3121C24.0823 15.1361 24.8502 15.694 25.7167 15.694H30.596L26.6485 18.562C25.9476 19.0713 25.6542 19.974 25.922 20.7981L27.4298 25.4385L23.4824 22.5706C22.7814 22.0613 21.8322 22.0613 21.1312 22.5706L17.1838 25.4385L18.6916 20.7981C18.9593 19.974 18.666 19.0713 17.965 18.562L14.0176 15.694L18.8969 15.694C19.7633 15.694 20.5313 15.1361 20.799 14.3121L22.3068 9.67161Z" fill="white" stroke="#363F55" strokeWidth="2"/>
    </g>
    <defs>
      <filter id="award" x="0.626465" y="0" width="42.7124" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="award1" x1="5.88951" y1="36.7748" x2="48.6072" y2="18.1218" gradientUnits="userSpaceOnUse">
        <stop offset="0.109375" stopColor="#F14D70"/>
        <stop offset="0.317708" stopColor="#FF008A"/>
        <stop offset="0.520833" stopColor="#FF446C"/>
        <stop offset="0.869792" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default AwardIcon;