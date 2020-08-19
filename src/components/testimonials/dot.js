import React, {useState} from 'react'
import './dot.css'

const Dot = (props) => {

    const [current, setCurrent] = useState(props.isActive)

    return (
        <div className={`Dot ${props.isActive ? 'current' : ''}`} ></div>
    );
};

export default Dot