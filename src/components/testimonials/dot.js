import './dot.css'

import React from 'react'

const Dot = (props) => {

    return (
        <div className={`Dot ${props.isCurrentQuote ? 'current' : 'not-current'}`} key={props.key} ></div>
    );
};

export default Dot