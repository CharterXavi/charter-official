import React, {useEffect} from 'react'
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

    //Calc height dynamically based on size of bio
    const charPerLine = 45;
    const heightFactor = (((props.bio.length / charPerLine) * 25) + 50).toString().concat('px');

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