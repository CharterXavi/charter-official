import React, {useEffect} from 'react'
import './button-primary-alt.css'
import AOS from "aos";
import "aos/dist/aos.css";

const ButtonPrimaryAlt = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <a 
        href={props.link}
        className='ButtonPrimaryAlt'
        download={props.download === true} 
        data-aos={props.animation} 
        data-aos-duration={props.animationTime}
        >
            {/* if an icon prop is passed, display it */}
            {props.icon && <img src={props.icon} alt='Button Icon' />}
            {/* display the content passed as a prop i.e. - what goes inside the button? */}
            {props.content}
        </a>
    );
};

export default ButtonPrimaryAlt