

import React, {useEffect} from 'react';
import './levels-card.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { checkPropTypes } from 'prop-types';
import stethoscopeImage from '../../images/stethoscope-levels.png';

const LevelsCard = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

return (
    <div className='LevelsCard'>
        <img src={stethoscopeImage} alt="Stethoscope draped over card" className='stethoscope' />
        <img src={props.img} alt="Number symbol" className='number'/>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
    </div>
  );
}

export default LevelsCard;