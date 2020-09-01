import React, {useEffect} from 'react';
import './advantage-card.css';
import AOS from "aos";
import "aos/dist/aos.css";

const AdvantageCard = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

return (
    <div className='AdvantageCard' data-aos='fade-up' data-aos-duration={props.animationTime} >
        <img src={props.img} alt="Letter" className='icon'/>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
    </div>
  );
}

export default AdvantageCard;