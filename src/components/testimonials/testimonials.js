import './testimonials.css';

import React, {useEffect, useState} from 'react';

import ArrowLeft from './arrow-left';
import ArrowRight from './arrow-right';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import Dot from '../testimonials/dot';
import LikeIcon from '../icons/like';
import Quotes from './quotes';

const TestimonialsStrip = (props) => {
    const testimonialList = [
        {
            name: 'Catherine Peterson',
            quote: 'The team we had at the house was the best ever. We looked forward to their visits as they were so caring and treated my mother like a queen. They were especially helpful to me as her caregiver.',
            animationTime: '800',
        },
        {
            name: 'Willeta Calloway',
            quote: 'Don’t know what I would have done without Cambridge/Charter Hospice. The service and support was amazing. Thank you so much.',
            animationTime: '1100',
        },
        {
            name: 'Harland Would',
            quote: "I am so grateful for Charter Healthcare. From the very beginning, through all the tough times, you were always available, kind and caring, then at my wife's passing, help for me was immediate, then continued contact. Blessings on you all!",
            animationTime: '1500',
        },
        {
            name: 'Clarence Parson',
            quote: "I appreciate the support I have received from Charter. You have been a blessing to me and my family. I cannot thank you enough for your kindness. Much love to all of you.",
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
    useEffect(() => {
        return function cleanUp() {
            clearInterval(rotate);
        }
    })
    //set an interval function to cycle to the next quote every 4.5 sec, this runs each rerender
    let rotate = setInterval(goToNext, 7000);
    //create a function that will clear the interval
    const resetAutoRotate = () => {
        clearInterval(rotate);
    }


  return (
    <div className='TestimonialsStrip'>
        <div className='two-column-left'>
            <div className='left'> 
                <LikeIcon />
                <h5>We're going above and beyond.</h5>
                <p>Feedback from our patients and their loved ones not only motivates us to keep working hard, but it also speaks volumes about our successes. See what others have to say about Charter!</p>
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