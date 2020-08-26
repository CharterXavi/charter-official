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
    <div className='CareCard'>
        <img src={props.img} alt="Letter" className='letter'/>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <div className='explosion'>
            <img src={props.img} alt="Letter"/>
            <img src={props.img} alt="Letter"/>
            <img src={props.img} alt="Letter"/>
            <img src={props.img} alt="Letter"/>
        </div>
    </div>
  );
}

export default CareCard;