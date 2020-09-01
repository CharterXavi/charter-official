import React, {useEffect} from 'react';
import './care-card.css';
import AOS from "aos";
import "aos/dist/aos.css";

const CareCard = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

return (
    <div className='CareCard' data-aos='fade-up' data-aos-duration={props.animationTime} >
        <img src={props.img} alt="Letter" className='letter'/>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
    </div>
  );
}

export default CareCard;