import React, {useEffect} from 'react'
import './team-card.css'
import AOS from "aos";
import "aos/dist/aos.css";

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
        <img src={props.image} alt="Team Member" class={`${props.isClicked ? 'enlarge-image' : ''}`} />
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
        </div>
        <div className={`card-expander ${props.isClicked ? 'hide' : ''}`} onClick={handleClick} >
            {props.isClicked ? <p>Hide</p> : <p>Read more</p>}
        </div>
    </div>
  )
}

export default TeamCard