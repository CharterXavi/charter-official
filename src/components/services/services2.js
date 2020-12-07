import React, {useEffect} from 'react';
import './services2.css';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import charterCompass from '../../images/charter-compass-v6-navy.png';
// Data AOS for react imports
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesStrip2 = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });  

  return (
    <div className='ServicesStrip2'>
        <div className='title'>
            <h4>Our Services</h4>
            <hr/>
        </div>
        <div className='card-container'>
            <div className='card' data-aos='fade-up' data-aos-duration='600' >
                <svg xmlns="http://www.w3.org/2000/svg" width="52" viewBox="0 0 57 50" fill="none" className='icon'>
                    <g filter="url(#medkit)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7222 4.86655C16.7222 3.28333 18.0056 1.99988 19.5888 1.99988H19.7444C19.7496 1.99988 19.7549 1.99989 19.7601 1.99992H37.2402C37.2454 1.99989 37.2507 1.99988 37.256 1.99988H37.4115C38.9947 1.99988 40.2782 3.28333 40.2782 4.86655V10.5999C40.2782 12.1831 38.9947 13.4665 37.4115 13.4665H37.256C35.6727 13.4665 34.3893 12.1831 34.3893 10.5999V7.73325H22.6111V10.5999C22.6111 12.1831 21.3276 13.4665 19.7444 13.4665H19.5888C18.0056 13.4665 16.7222 12.1831 16.7222 10.5999V4.86655Z" fill="#363F55"/>
                    <rect x="2" y="10.5999" width="53" height="34.4" rx="1.91112" fill="url(#medkit1)"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M27.4673 20.1554C26.4118 20.1554 25.5562 21.011 25.5562 22.0665V24.9332H22.5596C21.5041 24.9332 20.6484 25.7888 20.6484 26.8443V28.7554C20.6484 29.8109 21.5041 30.6665 22.5596 30.6665H25.5562V33.5332C25.5562 34.5886 26.4118 35.4443 27.4673 35.4443H29.5339C30.5894 35.4443 31.445 34.5886 31.445 33.5332V30.6665H34.441C35.4965 30.6665 36.3521 29.8109 36.3521 28.7554V26.8443C36.3521 25.7888 35.4965 24.9332 34.441 24.9332H31.445V22.0665C31.445 21.011 30.5894 20.1554 29.5339 20.1554H27.4673Z" fill="white"/>
                    </g>
                    <defs>
                        <filter id="medkit" x="0.088884" y="1.99988" width="56.8222" height="46.8224" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="1.91112"/>
                            <feGaussianBlur stdDeviation="0.955558"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <linearGradient id="medkit1" x1="4.83929" y1="44.9999" x2="55.3029" y2="11.0501" gradientUnits="userSpaceOnUse">
                            <stop offset="0.109375" stopColor="#F14D70"/>
                            <stop offset="0.317708" stopColor="#FF008A"/>
                            <stop offset="0.520833" stopColor="#FF446C"/>
                            <stop offset="0.869792" stopColor="#FFB016"/>
                        </linearGradient>
                    </defs>
                </svg>
                <h6>Private Duty Home Care</h6>
                <p className='detail-text'>Private duty home care offers in-home support for day-to-day activities.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Hospice Page' link='/services/private-duty' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1000' >   
                <svg xmlns="http://www.w3.org/2000/svg" width="54" viewBox="0 0 54 57" fill="none" className='icon'>
                <g filter="url(#home)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M49.577 26L27.0317 2L4.48633 26H5.83332V53H48.73V26H49.577Z" fill="url(#home1)"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.3562 1.52831C27.5902 0.821779 26.4101 0.821781 25.6441 1.52831L2.64898 22.7391C1.31047 23.9737 2.18402 26.2092 4.005 26.2092H5.10587C5.12811 25.7856 5.30592 25.3613 5.6731 25.0226L25.8872 6.37704C26.5605 5.75595 27.5979 5.75595 28.2712 6.37704L48.4853 25.0226C48.8525 25.3613 49.0303 25.7856 49.0526 26.2092H49.9953C51.8163 26.2092 52.6898 23.9737 51.3513 22.7391L28.3562 1.52831Z" fill="#363F55"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M33.7413 37.9676C34.7286 36.258 34.6221 34.2592 33.3208 33.0245C31.7952 31.577 29.1624 31.6877 27.2118 33.2023C25.2611 31.6877 22.6284 31.5771 21.1028 33.0246C19.7514 34.3067 19.6886 36.4131 20.8013 38.1639C20.8069 38.1752 20.8127 38.1866 20.8187 38.1981C21.6996 39.8696 23.4084 41.9776 24.8403 43.6104C26.1309 45.0821 28.3643 45.1164 29.6642 43.6529C31.0161 42.1308 32.6249 40.1242 33.6399 38.1981C33.6814 38.1194 33.7151 38.0426 33.7413 37.9676Z" fill="white"/>
                </g>
                <defs>
                    <filter id="home" x="0" y="0.998413" width="54" height="56.0016" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <linearGradient id="home1" x1="6.9019" y1="53" x2="61.1768" y2="32.0465" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109375" stopColor="#F14D70"/>
                        <stop offset="0.317708" stopColor="#FF008A"/>
                        <stop offset="0.520833" stopColor="#FF446C"/>
                        <stop offset="0.869792" stopColor="#FFB016"/>
                    </linearGradient>
                </defs>
            </svg>
                <h6>Skilled Home Health</h6>
                <p className='detail-text'>We can deliver a range of services conveniently and privately at home.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Home Health Page' link='/services/home-health' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1400'>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" viewBox="0 0 54 54" fill="none" className='icon'>
                <g filter="url(#healthcare)">
                    <circle cx="27" cy="25" r="24" fill="url(#healthcare1)" stroke="#363F55" strokeWidth="2"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M32 12C32 10.8954 31.1046 10 30 10H24C22.8954 10 22 10.8954 22 12V18C22 19.1046 21.1046 20 20 20H14C12.8954 20 12 20.8954 12 22V28C12 29.1046 12.8954 30 14 30H20C21.1046 30 22 30.8954 22 32V38C22 39.1046 22.8954 40 24 40H30C31.1046 40 32 39.1046 32 38V32C32 30.8954 32.8954 30 34 30H40C41.1046 30 42 29.1046 42 28V22C42 20.8954 41.1046 20 40 20H34C32.8954 20 32 19.1046 32 18V12Z" fill="white"/>
                </g>
                <defs>
                    <filter id="healthcare" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <linearGradient id="healthcare1" x1="4.67857" y1="50" x2="62.7587" y2="24.6388" gradientUnits="userSpaceOnUse">
                        <stop offset="0.109375" stopColor="#F14D70"/>
                        <stop offset="0.317708" stopColor="#FF008A"/>
                        <stop offset="0.520833" stopColor="#FF446C"/>
                        <stop offset="0.869792" stopColor="#FFB016"/>
                    </linearGradient>
                </defs>
                </svg>
                <h6>Palliative Care</h6>
                <p className='detail-text'>Our Palliative team can help you / your loved ones cope with serious illnesses.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Palliative Care Page' link='/services/palliative-care' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='800' >
                <svg width="58" viewBox="0 0 58 67" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
                    <g filter="url(#ccm)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.04 25.56C16.04 24.6984 16.7384 24 17.6 24H25.4C26.2616 24 26.96 24.6984 26.96 25.56V27.2269C27.713 27.4795 28.4428 27.7828 29.1452 28.1329L30.3244 26.9537C30.9336 26.3445 31.9213 26.3445 32.5306 26.9537L38.046 32.4691C38.6552 33.0783 38.6552 34.0661 38.046 34.6753L36.8669 35.8544C37.2171 36.5569 37.5205 37.2868 37.7731 38.04H39.44C40.3016 38.04 41 38.7384 41 39.6V47.4C41 48.2616 40.3016 48.96 39.44 48.96H37.7731C37.5206 49.713 37.2172 50.4427 36.8671 51.1451L38.0467 52.3246C38.6559 52.9338 38.6559 53.9216 38.0467 54.5308L32.5312 60.0462C31.922 60.6554 30.9343 60.6554 30.3251 60.0462L29.1457 58.8668C28.4431 59.217 27.7132 59.5205 26.96 59.7731V61.44C26.96 62.3016 26.2616 63 25.4 63H17.6C16.7384 63 16.04 62.3016 16.04 61.44V59.7731C15.2868 59.5205 14.5569 59.2171 13.8544 58.8669L12.675 60.0463C12.0658 60.6555 11.0781 60.6555 10.4688 60.0463L4.9534 54.5308C4.34418 53.9216 4.34419 52.9339 4.9534 52.3247L6.13292 51.1452C5.78282 50.4428 5.47945 49.713 5.22689 48.96H3.56C2.69844 48.96 2 48.2616 2 47.4V39.6C2 38.7384 2.69844 38.04 3.56 38.04H5.2269C5.47952 37.2868 5.78297 36.5569 6.13318 35.8543L4.95406 34.6752C4.34485 34.066 4.34485 33.0783 4.95406 32.4691L10.4695 26.9536C11.0787 26.3444 12.0665 26.3444 12.6757 26.9536L13.8549 28.1329C14.5573 27.7828 15.287 27.4794 16.04 27.2269V25.56ZM21.5 49.74C24.9463 49.74 27.74 46.9463 27.74 43.5C27.74 40.0537 24.9463 37.26 21.5 37.26C18.0537 37.26 15.26 40.0537 15.26 43.5C15.26 46.9463 18.0537 49.74 21.5 49.74Z" fill="url(#ccm1)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M42.2 11.8C42.2 11.3582 42.5582 11 43 11H47C47.4418 11 47.8 11.3582 47.8 11.8V12.6549C48.1862 12.7844 48.5604 12.94 48.9206 13.1195L49.5255 12.5147C49.8379 12.2023 50.3444 12.2023 50.6568 12.5147L53.4853 15.3431C53.7977 15.6556 53.7977 16.1621 53.4853 16.4745L52.8804 17.0793C53.06 17.4395 53.2156 17.8138 53.3451 18.2H54.2C54.6418 18.2 55 18.5582 55 19V23C55 23.4418 54.6418 23.8 54.2 23.8H53.3451C53.2156 24.1862 53.06 24.5604 52.8805 24.9206L53.4853 25.5254C53.7977 25.8378 53.7977 26.3443 53.4853 26.6568L50.6568 29.4852C50.3444 29.7976 49.8379 29.7976 49.5255 29.4852L48.9208 28.8805C48.5605 29.06 48.1863 29.2157 47.8 29.3452V30.2C47.8 30.6418 47.4418 31 47 31H43C42.5582 31 42.2 30.6418 42.2 30.2V29.3453C41.8138 29.2157 41.4395 29.0601 41.0792 28.8805L40.4745 29.4853C40.1621 29.7977 39.6555 29.7977 39.3431 29.4853L36.5147 26.6568C36.2023 26.3444 36.2023 25.8379 36.5147 25.5255L37.1194 24.9207C36.9398 24.5605 36.7843 24.1862 36.6547 23.8H35.8C35.3582 23.8 35 23.4418 35 23V19C35 18.5582 35.3582 18.2 35.8 18.2H36.6548C36.7843 17.8137 36.9399 17.4394 37.1195 17.0792L36.5147 16.4744C36.2023 16.162 36.2023 15.6555 36.5147 15.343L39.3431 12.5146C39.6556 12.2022 40.1621 12.2022 40.4745 12.5146L41.0794 13.1195C41.4396 12.9399 41.8138 12.7844 42.2 12.6548V11.8ZM44.9999 24.2C46.7672 24.2 48.1999 22.7673 48.1999 21C48.1999 19.2327 46.7672 17.8 44.9999 17.8C43.2326 17.8 41.7999 19.2327 41.7999 21C41.7999 22.7673 43.2326 24.2 44.9999 24.2Z" fill="url(#ccm2)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M48.9601 36.44C48.9601 36.197 49.1571 36 49.4001 36H51.6001C51.8431 36 52.0401 36.197 52.0401 36.44V36.9101C52.2525 36.9813 52.4582 37.0669 52.6563 37.1656L52.9888 36.8331C53.1607 36.6612 53.4392 36.6612 53.6111 36.8331L55.1667 38.3887C55.3385 38.5605 55.3385 38.8391 55.1667 39.011L54.8343 39.3434C54.9331 39.5416 55.0187 39.7475 55.09 39.96H55.56C55.803 39.96 56 40.157 56 40.4V42.6C56 42.843 55.803 43.04 55.56 43.04H55.0899C55.0187 43.2524 54.9331 43.4582 54.8344 43.6563L55.167 43.9889C55.3388 44.1608 55.3388 44.4394 55.167 44.6112L53.6114 46.1668C53.4395 46.3387 53.1609 46.3387 52.9891 46.1668L52.6565 45.8342C52.4584 45.933 52.2525 46.0186 52.0401 46.0898V46.56C52.0401 46.803 51.8431 47 51.6001 47H49.4001C49.1571 47 48.9601 46.803 48.9601 46.56V46.0898C48.7476 46.0186 48.5417 45.9329 48.3435 45.8341L48.0108 46.1669C47.839 46.3387 47.5604 46.3387 47.3885 46.1669L45.8329 44.6112C45.6611 44.4394 45.6611 44.1608 45.8329 43.989L46.1657 43.6562C46.067 43.4581 45.9815 43.2524 45.9103 43.04H45.44C45.197 43.04 45 42.843 45 42.6V40.4C45 40.157 45.197 39.96 45.44 39.96H45.9102C45.9815 39.7476 46.0671 39.5417 46.1658 39.3436L45.8332 39.0109C45.6614 38.8391 45.6614 38.5605 45.8332 38.3887L47.3888 36.833C47.5607 36.6612 47.8393 36.6612 48.0111 36.833L48.3438 37.1657C48.5419 37.0669 48.7477 36.9814 48.9601 36.9101V36.44ZM50.4999 43.26C51.4719 43.26 52.2599 42.472 52.2599 41.5C52.2599 40.528 51.4719 39.74 50.4999 39.74C49.5279 39.74 48.7399 40.528 48.7399 41.5C48.7399 42.472 49.5279 43.26 50.4999 43.26Z" fill="#363F55"/>
                        <path d="M17 9.3L21.1378 14.0289C21.5395 14.488 22.2552 14.4835 22.6512 14.0193L32.05 3" stroke="#363F55" strokeWidth="5.6" strokeLinecap="round"/>
                    </g>
                    <defs>
                        <filter id="ccm" x="0" y="0.199951" width="58" height="66.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <linearGradient id="ccm1" x1="4.08929" y1="63" x2="49.3918" y2="43.2183" gradientUnits="userSpaceOnUse">
                            <stop offset="0.109375" stopColor="#F14D70"/>
                            <stop offset="0.317708" stopColor="#FF008A"/>
                            <stop offset="0.520833" stopColor="#FF446C"/>
                            <stop offset="0.869792" stopColor="#FFB016"/>
                        </linearGradient>
                        <linearGradient id="ccm2" x1="36.0714" y1="31" x2="59.3035" y2="20.8555" gradientUnits="userSpaceOnUse">
                            <stop offset="0.109375" stopColor="#F14D70"/>
                            <stop offset="0.317708" stopColor="#FF008A"/>
                            <stop offset="0.520833" stopColor="#FF446C"/>
                            <stop offset="0.869792" stopColor="#FFB016"/>
                        </linearGradient>
                    </defs>
                </svg>
                <h6>Complex Care Management</h6>
                <p className='detail-text'>C.C.M. is our comprehensive plan to keep patients out of the hospital.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to HARP Page' link='/services/ccm' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1200' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" viewBox="0 0 47 47" fill="none" className='icon'>
                    <g filter="url(#heart)">
                        <mask id="heart2" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M42.664 18.6332C45.5854 13.2946 45.268 7.05515 41.4133 3.20045C36.8916 -1.32132 29.0883 -0.975501 23.3069 3.75578C17.5254 -0.975497 9.72219 -1.32131 5.20043 3.20045C1.19098 7.20989 1.0086 13.7993 4.31717 19.2716C4.33123 19.3015 4.34578 19.3315 4.36081 19.3616C7.78391 26.2078 15.4253 35.3975 19.9048 40.5131C21.7684 42.6414 25.0039 42.696 26.9046 40.6007C31.1957 35.8703 38.3458 27.392 42.3608 19.3616C42.4852 19.1128 42.5859 18.8701 42.664 18.6332Z"/>
                        </mask>
                        <path fillRule="evenodd" clipRule="evenodd" d="M42.664 18.6332C45.5854 13.2946 45.268 7.05515 41.4133 3.20045C36.8916 -1.32132 29.0883 -0.975501 23.3069 3.75578C17.5254 -0.975497 9.72219 -1.32131 5.20043 3.20045C1.19098 7.20989 1.0086 13.7993 4.31717 19.2716C4.33123 19.3015 4.34578 19.3315 4.36081 19.3616C7.78391 26.2078 15.4253 35.3975 19.9048 40.5131C21.7684 42.6414 25.0039 42.696 26.9046 40.6007C31.1957 35.8703 38.3458 27.392 42.3608 19.3616C42.4852 19.1128 42.5859 18.8701 42.664 18.6332Z" fill="url(#heart1)"/>
                        <path d="M42.664 18.6332L40.9095 17.6732L40.8218 17.8335L40.7646 18.007L42.664 18.6332ZM41.4133 3.20045L42.8275 1.78623L42.8275 1.78623L41.4133 3.20045ZM23.3069 3.75578L22.0402 5.30356L23.3069 6.34012L24.5735 5.30356L23.3069 3.75578ZM5.20043 3.20045L6.61464 4.61466L6.61464 4.61466L5.20043 3.20045ZM4.31717 19.2716L6.1273 18.4211L6.0828 18.3264L6.02867 18.2368L4.31717 19.2716ZM4.36081 19.3616L2.57195 20.256L2.57196 20.256L4.36081 19.3616ZM19.9048 40.5131L18.4001 41.8306L18.4001 41.8306L19.9048 40.5131ZM26.9046 40.6007L28.3859 41.9444L28.3859 41.9444L26.9046 40.6007ZM42.3608 19.3616L40.5719 18.4672L40.5719 18.4672L42.3608 19.3616ZM44.4185 19.5933C47.6489 13.6899 47.4677 6.42636 42.8275 1.78623L39.9991 4.61466C43.0684 7.68393 43.5218 12.8993 40.9095 17.6732L44.4185 19.5933ZM42.8275 1.78623C37.3744 -3.66688 28.3709 -2.97272 22.0402 2.208L24.5735 5.30356C29.8057 1.02172 36.4087 1.02424 39.9991 4.61466L42.8275 1.78623ZM24.5735 2.208C18.2429 -2.97272 9.23932 -3.66687 3.78621 1.78624L6.61464 4.61466C10.2051 1.02425 16.808 1.02172 22.0402 5.30356L24.5735 2.208ZM3.78621 1.78624C-1.04227 6.61472 -1.04369 14.2705 2.60567 20.3064L6.02867 18.2368C3.06089 13.3282 3.42424 7.80507 6.61464 4.61466L3.78621 1.78624ZM2.50704 20.1222C2.52812 20.167 2.54976 20.2116 2.57195 20.256L6.14967 18.4672C6.14179 18.4514 6.13434 18.4361 6.1273 18.4211L2.50704 20.1222ZM2.57196 20.256C6.12729 27.3667 13.9421 36.7396 18.4001 41.8306L21.4095 39.1955C16.9086 34.0555 9.44053 25.0489 6.14967 18.4672L2.57196 20.256ZM18.4001 41.8306C21.0377 44.8428 25.6683 44.9403 28.3859 41.9444L25.4233 39.2569C24.3395 40.4517 22.4992 40.44 21.4095 39.1955L18.4001 41.8306ZM28.3859 41.9444C32.6924 37.1971 40.0038 28.5482 44.1497 20.256L40.5719 18.4672C36.6878 26.2359 29.699 34.5434 25.4233 39.2569L28.3859 41.9444ZM44.1497 20.256C44.3135 19.9283 44.4525 19.596 44.5634 19.2595L40.7646 18.007C40.7194 18.1441 40.6569 18.2973 40.5719 18.4672L44.1497 20.256Z" fill="#363F55" mask="url(#heart2)"/>
                    </g>
                    <defs>
                        <filter id="heart" x="0" y="0" width="46.6138" height="46.1412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <linearGradient id="heart1" x1="4.28288" y1="42.1412" x2="53.605" y2="20.3628" gradientUnits="userSpaceOnUse">
                            <stop offset="0.109375" stopColor="#F14D70"/>
                            <stop offset="0.317708" stopColor="#FF008A"/>
                            <stop offset="0.520833" stopColor="#FF446C"/>
                            <stop offset="0.869792" stopColor="#FFB016"/>
                        </linearGradient>
                    </defs>
                </svg>
                <h6>Hospice</h6>
                <p className='detail-text'>Hospice is a special way of caring for people who have a life limiting illness.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Hospice Page' link='/services/hospice' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1600' >
                <svg width="58" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
                    <g filter="url(#hospital)">
                        <rect x="3.01807" y="18.0852" width="54.9643" height="30.8511" rx="2" fill="#363F55"/>
                        <rect x="9.125" y="23.4043" width="4.07143" height="8.51064" rx="1" fill="white"/>
                        <rect x="9.125" y="36.1704" width="4.07143" height="8.51064" rx="1" fill="white"/>
                        <rect x="48.8218" y="23.4043" width="4.07142" height="8.51064" rx="1" fill="white"/>
                        <rect x="48.8218" y="36.1704" width="4.07142" height="8.51064" rx="1" fill="white"/>
                        <rect width="48.9362" height="26.46" rx="2" transform="matrix(0 -1 -1 0 44.46 48.9363)" fill="url(#hospital1)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M32.0201 4.25537C32.8485 4.25537 33.5201 4.92694 33.5201 5.75537V8.24473H35.8359C36.6644 8.24473 37.3359 8.91631 37.3359 9.74473V11.532C37.3359 12.3604 36.6644 13.032 35.8359 13.032H33.5201V15.5213C33.5201 16.3498 32.8485 17.0213 32.0201 17.0213H30.4405C29.612 17.0213 28.9405 16.3498 28.9405 15.5213V13.032H26.6236C25.7952 13.032 25.1236 12.3604 25.1236 11.532V9.74473C25.1236 8.9163 25.7952 8.24473 26.6236 8.24473H28.9405V5.75537C28.9405 4.92694 29.612 4.25537 30.4405 4.25537H32.0201Z" fill="white"/>
                        <rect width="8.14154" height="8.51064" rx="1" transform="matrix(-1 0 0 1 35.3008 40.4255)" fill="white"/>
                        <rect x="2" y="47.8723" width="57" height="2.12766" rx="1" fill="#363F55"/>
                    </g>
                    <defs>
                        <filter id="hospital" x="0" y="0" width="61" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <linearGradient id="hospital1" x1="2.62158" y1="26.46" x2="43.5876" y2="-6.62302" gradientUnits="userSpaceOnUse">
                            <stop offset="0.109375" stopColor="#F14D70"/>
                            <stop offset="0.317708" stopColor="#FF008A"/>
                            <stop offset="0.520833" stopColor="#FF446C"/>
                            <stop offset="0.869792" stopColor="#FFB016"/>
                        </linearGradient>
                    </defs>
                </svg>
                <h6>Acute / Hopsital-Based Care</h6>
                <p className='detail-text'>We offer Acute/Hospital-based care in times of emergency.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to HARP Page' link='/services/acute-care' />
            </div>
        </div>
        <img src={charterCompass} alt="Compass" className='compass-one' />
    
    </div>
  )
}

export default ServicesStrip2