import React from 'react';

const PlusSign = () => {
    return (
    <svg className='icon PlusSign' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7C22 5.89543 21.1046 5 20 5C18.8954 5 18 5.89543 18 7V15.5C18 16.8807 16.8807 18 15.5 18H7C5.89543 18 5 18.8954 5 20C5 21.1046 5.89543 22 7 22H15.5C16.8807 22 18 23.1193 18 24.5V33C18 34.1046 18.8954 35 20 35C21.1046 35 22 34.1046 22 33V24.5C22 23.1193 23.1193 22 24.5 22H33C34.1046 22 35 21.1046 35 20C35 18.8954 34.1046 18 33 18H24.5C23.1193 18 22 16.8807 22 15.5V7Z" fill="url(#plusSign)"/>
        <defs>
            <linearGradient id="plusSign" x1="6.60714" y1="35" x2="41.4552" y2="19.7833" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
            </linearGradient>
        </defs>
    </svg>
    );
}

export default PlusSign;