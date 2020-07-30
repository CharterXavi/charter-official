import React, {useState} from 'react'
import './dot.css'

const Dot = (props) => {

    const [current, setCurrent] = useState(props.isActive)

    const handleClick = () => {
        props.showQuote(props.id)
    }

    return (
        <div className={`Dot ${props.isActive ? 'current' : ''}`} onClick={props.isActive ? null : handleClick} ></div>
    );
};

export default Dot