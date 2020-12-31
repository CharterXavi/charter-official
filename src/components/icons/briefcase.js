import React from 'react';

const BriefcaseIcon = () => {

return (
  <svg fill="none" className="icon" viewBox="0 0 50 45" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#briefcase2)">
      <path d="m32.576 0.0018136c0.03-0.0010435 0.0601-0.0015695 0.0904-0.0015695 1.4114 0 2.5555 1.1442 2.5555 2.5556v5.8413c0 1.4114-1.1441 2.5555-2.5555 2.5555s-2.5556-1.1441-2.5556-2.5555v-2.9206h-10.222v2.9206c0 1.4114-1.1442 2.5555-2.5556 2.5555s-2.5555-1.1441-2.5555-2.5555v-5.6156c-2e-4 -0.01436-4e-4 -0.02875-4e-4 -0.04316s2e-4 -0.0288 4e-4 -0.04316v-0.1394c0-1.4114 1.1441-2.5556 2.5555-2.5556 0.0301 0 0.06 5.1864e-4 0.0898 0.0015475 0.0307-0.0010178 0.0615-0.0015308 0.0924-0.0015308h14.968c0.031 0 0.0619 5.1558e-4 0.0927 0.0015386z" fill="#363F55" clipRule="evenodd" fillRule="evenodd"/>
      <rect x="2.9127" y="9.127" width="44.175" height="31.032" rx=".9127" fill="url(#briefcase3)" stroke="#363F55" strokeWidth="1.8254"/>
      <rect x="3.6426" y="25.464" width="42.714" height="1.6429" fill="#363F55"/>
      <mask id="briefcase1" fill="white">
        <rect x="20.893" y="23" width="8.2143" height="7.3929" rx=".9127"/>
      </mask>
      <rect x="20.893" y="23" width="8.2143" height="7.3929" rx=".9127" fill="#fff" mask="url(#briefcase1)" stroke="#363F55" strokeWidth="3.65079"/>
    </g>
    <defs>
      <filter id="briefcase2" x=".1746" y="0" width="49.651" height="44.722" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="1.8254"/>
        <feGaussianBlur stdDeviation="0.912699"/>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="briefcase3" x1="4.4643" x2="50.778" y1="41.072" y2="12.759" gradientUnits="userSpaceOnUse">
        <stop offset=".10938" stopColor="#F14D70"/>
        <stop offset=".31771" stopColor="#FF008A"/>
        <stop offset=".52083" stopColor="#FF446C"/>
        <stop offset=".86979" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default BriefcaseIcon;