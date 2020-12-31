import './advantage-card.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";

const AdvantageCard = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

return (
    <div className='AdvantageCard' data-aos='fade-up' data-aos-duration={props.animationTime} >
        {props.icon}
        <h6 className='detail-title'>{props.title}</h6>
        <p className='detail-text'>{props.content}</p>
    </div>
  );
}

export default AdvantageCard;