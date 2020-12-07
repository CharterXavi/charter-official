import React, {useState} from 'react';
import './testimonials.css';
import Quotes from './quotes';
import Dot from '../testimonials/dot';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import ArrowLeft from './arrow-left';
import ArrowRight from './arrow-right';

const TestimonialsStrip = (props) => {
    const testimonialList = [
        {
            name: 'Johnny Appleseed',
            quote: 'Charter was there for me when I needed it most - they rock!',
            animationTime: '800',
        },
        {
            name: 'Jane Doe',
            quote: 'Charter is the BEST!!',
            animationTime: '1100',
        },
        {
            name: 'Jack Sparrow',
            quote: "Yooo hoooo yooo hooo, a pirate's life for me...",
            animationTime: '1500',
        },
        {
            name: 'Granny Smith',
            quote: "I'm doing better than ever and it's all thanks to Charter.",
            animationTime: '2000',
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const [listLength] = useState(testimonialList.length);

    const goToPrev = () => {
        resetAutoRotate(); //clear the current quote cycling interval loop before initiating rerender of component
        let index = activeIndex;
        let length = listLength;
        if(index < 1) {
            index = length - 1;
        } else {
            index--;
        };
        setActiveIndex(index); //initiate state change and rerender of component
    }

    const goToNext = () => {
        resetAutoRotate(); //clear the current quote cycling interval loop before initiating rerender of component
        let index = activeIndex;
        let length = listLength;
        if(index === length - 1) {
            index = 0;
        }
        else {
            index++;
        };
        setActiveIndex(index); //initiate state change and rerender of component
    }

    //set an interval function to cycle to the next quote every 4.5 sec, this runs each rerender
    let rotate = setInterval(goToNext, 4500);
    //create a function that will clear the interval
    const resetAutoRotate = () => {
        clearInterval(rotate);
    }


  return (
    <div className='TestimonialsStrip'>
        <div className='two-column-left'>
            <div className='left'> 
                <svg width="58" viewBox="0 0 58 51" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
                    <g filter="url(#like)">
                        <path d="M29.7387 45.8627C29.3914 46.3974 28.6086 46.3974 28.2613 45.8627L22.0895 36.3606C21.7089 35.7746 22.1294 35 22.8282 35H35.1718C35.8706 35 36.2911 35.7746 35.9105 36.3606L29.7387 45.8627Z" fill="#363F55"/>
                        <mask id="like2" fill="white">
                            <rect x="2" width="54" height="36" rx="1.76163"/>
                        </mask>
                        <rect x="2" width="54" height="36" rx="1.76163" fill="url(#like1)" stroke="#363F55" strokeWidth="4" mask="url(#like2)"/>
                        <path d="M36.6606 14.5066L36.6607 14.5068L36.6709 14.5005L38.0544 13.6502V21.88H36.3131C35.857 21.88 35.4456 21.974 35.1442 22.2259C34.83 22.4886 34.7006 22.8671 34.7006 23.2893C34.7006 23.7206 34.8271 24.1078 35.1388 24.3786C35.4405 24.6407 35.8542 24.7393 36.3131 24.7393H43.1835C43.6369 24.7393 44.0465 24.6402 44.3449 24.3766C44.6521 24.1052 44.7757 23.7187 44.7757 23.2893C44.7757 22.8691 44.6493 22.4912 44.3395 22.2279C44.0414 21.9745 43.634 21.88 43.1835 21.88H41.4219V11.2357C41.4219 10.7562 41.2838 10.3335 40.9672 10.0169C40.6554 9.70509 40.2497 9.56216 39.789 9.56216C39.3384 9.56216 38.8863 9.71255 38.4386 9.98114L38.4386 9.98111L38.4341 9.98388L35.2845 11.9347C35.2843 11.9348 35.2842 11.9348 35.284 11.9349C34.8288 12.2152 34.5786 12.6364 34.5786 13.1667C34.5786 13.5509 34.7031 13.9018 34.9417 14.2086L34.9415 14.2087L34.9496 14.2184C35.2144 14.5361 35.5588 14.7183 35.9676 14.7183C36.2048 14.7183 36.4391 14.6332 36.6606 14.5066ZM13.9452 11.8695C12.2836 13.4459 12.2441 15.989 13.5423 18.0441C13.5468 18.0531 13.5515 18.062 13.5562 18.071L13.8859 17.8973L13.5562 18.071C14.5586 19.9731 16.4858 22.3466 18.0787 24.1633C19.6601 25.9668 22.4101 26.0144 24.0105 24.2123C25.5203 22.5122 27.3332 20.2536 28.4834 18.071C28.5315 17.9798 28.5725 17.8887 28.6062 17.7975C29.7506 15.7906 29.6503 13.3831 28.0551 11.8696C26.2484 10.1555 23.2501 10.2697 21.0002 11.8733C18.7504 10.2696 15.7519 10.1553 13.9452 11.8695Z" fill="white" stroke="#363F55" strokeWidth="0.745305"/>
                    </g>
                    <defs>
                        <filter id="like" x="0" y="0" width="58" height="51.0001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <linearGradient id="like1" x1="4.89286" y1="36" x2="57.1576" y2="1.76732" gradientUnits="userSpaceOnUse">
                            <stop offset="0.109375" stopColor="#F14D70"/>
                            <stop offset="0.317708" stopColor="#FF008A"/>
                            <stop offset="0.520833" stopColor="#FF446C"/>
                            <stop offset="0.869792" stopColor="#FFB016"/>
                        </linearGradient>
                    </defs>
                </svg>
                <h5>We're keeping our patients happy.</h5>
                <p>Feedback from our patients and their loved ones not only motivates us to keep working hard, but it also speaks volumes about our successes. See for yourself what others have to say about Charter!</p>
                <div data-aos='fade-up' data-aos-duration='1000' >
                    <ButtonPrimaryAlt content='See testimonials' link='/about/testimonials' />
                </div>  
            </div>
            <div className='right'>
                <div className='carousel-control'>
                    <ArrowLeft goToPrev={goToPrev} />
                    {testimonialList.map((quote, index) => {
                        return (
                            <div data-aos='fade-left' data-aos-duration={quote.animationTime} key={quote.name} >
                                <Dot 
                                    isCurrentQuote={index === activeIndex ? true : false} 
                                />
                            </div>
                        )
                    })}
                    <ArrowRight goToNext={goToNext} />
                </div>
                <div className='quote-container'>
                    {/* Map through each location, create a card component and pass state values and methods in as props */}
                    {/* {testimonials.map((quote, index) => {
                        if(index === activeIndex) {
                            return <Quote name={quote.name} id={quote.name} isActive={true} quote={quote.quote} />
                        }
                    })} */}
                    <Quotes activeIndex={activeIndex} data={testimonialList} />
                </div>
            </div>
        </div>
        {
            props.svg && <svg className='quote-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="428" viewBox="0 0 1440 428" fill="none">
            <g filter="url(#filter12_d)">
            <path d="M-2 395C-2 395 257 134.5 729.5 241C1202 347.5 1438 15 1438 15C1438 99.2057 1438 338.294 1438 422.5H688.5H-2V395Z" fill="#f6f7fb"/>
            </g>
            <defs>
            <filter id="filter12_d" x="-7" y="0" width="1460" height="427.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
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
    </div>
  )
}

export default TestimonialsStrip;