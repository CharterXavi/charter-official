import React, {useState, useEffect} from 'react'
import './testimonials.css'
import Quote from '../testimonials/quote'
import Dot from '../testimonials/dot'
import ButtonPrimaryAlt from '../buttons/button-primary-alt'
import ArrowLeft from './arrow-left';
import ArrowRight from './arrow-right'

const TestimonialsStrip = (props) => {
    const [testimonials, setTestimonials] = useState(
        [
            {
                name: 'Johnny Appleseed',
                quote: 'Charter was there for me when I needed it most - they rock!',
                animationTime: '800',
                isActive: true,
                count: 0
            },
            {
                name: 'Jane Doe',
                quote: 'Charter is the BEST!!',
                animationTime: '1100',
                isActive: false,
                count: 1
            },
            {
                name: 'Jack Sparrow',
                quote: "Yooo hoooo yooo hooo, a pirate's life for me...",
                animationTime: '1500',
                isActive: false,
                count: 2
            },
            {
                name: 'Granny Smith',
                quote: "I'm doing better than ever and it's all thanks to Charter.",
                animationTime: '2000',
                isActive: false,
                count: 3
            },
        ]
    )
    
    //Method that will be passed down as a prop to handle state management and expand cards / animate clickers
    //ID passed down as a prop to child button - which invokes this function and passes its ID when clicked
    const showQuote = (id) => {
        //create a new list from old list, but update whichever child was clicked on
        const newList = testimonials.map((quote) => {
            if(quote.name === id) {
                const activeTestimonial = {
                    //state is updated, component rerenders, and new props are passed down to children
                    ...quote,
                    isActive: !quote.isActive
                }
                //must return so .map can enter it into new array list
                return activeTestimonial;
            };
            if (quote.name !== id) {
                const inactiveTestimonial = {
                    //state is updated, component rerenders, and new props are passed down to children
                    ...quote,
                    isActive: false
                }
                //must return so .map can enter it into new array list
                return inactiveTestimonial;
            }
            //must return so .map can enter it into new array list
            return quote;
        });
        //use setState method to update state
        setTestimonials(newList);
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrev = () => {
        let index = activeIndex;
        let length = testimonials.length;
        if(index < 1) {
            index = length - 1;
        } else {
            index--;
        };
        setActiveIndex(index);
        testimonials.map(quote => {
            if(quote.count === index && !quote.isActive) {
                showQuote(quote.name);
            };
        });
    }
    const goToNext = () => {
        let index = activeIndex;
        let length = testimonials.length;
        if(index === length - 1) {
            index = 0;
        }
        else {
            index++;
        };
        setActiveIndex(index);
        testimonials.map(quote => {
            if(quote.count === index && !quote.isActive) {
                showQuote(quote.name);
            };
        });
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
                {testimonials.map((quote) => {
                    if(quote.isActive) {
                        return <Quote name={quote.name} id={quote.name} isActive={quote.isActive} quote={quote.quote} />
                    }
                })}
            </div>
            <div className='carousel-control'>
                <ArrowLeft goToPrev={goToPrev} />
                {testimonials.map((quote) => {
                    return (
                        <div data-aos='fade-left' data-aos-duration={quote.animationTime}>
                            <Dot id={quote.name} isActive={quote.isActive} showQuote={showQuote} />
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
            <filter id="filter12_d" x="-7" y="0" width="1460" height="427.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint12_linear" x1="-2" y1="422.5" x2="1438" y2="422.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F493AA"/>
            <stop offset="1" stop-color="#F2D1C9"/>
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