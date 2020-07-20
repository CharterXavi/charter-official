import React from 'react'
import './button-primary.css'

const ButtonPrimary = (props) => {
    return (
        <div className='ButtonPrimary'>
            <a href={props.link} className='btn-primary'>
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' />}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.content}
            </a>
        </div>
    );
};

export default ButtonPrimary