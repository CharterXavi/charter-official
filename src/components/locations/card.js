import React, {useEffect} from 'react'
import './card.css'
import Expander from './expander'
import Clicker from './clicker'
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const handleClick = () => {
        //calls method passed as prop to update state and rerender
        props.expandCard(props.id);
        props.updatePins();
    }

    return (
        <div className='Card' data-aos='fade-up' data-aos-duration={props.animationTime} data-aos-once="true">
            <div className='card-title'>
                <h5>{props.state}</h5>
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