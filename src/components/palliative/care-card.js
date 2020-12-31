import './care-card.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";

const CareCard = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

return (
    <div className='CareCard' data-aos='fade-up' data-aos-duration={props.animationTime} >
        <img src={props.img} alt="Letter" className='letter'/>
        <h6 className='detail-title'>{props.title}</h6>
        <p className='detail-text'>{props.content}</p>
    </div>
  );
}

export default CareCard;