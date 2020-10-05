import React, {useEffect} from 'react';
import './data.css';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import dataIcon from '../../images/iconography/data/data.png';
import HomeChart from './home-chart';
import AOS from "aos";
import "aos/dist/aos.css";

const DataStrip = () => {
  
  useEffect(() => {
      AOS.init();
      AOS.refresh();
  }); 

  return (
    <div className='DataStrip'>
        <div className='left'>
            <HomeChart />
        </div>
        <div className='right'> 
          <img src={dataIcon} alt="Bar graph" />
            <h2>We're making a real impact.</h2>
            <p className='introduction-text'>We make a serious effort to track our impact by the numbers. From data on patient outcomes to community efforts and everything in between, we make sure we're always making a measurable difference.</p>
            <ButtonPrimaryAlt content='Read more' animation='fade-up' animationTime='1000' />
        </div>
    </div>
  )
}

export default DataStrip