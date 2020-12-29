import React, {useEffect} from 'react';
import './data.css';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import HomeChart from './home-chart';
import AOS from "aos";
import "aos/dist/aos.css";
import DataIcon from '../icons/data';

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
            <DataIcon />
            <h5>We're making a real impact.</h5>
            <p>We make a serious effort to track our impact by the numbers. From data on patient outcomes to community efforts and everything in between, we make sure we're always making a measurable difference.</p>
            <div data-aos='fade-up' data-aos-duration='1000' >
              <ButtonPrimaryAlt content='See data' link='#' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default DataStrip