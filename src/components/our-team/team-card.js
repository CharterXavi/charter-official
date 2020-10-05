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
    const charPerLine = 35;
    const heightFactor = (((props.bio.length / charPerLine) * 22) + 50).toString().concat('px');

  return (
    <div className='TeamCard' data-aos='fade-up' data-aos-duration={props.animationTime} data-aos-once="true">
        <img src={props.image} alt="Team Member" className={`${props.isClicked ? 'enlarge-image' : ''}`} />
        <div className='card-header'>
            <h3>{props.name}</h3>
            <p className='introduction-text'>{props.title}</p>
        </div>
        <div className='card-content'>
            <p className='quote'>{props.quote}</p>
            <div className={`biography ${props.isClicked ? 'expanded-bio' : ''}`} style={{height: `${props.isClicked ? heightFactor : '0px'}`}}>
                <p>{props.bio}</p>
            </div>
            <div className='social'>
                <SocialButton content='LinkedIn' link={props.linkedIn} />
            </div>
        </div>
        <div className={`card-expander ${props.isClicked ? 'hide-bio' : ''}`} onClick={handleClick} onKeyDown={handleClick} role='button'>
            {props.isClicked ? <p>Hide</p> : <p>Read more</p>}
        </div>
    </div>
  )
}

export default TeamCard