import './hamburger.css'
import "aos/dist/aos.css";

import React, {useEffect, useState} from 'react'

import AOS from "aos";

const Hamburger = ({ onClick }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    
    const [isClicked, setClicked] = useState(false);

    const handleClick = () => {
        onClick(); 
        setClicked(!isClicked); 
    };

    return (
        <div className={`Hamburger ${isClicked ? 'hamburger-menu-flip' : ''}`} type='button' role='button' tabIndex='0' onClick={handleClick} onKeyDown={handleClick} aria-label='Menu' >
            <div data-aos='fade-left' data-aos-duration='800'>
                <div className={`burger1 ${isClicked ? 'burger1flip' : ''}`}></div>
            </div>
            <div data-aos='fade-left' data-aos-duration='1300'>
                <div className={`burger2 ${isClicked ? 'burger2flip' : ''}`}></div>
            </div>
            <div data-aos='fade-left' data-aos-duration='1900'>
                <div className={`burger3 ${isClicked ? 'burger3flip' : ''}`}></div>
            </div>
        </div>
    );
};

export default Hamburger

