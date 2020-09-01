import React, {useEffect} from 'react';
import './levels-card.css';
import AOS from "aos";
import "aos/dist/aos.css";

const LevelsCard = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

return (
    <div className='LevelsCard' data-aos='fade-up' data-aos-duration={props.animationTime} >
        <img src={props.img} alt="Number symbol" className='number'/>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
    </div>
  );
}

export default LevelsCard;