import React, {useState} from 'react'
import './testimonials.css'
import Quote from '../testimonials/quote'
import Dot from '../testimonials/dot'
import ButtonPrimaryAlt from '../buttons/button-primary-alt'

const TestimonialsStrip = () => {
    const [testimonials, setTestimonials] = useState(
        [
            {
                name: 'Johnny Appleseed',
                quote: 'Charter was there for me when I needed it most - they rock!',
                animationTime: '800',
                isActive: true
            },
            {
                name: 'Jane Doe',
                quote: 'Charter is the BEST!!',
                animationTime: '1100',
                isActive: false
            },
            {
                name: 'Jack Sparrow',
                quote: "Yooo hoooo yooo hooo, a pirate's life for me...",
                animationTime: '1500',
                isActive: false
            },
            {
                name: 'Granny Smith',
                quote: "I'm doing better than ever and it's all thanks to Charter.",
                animationTime: '2000',
                isActive: false
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
                {testimonials.map((quote) => {
                    return (
                        <div data-aos='fade-left' data-aos-delay='500' data-aos-duration={quote.animationTime}>
                            <Dot id={quote.name} isActive={quote.isActive} showQuote={showQuote} />
                        </div>
                    )
                })}
            </div>
        </div> 
    </div>
  )
}

export default TestimonialsStrip