import React from 'react'
import './data.css'
import ButtonPrimaryAlt from '../buttons/button-primary-alt'
import Chart from './chart'

const DataStrip = () => {

    // //Method that will be passed down as a prop to handle state management and expand cards / animate clickers
    // //ID passed down as a prop to child button - which invokes this function and passes its ID when clicked
    // const showQuote = (id) => {
    //     //create a new list from old list, but update whichever child was clicked on
    //     const newList = testimonials.map((quote) => {
    //         if(quote.name === id) {
    //             const activeTestimonial = {
    //                 //state is updated, component rerenders, and new props are passed down to children
    //                 ...quote,
    //                 isActive: !quote.isActive
    //             }
    //             //must return so .map can enter it into new array list
    //             return activeTestimonial;
    //         };
    //         if (quote.name !== id) {
    //             const inactiveTestimonial = {
    //                 //state is updated, component rerenders, and new props are passed down to children
    //                 ...quote,
    //                 isActive: false
    //             }
    //             //must return so .map can enter it into new array list
    //             return inactiveTestimonial;
    //         }
    //         //must return so .map can enter it into new array list
    //         return quote;
    //     });
    //     //use setState method to update state
    //     setTestimonials(newList);
    // }


  return (
    <div className='DataStrip'>
        <div className='left'>
            <Chart />
        </div>
        <div className='right'> 
            <h2>We're making a real impact.</h2>
            <p className='introduction-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus diam vitae ut et tincidunt quis sem est, ligula. Aliquam venenatis ut dapibus neque leo. Purus aliquet suscipit turpis volutpat nisl porta elit diam. Et nunc nunc neque aliquet ultricies risus.</p>
            <ButtonPrimaryAlt content='Read more' />
        </div>
    </div>
  )
}

export default DataStrip