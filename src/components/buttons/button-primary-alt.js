import React from 'react'
import './button-primary-alt.css'

const ButtonPrimaryAlt = (props) => {
    return (
        <div className='ButtonPrimaryAlt'>
            <a href={props.link} className='btn-primary-alt'>
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' />}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.content}
            </a>
        </div>
    );
};

export default ButtonPrimaryAlt