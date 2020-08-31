import React from 'react'
import './quotes.css'

const Quotes = (props) => {

    return (
        <div className='Quotes'>
            {
            props.data.map((quote, index) =>
            <div 
                className={index === props.activeIndex ? 'active' : 'inactive'}
                key={index}
            >
                <h4>{quote.name}</h4>
                <p className='quote-text'>"{quote.quote}"</p>
            </div>
            ) }
        </div>
    );
};

export default Quotes