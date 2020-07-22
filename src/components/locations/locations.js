import React from 'react'
import './locations.css'
import homeIcon from '../../images/home-icon.png'


//TODO - MAKE CARDS EXPANDABLE ON MOBILE

const LocationsStrip = () => {
  return (
    <div className='LocationsStrip'>
        <svg className='locations-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="522" viewBox="0 0 1440 522" fill="none">
            <g filter="url(#filter8_d)">
            <path d="M0 1H1440V83.5C1440 83.5 1284.5 369 783 340C281.5 311 0 503 0 503V1Z" fill="url(#paint8_linear)"/>
            </g>
            <defs>
            <filter id="filter8_d" x="-10" y="0" width="1460" height="522" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="9"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint8_linear" x1="0" y1="503" x2="1440" y2="503" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F493AA"/>
            <stop offset="1" stop-color="#F2D1C9"/>
            </linearGradient>
            </defs>
        </svg>
        <svg className='locations-wave-mobile' xmlns="http://www.w3.org/2000/svg" width="375" height="463" viewBox="0 0 375 463" fill="none">
            <g filter="url(#filter9_d)">
            <path d="M0 0H375V381.5C375 381.5 335.099 437.158 204.5 396.223C73.901 355.288 0 444 0 444V0Z" fill="url(#paint9_linear)"/>
            </g>
            <defs>
            <filter id="filter9_d" x="-10" y="-1" width="395" height="464" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="9"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint9_linear" x1="0" y1="444" x2="375" y2="444" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F493AA"/>
            <stop offset="1" stop-color="#F2D1C9"/>
            </linearGradient>
            </defs>
        </svg>
        <div className='left'> 
        <img src={homeIcon} alt='Home Icon'/>
            <h2>Our Locations</h2>
            <div className='card-container'>
                <div className='card'>
                    <h5>Inland Empire</h5>
                    <p>1012 East Cooley Drive, Suite G, Colton CA 92324</p>
                    <p>P: 909-825-2969</p>
                    <p>F: 909-825-8751</p>
                </div>
                <div className='card'>
                    <h5>Inland Empire</h5>
                    <p>1012 East Cooley Drive, Suite G, Colton CA 92324</p>
                    <p>P: 909-825-2969</p>
                    <p>F: 909-825-8751</p>
                </div>
                <div className='card'>
                    <h5>Inland Empire</h5>
                    <p>1012 East Cooley Drive, Suite G, Colton CA 92324</p>
                    <p>P: 909-825-2969</p>
                    <p>F: 909-825-8751</p>
                </div>
                <div className='card'>
                    <h5>Inland Empire</h5>
                    <p>1012 East Cooley Drive, Suite G, Colton CA 92324</p>
                    <p>P: 909-825-2969</p>
                    <p>F: 909-825-8751</p>
                </div>
                <div className='card'>
                    <h5>Inland Empire</h5>
                    <p>1012 East Cooley Drive, Suite G, Colton CA 92324</p>
                    <p>P: 909-825-2969</p>
                    <p>F: 909-825-8751</p>
                </div>
            </div>
        </div>
        <div className='right'>
            <h3>MAP</h3>
        </div> 
    </div>
  )
}

export default LocationsStrip