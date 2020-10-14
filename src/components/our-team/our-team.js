import React from 'react';
import './our-team.css';
import steve from '../../images/team/steve.png'
import sabina from '../../images/team/sabina.png'
import meagan from '../../images/team/meagan.png'
import jeanclaude from '../../images/team/jeanclaude.png'
import sylvie from '../../images/team/sylvie.png'
import vince from '../../images/team/vince.png'
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import {Link} from 'gatsby';

const OurTeamStrip = (props) => {
  return (
    <div className='OurTeamStrip'>
        <h2>Meet Our Executive Team</h2>
        <div className='card-container'>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={steve} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Steve Larkin</h4>
                    <p>Chief Executive Officer</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={sabina} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Sabina Del Rosario</h4>
                    <p>Chief Operating Officer</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={vince} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Vincent Castaldo</h4>
                    <p>Chief Financial Officer</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={jeanclaude} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Dr. Jean-Claude Hage</h4>
                    <p>Chief Medical Officer</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={sylvie} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Syvlie Boal</h4>
                    <p>Corporate Counsel, VP of Quality & Compliance</p>
                </div>
            </div>
            <div className='card'>
                <Link to='/our-team'>
                    <img src={meagan} alt="Team Member" />
                </Link>
                <div className='card-info'>
                    <h4>Meagan De Guzman</h4>
                    <p>VP of Human Resources</p>
                </div>
            </div>
        </div>
        <ButtonPrimaryAlt content='See Our Team' link='/our-team' />
        {
            props.svg && <svg className='team-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="521" viewBox="0 0 1440 521" fill="none">
                <g filter="url(#filter5_d)">
                <path d="M1 482.19C1 482.19 260 161.919 732.5 292.855C1205 423.791 1441 15 1441 15C1441 118.527 1441 412.473 1441 516H691.5H1V482.19Z" fill="#F6F7FB"/>
                </g>
                <defs>
                <filter id="filter5_d" x="-4" y="0" width="1460" height="521" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
        }
        {
            props.svg && <svg className='team-wave-mobile-one' xmlns="http://www.w3.org/2000/svg" width="375" height="396" viewBox="0 0 375 396" fill="none">
                <g filter="url(#filter7_d)">
                <path d="M0 135.205C0 135.205 60 33.0487 194.5 76.3878C329 119.727 375 25 375 25V381H0V135.205Z" fill="#F6F7FB"/>
                </g>
                <defs>
                <filter id="filter7_d" x="-15" y="0" width="415" height="396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="5" dy="-5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
        }
        {
            props.svg && <svg className='team-wave-mobile-two' xmlns="http://www.w3.org/2000/svg" width="375" height="675" viewBox="0 0 375 675" fill="none">
                <g filter="url(#filter6_d)">
                <path d="M0 153C0 153 88.5 85 192 103.5C295.5 122 375 25 375 25V675H0V153Z" fill="#F6F7FB"/>
                </g>
                <defs>
                <filter id="filter6_d" x="-15" y="0" width="415" height="690" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dx="5" dy="-5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect6_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow" result="shape"/>
                </filter>
                </defs>
            </svg>
        }
    </div>
  )
}

export default OurTeamStrip