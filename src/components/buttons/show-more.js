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
        <div className='ShowMoreButton' data-aos={props.animation} data-aos-duration={props.animationTime} onClick={clickHandler}>
            <a href={props.link} className='show-more-btn'>
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' />}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.isFinished ? 'Reset' : props.content}
            </a>
        </div>
    );
};

export default ShowMoreButton