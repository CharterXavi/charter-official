import React, {useEffect} from 'react'
import './social-button.css'
import AOS from "aos";
import "aos/dist/aos.css";

const SocialButton = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }); 
 
    return (
        <a 
        href={props.link}
        className={`SocialButton ${props.link ? '' : 'disabled-btn'}`}
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

export default SocialButton;