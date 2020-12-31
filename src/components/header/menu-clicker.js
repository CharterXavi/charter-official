import './menu-clicker.css'

import React, {useState} from 'react'

const MenuClicker = (props) => {
    const [isClicked, setClicked] = useState(false)
    const handleClick = () => {
        props.expandSubMenu(props.id);
        setClicked(!isClicked);
    }
    return (
        <div className='MenuClicker' onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex='0' aria-label='Submenu'>
            <svg className={`plus-sign ${isClicked ? 'spin-clicker' : ''}`} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M17 2C17 0.895431 16.1046 0 15 0C13.8954 0 13 0.89543 13 2V10.5C13 11.8807 11.8807 13 10.5 13H2C0.895431 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17H10.5C11.8807 17 13 18.1193 13 19.5V28C13 29.1046 13.8954 30 15 30C16.1046 30 17 29.1046 17 28V19.5C17 18.1193 18.1193 17 19.5 17H28C29.1046 17 30 16.1046 30 15C30 13.8954 29.1046 13 28 13H19.5C18.1193 13 17 11.8807 17 10.5V2Z" fill="#F22C57"/>
            </svg>
        </div>
    );
};

export default MenuClicker;