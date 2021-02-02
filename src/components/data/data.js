import './data.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import DataIcon from '../icons/data';
import HomeChart from './home-chart';

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
            <p>
              We use data to monitor the impact we have on our patients' lives and inform our decisions to ensure the best outcome for our patients and partners.
            </p>
            <div data-aos='fade-up' data-aos-duration='1000' >
              {/* Disabling button until Data Page is built out */}
              <ButtonPrimaryAlt content='Data coming soon! 🎉' isDisabled={true} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default DataStrip