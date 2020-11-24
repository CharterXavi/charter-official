import React, {useEffect} from 'react'
import './show-more.css'
import AOS from "aos";
import "aos/dist/aos.css";

const ShowMoreButton = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    const clickHandler = () => {
        props.showMorePosts(props.clickCount, props.isFinished);
    }
    return (
        <a 
        href={props.link}
        className='ShowMoreButton button-text'
        download={props.download === true} 
        data-aos={props.animation} 
        data-aos-duration={props.animationTime}
        onClick={clickHandler}
        >
            {/* if an icon prop is passed, display it */}
            {props.icon && <img src={props.icon} alt='Button Icon' />}
            {/* display the content passed as a prop i.e. - what goes inside the button? */}
            {props.isFinished ? 'Reset' : props.content}
        </a>
    );
};

export default ShowMoreButton