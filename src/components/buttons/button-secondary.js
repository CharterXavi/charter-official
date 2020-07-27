import React from 'react'
import './button-secondary.css'

const ButtonSecondary = (props) => {
    return (
        <div className='ButtonSecondary'>
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