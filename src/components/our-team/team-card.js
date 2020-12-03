import React, {useEffect, useState} from 'react'
import './team-card.css'
import AOS from "aos";
import "aos/dist/aos.css";
import SocialButton from '../../components/buttons/social-button';

const TeamCard = (props) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

    const handleClick = () => {
        props.expandBio(props.id);
    }



//Upon render or rerender, allow for height calculation to be dynamic based on window size
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        //upon render, listen for screen size change and setState to 
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', setScreenWidth(window.innerWidth));
        }
    })

//Calc height dynamically based on size of bio
    //define a character/line number - if the screen width is below 450px allow for 1 word / every 10px, 
    // otherwise 50px per line will do
    let charPerLine = `${screenWidth < 450 ? screenWidth / 10 : 50}`;
    //define a height factor and convert it to px
    let heightFactor = `${props.bio.length > 800 ? 
        //if the bio is beyond 800px, give 28 px/per line
        (((props.bio.length / charPerLine) * 28)).toString().concat('px')
        :
        //if bio is below 800px give 30.5 px/per line & 
        //add 25 px to account for lack of whitespace in calculation for shorter bios
        (((props.bio.length / charPerLine) * 30.5) + 25).toString().concat('px')
    }`;

  return (
    <div className='TeamCard' data-aos='fade-up' data-aos-duration={props.animationTime} data-aos-once="true">
        <img src={props.image} alt="Team Member" className={`${props.isClicked ? 'enlarge-image' : ''}`} />
        <div className='card-body'>
            <div className='header'>
                <h6>{props.name}</h6>
                <p className='introduction-text'>{props.title}</p>
                <SocialButton content='LinkedIn' link={props.linkedIn} />
            </div>
            <div className='content'>
                <p className='quote detail-text'>{props.quote}</p>
                <div className={`biography ${props.isClicked ? 'expanded-bio' : ''}`} style={{height: `${props.isClicked ? heightFactor : '0px'}`}}>
                    <hr className={`${props.isClicked ? 'stretch-hr' : ''}`}/>
                    <p>{props.bio}</p>
                </div>
            </div>
            <div className={`expander ${props.isClicked ? 'hide-bio' : ''}`} onClick={handleClick} onKeyDown={handleClick} role='button'>
                {props.isClicked ? <p>Hide</p> : <p>Read more</p>}
            </div>
        </div>
    </div>
  
  )
}

export default TeamCard