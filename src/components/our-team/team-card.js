import React, {useEffect} from 'react'
import './team-card.css'
import AOS from "aos";
import "aos/dist/aos.css";
import facebookIcon from '../../images/iconography/facebook.png';
import twitterIcon from '../../images/iconography/twitter.png';
import linkedinIcon from '../../images/iconography/linkedin.png';

const TeamCard = (props) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

    const handleClick = () => {
        props.expandBio(props.id);
    }

  return (
    <div className='TeamCard' data-aos='fade-up' data-aos-duration={props.animationTime} data-aos-once="true">
        <img src={props.image} alt="Team Member" className={`${props.isClicked ? 'enlarge-image' : ''}`} />
        <div className='card-header'>
            <h4>{props.name}</h4>
            <p className='introduction-text'>{props.title}</p>
        </div>
        <div className='card-content'>
            <p className='quote'>{props.quote}</p>
            <div className={`biography ${props.isClicked ? 'expanded-bio' : ''}`}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sagittis, quis eget morbi leo sodales mattis lobortis hac. Sit adipiscing nulla vitae consequat egestas ultricies ultrices interdum.</p>
                <p>Egestas nisi, pretium mi ultricies lacus habitant cras. Aliquet nunc ultricies risus pretium suspendisse nibh diam. Egestas viverra et vitae ultrices odio non vitae iaculis. Lectus diam nisi, tellus, tortor fames.</p>
            </div>
            <div className='social'>
                <ul>
                    <li><a href={props.facebook} target='_blank' rel='noopenner noreferrer' className={`${props.facebook ? '' : 'disabled-link'}`}><img src={facebookIcon} alt="Facebook Logo" /></a></li>
                    <li><a href={props.twitter} target='_blank' rel='noopenner noreferrer' className={`${props.twitter ? '' : 'disabled-link'}`}><img src={twitterIcon} alt="Twitter Logo" /></a></li>
                    <li><a href={props.linkedIn} target='_blank' rel='noopenner noreferrer' className={`${props.linkedIn ? '' : 'disabled-link'}`}><img src={linkedinIcon} alt="LinkedIn Logo" /></a></li>
                </ul>
            </div>
        </div>
        <div className={`card-expander ${props.isClicked ? 'hide-bio' : ''}`} onClick={handleClick} onKeyDown={handleClick} role='button'>
            {props.isClicked ? <p>Hide</p> : <p>Read more</p>}
        </div>
    </div>
  )
}

export default TeamCard