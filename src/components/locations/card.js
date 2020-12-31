import './card.css'
import "aos/dist/aos.css";

import React, {useEffect} from 'react'

import AOS from "aos";
import Clicker from './clicker'
import Expander from './expander'

const Card = (props) => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const handleClick = () => {
        //calls method passed as prop to update state and rerender
        props.expandCard(props.id);
    }

    return (
        <div className={`Card ${props.isExpanded ? 'active-card' : ''}`} data-aos='fade-up' data-aos-duration={props.animationTime} data-aos-once="true">
            <div className='card-title'>
                <p>{props.state}</p>
                <Clicker onClick={handleClick} />
            </div>
            <Expander
                isExpanded={props.isExpanded}
                cities={props.cities}
                hoverReveal={props.hoverReveal}
            />
        </div>
    );
};

export default Card