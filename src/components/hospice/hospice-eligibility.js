import React, {useEffect} from 'react';
import './hospice-eligibility.css';
import AOS from "aos";
import "aos/dist/aos.css";
import hospiceEligibility from '../../images/hospice-eligibility.png';


const HospiceEligibility = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HospiceEligibility'>
        <div className='left'>
            <div className='content-wrapper'>
                <h2>Hospice Eligibility</h2>
                <p>Each hospice team consists of health care workers from all disciplines: nurses, social workers, home health aides, spiritual counselors, and volunteers, all under the direction of a medical director. By tying all of these disciplines together, we can deliver nothing short of the most high-quality, all-encompassing hospice care available.</p>
            </div>
        </div>
        <div className='right'>
            <img src={hospiceEligibility} alt="Group of health care professionals" />
        </div>
    </div>
  );
}

export default HospiceEligibility;