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
      <div className='two-column-right'>
        <div className='left'>
              <HomeChart />
          </div>
          <div className='right'> 
            <img src={dataIcon} alt="Bar graph" />
              <h4>We're making a real impact.</h4>
              <p>We make a serious effort to track our impact by the numbers. From data on patient outcomes to community efforts and everything in between, we make sure we're always making a measurable difference.</p>
              <div data-aos='fade-up' data-aos-duration='1000' >
                <ButtonPrimaryAlt content='See data' />
              </div>
          </div>
      </div>
    </div>
  )
}

export default DataStrip