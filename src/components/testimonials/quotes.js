import React from 'react'
import './quotes.css'
import HeartIcon from '../icons/heart';

const Quotes = (props) => {

    return (
        <div className='Quotes'>
            {
            props.data.map((quote, index) =>
            <div 
                className={index === props.activeIndex ? 'active' : 'inactive'}
                key={index}
            >
                <HeartIcon />
                <p className='detail-title'>{quote.name}</p>
                <h5 className='quote-text'>"{quote.quote}"</h5>
            </div>
            )}
        </div>
    );
};

export default Quotes