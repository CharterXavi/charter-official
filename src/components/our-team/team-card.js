import './team-card.css'
import "aos/dist/aos.css";

import React, {useEffect, useState} from 'react'

import AOS from "aos";
import SocialButton from '../buttons/social-button';

const TeamCard = (props) => {
    //Data AOS
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const [screenWidth, setScreenWidth] = useState(0);
    const [charPerLine, setCharPerLine] = useState(`${screenWidth < 450 ? screenWidth / 10 : 50}`);
    const [heightFactor, setHeightFactor] = useState(`${props.bio.length > 800 ? 
        //if the bio is beyond 800px, give 28 px/per line
        (((props.bio.length / charPerLine) * 28)).toString().concat('px')
        :
        //if bio is below 800px give 30.5 px/per line & 
        //add 25 px to account for lack of whitespace in calculation for shorter bios
        (((props.bio.length / charPerLine) * 30.5) + 25).toString().concat('px')
    }`);

//Upon render or rerender, allow for height calculation to be dynamic based on window size
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
        setCharPerLine(`${screenWidth < 450 ? screenWidth / 10 : 50}`);
        setHeightFactor(`${props.bio.length > 800 ? 
            //if the bio is beyond 800px, give 28 px/per line
            (((props.bio.length / charPerLine) * 28)).toString().concat('px')
            :
            //if bio is below 800px give 30.5 px/per line & 
            //add 25 px to account for lack of whitespace in calculation for shorter bios
            (((props.bio.length / charPerLine) * 30.5) + 25).toString().concat('px')
        }`)
        //define a height factor and convert it to px
    } 
    useEffect(() => {
      //upon render, listen for screen size change and setScreenWidth whenever it changes 
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 
      }
    });
    useEffect(() => {
        handleResize();
    });

    const handleClick = () => {
        props.expandBio(props.id);
    }


  return (
    <div className='TeamCard' data-aos='fade-up' data-aos-duration={props.animationTime} data-aos-once="true">
        <img src={props.image} alt="Team Member" className={`${props.isClicked ? 'enlarge-image' : ''}`} width='200' height='200'/>
        <div className='card-body'>
            <div className='header'>
                <h6>{props.name}</h6>
                <p className='introduction-text'>{props.title}</p>
                <SocialButton content='LinkedIn' link={props.linkedIn} />
            </div>
            <div className='content'>
                <div className={`biography ${props.isClicked ? 'expanded-bio' : ''}`} style={{height: `${props.isClicked ? heightFactor : '0px'}`}}>
                    <hr className={`${props.isClicked ? 'stretch-hr' : ''}`}/>
                    <p>{props.bio}</p>
                </div>
            </div>
            <div className={`expander ${props.isClicked ? 'hide-bio' : ''}`} onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex='0'>
                {props.isClicked ? <p>Hide</p> : <p>Read more</p>}  
            </div>
        </div>
    </div>
  
  )
}

export default TeamCard