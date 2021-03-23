import React from 'react';

const HouseIcon = () => {

return (
  <svg className='icon' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.61331 34.7207V21.643H32.3881V34.7207H7.61331ZM20.0005 8.47243L32.0492 21.0842H7.9519L20.0005 8.47243Z" fill="url(#house)" stroke="url(#house1)" strokeWidth="0.558579"/>
    <path d="M16.6665 26.5717C16.6665 25.9547 17.1667 25.4545 17.7837 25.4545H22.216C22.833 25.4545 23.3332 25.9547 23.3332 26.5717V34.9999H16.6665V26.5717Z" fill="white"/>
    <path d="M30.0328 5C29.6466 5 29.3335 5.29398 29.3335 5.65663V16.5909H32.6668V5.65664C32.6668 5.29399 32.3537 5 31.9675 5H30.0328Z" fill="white"/>
    <path d="M32.6668 16.5909L30.6667 16.591V17.9546H32.6667L32.6668 16.5909Z" fill="white"/>
    <path d="M5 21.3635L19.5963 6.10376C19.8163 5.87379 20.1837 5.87379 20.4037 6.10376L35 21.3635" stroke="#282E3E" strokeWidth="3.5" strokeLinecap="round"/>
    <defs>
      <linearGradient id="house" x1="8.65973" y1="35" x2="38.6989" y2="22.6276" gradientUnits="userSpaceOnUse">
        <stop offset="0.109375" stopColor="#F14D70"/>
        <stop offset="0.317708" stopColor="#FF008A"/>
        <stop offset="0.520833" stopColor="#FF446C"/>
        <stop offset="0.869792" stopColor="#FFB016"/>
      </linearGradient>
      <linearGradient id="house1" x1="8.65973" y1="35" x2="38.6989" y2="22.6276" gradientUnits="userSpaceOnUse">
        <stop offset="0.109375" stopColor="#F14D70"/>
        <stop offset="0.317708" stopColor="#FF008A"/>
        <stop offset="0.520833" stopColor="#FF446C"/>
        <stop offset="0.869792" stopColor="#FFB016"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

export default HouseIcon;