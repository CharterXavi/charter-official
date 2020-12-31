import './button-primary-alt.css'
import "aos/dist/aos.css";

import React, {useEffect} from 'react'

import AOS from "aos";

const ButtonPrimaryAlt = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <a 
        href={props.link}
        className='ButtonPrimaryAlt button-text'
        download={props.download === true} 
        data-aos={props.animation} 
        data-aos-duration={props.animationTime}
        >
            {/* if an icon prop is passed, display it */}
            {props.icon && <img src={props.icon} alt='Button Icon' width='30' height='30'/>}
            {/* display the content passed as a prop i.e. - what goes inside the button? */}
            {props.content}
        </a>
    );
};

export default ButtonPrimaryAlt