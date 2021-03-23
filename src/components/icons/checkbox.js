import React from 'react';

const CheckboxIcon = () => {

return (
    <svg className='icon' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.375 6.08C5.375 5.69064 5.69064 5.375 6.08 5.375H33.92C34.3094 5.375 34.625 5.69064 34.625 6.08V33.92C34.625 34.3094 34.3094 34.625 33.92 34.625H6.08C5.69064 34.625 5.375 34.3094 5.375 33.92V6.08ZM10.5344 9.42488C9.92168 9.42488 9.42498 9.92157 9.42498 10.5343V29.4655C9.42498 30.0782 9.92167 30.5749 10.5344 30.5749H29.4656C30.0783 30.5749 30.575 30.0782 30.575 29.4655V10.5343C30.575 9.92158 30.0783 9.42488 29.4656 9.42488H10.5344Z" fill="url(#checkbox)" stroke="white" stroke-width="0.75"/>
        <path d="M13.5713 20.6857L17.1833 24.8137C17.4932 25.1679 18.0453 25.1644 18.3508 24.8063L26.4713 15.2857" stroke="#282E3E" strokeWidth="4.32" strokeLinecap="round"/>
        <defs>
            <linearGradient id="checkbox" x1="6.60714" y1="35" x2="41.4552" y2="19.7833" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
  );
}

export default CheckboxIcon;