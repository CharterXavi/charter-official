import React, {useState} from 'react'
import './hamburger.css'


const Hamburger = ({ onClick }) => {
    const [isClicked, setClicked] = useState(false)

    return (
        <div className={`Hamburger ${isClicked ? 'hamburger-menu-flip' : ''}`} type="button" onClick={() => {
            onClick(); {/* use the onClick method from parent to update parent's state */}
            setClicked(!isClicked); {/* change local state of button when clicked to animate with CSS classes */}
        }}>
            <div className={`burger1 ${isClicked ? 'burger1flip' : ''}`}></div>
            <div className={`burger2 ${isClicked ? 'burger2flip' : ''}`}></div>
            <div className={`burger3 ${isClicked ? 'burger3flip' : ''}`}></div>
        </div>
    );
};

export default Hamburger

