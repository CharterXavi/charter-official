import React from 'react';
import './our-team.css';
import steve from '../../images/team/steve.png'
import sabina from '../../images/team/sabina.png'
import daniel from '../../images/team/daniel.png'
import jeanclaude from '../../images/team/jeanclaude.png'
import jerome from '../../images/team/jerome.png'
import vince from '../../images/team/vince.png'
import ButtonSecondary from '../buttons/button-secondary';
import {Link} from 'gatsby';

const OurTeamStrip = () => {
  return (
    <div className='OurTeamStrip'>
        <h2>Meet Our Team</h2>
        <div className='card-container'>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={steve} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Steve Larkin</h4>
                    <p className='introduction-text'>Chief Executive Officer</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={sabina} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Sabina Del Rosario</h4>
                    <p className='introduction-text'>Chief Operating Officer</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={vince} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Vincent Castaldo</h4>
                    <p className='introduction-text'>Chief Financial Officer</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={jeanclaude} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Dr. Jean-Claude Hage</h4>
                    <p className='introduction-text'>Chief Medical Officer</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={daniel} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Daniel Hodous</h4>
                    <p className='introduction-text'>Director of Information Technology</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={jerome} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Jerome De Jesus</h4>
                    <p className='introduction-text'>Director of Business Development</p>
                </div>
            </div>
        </div>
        <ButtonSecondary content='See Our Team' link='/our-team' />
        <svg className='team-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="770" viewBox="0 0 1440 770" fill="none">
            <g filter="url(#filter5_d)">
            <path d="M0 583C0 583 336.5 388 797 373.5C1257.5 359 1440 25 1440 25C1440 215.966 1440 564.034 1440 755H0V583Z" fill="url(#paint5_linear)"/>
            </g>
            <defs>
            <filter id="filter5_d" x="-15" y="0" width="1480" height="770" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint5_linear" x1="0" y1="755" x2="1440" y2="755" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F493AA"/>
            <stop offset="1" stop-color="#F2D1C9"/>
            </linearGradient>
            </defs>
        </svg>
        <svg className='team-wave-mobile-one' xmlns="http://www.w3.org/2000/svg" width="375" height="396" viewBox="0 0 375 396" fill="none">
            <g filter="url(#filter7_d)">
            <path d="M0 135.205C0 135.205 60 33.0487 194.5 76.3878C329 119.727 375 25 375 25V381H0V135.205Z" fill="url(#paint7_linear)"/>
            </g>
            <defs>
            <filter id="filter7_d" x="-15" y="0" width="415" height="396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint7_linear" x1="0" y1="381" x2="375" y2="381" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F493AA"/>
            <stop offset="1" stop-color="#F2D1C9"/>
            </linearGradient>
            </defs>
        </svg>
        <svg className='team-wave-mobile-two' xmlns="http://www.w3.org/2000/svg" width="375" height="675" viewBox="0 0 375 675" fill="none">
            <g filter="url(#filter6_d)">
            <path d="M0 153C0 153 88.5 85 192 103.5C295.5 122 375 25 375 25V675H0V153Z" fill="url(#paint6_linear)"/>
            </g>
            <defs>
            <filter id="filter6_d" x="-15" y="0" width="415" height="690" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect6_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint6_linear" x1="0" y1="675" x2="375" y2="675" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F493AA"/>
            <stop offset="1" stop-color="#F2D1C9"/>
            </linearGradient>
            </defs>
        </svg>
    </div>
  )
}

export default OurTeamStrip