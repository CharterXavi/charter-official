import React from "react";
import './partners.css';
import covina from '../../images/covina.png';
import epic from '../../images/epic.png';
import valley from '../../images/valley.png';
import primecare from '../../images/primecare.png';
import iehp from '../../images/iehp.png';
import lomalinda from '../../images/lomalinda.png';
import lakeside from '../../images/lakeside.png';
import regal from '../../images/regal.png';

const Partners = () => {

  return (
    <div className='Partners'>
        <img src={covina} alt="Company Logo" />
        <img src={epic} alt="Company Logo" />
        <img src={valley} alt="Company Logo" />
        <img src={primecare} alt="Company Logo" />
        <img src={iehp} alt="Company Logo" />
        <img src={lomalinda} alt="Company Logo" />
        <img src={lakeside} alt="Company Logo" />
        <img src={regal} alt="Company Logo" />
        <svg className='partner-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="521" viewBox="0 0 1440 521" fill="none">
            <g filter="url(#filter28_d)">
            <path d="M1 482.19C1 482.19 260 161.919 732.5 292.855C1205 423.791 1441 15 1441 15C1441 118.527 1441 412.473 1441 516H691.5H1V482.19Z" fill="#F6F7FB"/>
            </g>
            <defs>
            <filter id="filter28_d" x="-4" y="0" width="1460" height="521" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
        </svg>
    </div>
  )
}

export default Partners;