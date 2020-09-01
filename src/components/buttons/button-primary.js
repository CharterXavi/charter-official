import React, {useEffect} from 'react'
import './button-primary.css'
import AOS from "aos";
import "aos/dist/aos.css";

const ButtonPrimary = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className='ButtonPrimary' data-aos={props.animation} data-aos-duration={props.animationTime}>
            {props.download ?
            <a 
                href={props.link}
                download
                className='btn-primary'>
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' />}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.content}
            </a>
            : 
            <a 
                href={props.link}
                className='btn-primary'>
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' />}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.content}
            </a>
            }
        </div>
    );
};

export default ButtonPrimary