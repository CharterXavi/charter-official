import React from 'react'
import './quote.css'

const Quote = (props) => {

    return (
        <div className='Quote'>
            <h4>{props.name}</h4>
            <p className='quote-text'>"{props.quote}"</p>
        </div>
    );
};

export default Quote