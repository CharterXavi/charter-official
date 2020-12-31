import './hospice-eligibility.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";
import CheckboxIcon from '../icons/checkbox';
import hospiceEligibility from '../../images/hospice-eligibility.png';

const HospiceEligibility = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HospiceEligibility'>
      <div className='two-column-left'>
        <div className='left'>
              <div className='content-wrapper'>
                  <CheckboxIcon />
                  <h5>Hospice Eligibility</h5>
                  <p>Hospice care is a special benefit fully covered under Medicare, Medi-Cal, and many private health insurances. Eligibility for hospice depends on your physician's order for hospice services and the following:</p>
                  <ul>
                    <li>Your doctor and the hospice medical director certify that you have a terminal condition and meet specific medical criteria for hospice care.</li>
                    <li>You opt for comfort care under hospice rather than pursuing aggressive procedures.</li>
                    <li>You receive care from a Medicare approved hospice program.</li>
                  </ul>
              </div>
          </div>
          <div className='right'>
              <img src={hospiceEligibility} alt="Group of health care professionals" />
          </div>
      </div>
    </div>
  );
}

export default HospiceEligibility;