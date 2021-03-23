import React from 'react';

const HeartIcon = () => {

return (
    <svg className='icon' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.29334 18.3978L7.27727 18.3632L7.25769 18.3305C5.05144 14.6429 5.24585 10.343 7.77248 7.79039C10.6145 4.91909 15.6654 5.03573 19.5344 8.23447L20 8.61946L20.4656 8.23447C24.3346 5.03574 29.3855 4.91909 32.2275 7.79039C34.6576 10.2455 34.9307 14.3125 32.9846 17.9053L32.953 17.9636L32.9324 18.0265C32.8893 18.1587 32.8321 18.2987 32.7589 18.4468C29.9683 24.0857 24.9641 30.0788 21.9529 33.429C20.928 34.5693 19.2068 34.5466 18.1906 33.375C15.0341 29.7354 9.68749 23.2369 7.31681 18.4468C7.30866 18.4303 7.30084 18.414 7.29334 18.3978Z" fill="url(#heart)" stroke="#282E3E" strokeWidth="1.46154"/>
        <defs>
            <linearGradient id="heart" x1="6.60714" y1="35" x2="41.4552" y2="19.7833" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>    
  );
}

export default HeartIcon;