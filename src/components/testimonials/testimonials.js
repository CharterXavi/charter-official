import React, {useState} from 'react'
import './testimonials.css'
import Quotes from './quotes'
import Dot from '../testimonials/dot'
import ButtonPrimaryAlt from '../buttons/button-primary-alt'
import ArrowLeft from './arrow-left';
import ArrowRight from './arrow-right'

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
    const [listLength, setListLength] = useState(testimonialList.length);

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
        <div className='left'> 
            <h2>We're keeping our patients happy.</h2>
            <p className='introduction-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus diam vitae ut et tincidunt quis sem est, ligula. Aliquam venenatis ut dapibus neque leo. Purus aliquet suscipit turpis volutpat nisl porta elit diam. Et nunc nunc neque aliquet ultricies risus.</p>
            <ButtonPrimaryAlt content='Read more' animation='fade-up' animationTime='1000' />
        </div>
        <div className='right'>
            <div className='quote-container'>
                {/* Map through each location, create a card component and pass state values and methods in as props */}
                {/* {testimonials.map((quote, index) => {
                    if(index === activeIndex) {
                        return <Quote name={quote.name} id={quote.name} isActive={true} quote={quote.quote} />
                    }
                })} */}
                <Quotes activeIndex={activeIndex} data={testimonialList} />
            </div>
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
        </div>
        {
            props.svg ? <svg className='quote-wave-one' xmlns="http://www.w3.org/2000/svg" width="1440" height="428" viewBox="0 0 1440 428" fill="none">
            <g filter="url(#filter12_d)">
            <path d="M-2 395C-2 395 257 134.5 729.5 241C1202 347.5 1438 15 1438 15C1438 99.2057 1438 338.294 1438 422.5H688.5H-2V395Z" fill="url(#paint12_linear)"/>
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
            <linearGradient id="paint12_linear" x1="-2" y1="422.5" x2="1438" y2="422.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F493AA"/>
            <stop offset="1" stopColor="#F2D1C9"/>
            </linearGradient>
            </defs>
            </svg> 
            :
            ''
        } 
    </div>
  )
}

export default TestimonialsStrip;