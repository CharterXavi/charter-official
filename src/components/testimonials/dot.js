import React from 'react'
import './dot.css'

const Dot = (props) => {

    return (
        <div className={`Dot ${props.isCurrentQuote ? 'current' : 'not-current'}`} key={props.key} ></div>
    );
};

export default Dot