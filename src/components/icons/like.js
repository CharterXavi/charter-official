import React from 'react';

const LikeIcon = () => {

return (
    <svg className='icon' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.3906 32.4004C20.2064 32.6828 19.7926 32.6828 19.6084 32.4004L16.1404 27.0838C15.9378 26.7732 16.1607 26.3617 16.5315 26.3617H23.4675C23.8384 26.3617 24.0612 26.7732 23.8586 27.0838L20.3906 32.4004Z" fill="#282E3E"/>
        <mask id="like" fill="white">
        <rect x="5" y="7" width="30" height="19.9149" rx="0.933915"/>
        </mask>
        <rect x="5" y="7" width="30" height="19.9149" rx="0.933915" fill="url(#like1)" stroke="#282E3E" strokeWidth="2.12057" mask="url(#like)"/>
        <path d="M24.2565 15.0145L25.0399 14.535V19.1124H24.0631C23.8109 19.1124 23.585 19.1642 23.42 19.3015C23.2481 19.4447 23.1767 19.6514 23.1767 19.8835C23.1767 20.1206 23.2465 20.3322 23.4172 20.4798C23.5824 20.6227 23.8095 20.677 24.0631 20.677H27.8799C28.1305 20.677 28.3552 20.6224 28.5186 20.4788C28.6868 20.3308 28.755 20.1196 28.755 19.8835C28.755 19.6524 28.6852 19.446 28.5157 19.3026C28.3525 19.1644 28.1289 19.1124 27.8799 19.1124H26.8918V13.2155C26.8918 12.9517 26.8155 12.7202 26.6416 12.547C26.4705 12.3766 26.2477 12.2983 25.9941 12.2983C25.7461 12.2983 25.4967 12.3807 25.2491 12.5287L25.2491 12.5287L25.2467 12.5301L23.4969 13.6093C23.4968 13.6093 23.4968 13.6093 23.4967 13.6094C23.2464 13.7628 23.1089 13.9931 23.1089 14.2837C23.1089 14.4945 23.1775 14.6869 23.3089 14.8551L23.3088 14.8552L23.3131 14.8603C23.4587 15.0344 23.6475 15.1335 23.8711 15.1335C24.0005 15.1335 24.1288 15.0872 24.2511 15.0177L24.2512 15.0177L24.2565 15.0145ZM11.6433 13.572C10.7238 14.4407 10.7011 15.8434 11.421 16.9779C11.4236 16.983 11.4262 16.988 11.4289 16.993C11.9852 18.0443 13.0553 19.3566 13.9402 20.3616C14.8151 21.3551 16.3357 21.3811 17.2209 20.3886C18.0595 19.4483 19.0662 18.1995 19.7047 16.993C19.7313 16.9427 19.7541 16.8924 19.7727 16.8421C20.4075 15.7341 20.3513 14.4062 19.4684 13.5721C18.4675 12.6265 16.8037 12.69 15.5559 13.5791C14.3081 12.6899 12.6442 12.6264 11.6433 13.572Z" fill="white" stroke="#282E3E" strokeWidth="0.395118"/>
        <defs>
            <linearGradient id="like1" x1="6.60714" y1="26.9149" x2="35.5686" y2="7.8644" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>    
  );
}

export default LikeIcon;