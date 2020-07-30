import React, {useEffect} from 'react'
import './button-secondary.css'
import AOS from "aos";
import "aos/dist/aos.css";

const ButtonSecondary = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className='ButtonSecondary' data-aos={props.animation} data-aos-duration={props.animationTime}>
            <a href={props.link} className='btn-secondary'>
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' />}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.content}
            </a>
        </div>
    );
};

export default ButtonSecondary