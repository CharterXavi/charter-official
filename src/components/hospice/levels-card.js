

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
    <div className='LevelsCard'>
        <img src={props.img} alt="Number symbol" />
        <h4>{props.title}</h4>
        <p>{props.content}</p>
    </div>
  );
}

export default LevelsCard;