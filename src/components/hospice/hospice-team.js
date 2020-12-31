import './hospice-team.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";
import GroupIcon from '../icons/group';
import hospiceTeam from '../../images/hospice-team.png';

const HospiceTeam = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HospiceTeam'>
      <div className='two-column-right'>
        <div className='left'>
            <img src={hospiceTeam} alt="Group of health care professionals" />
        </div>
        <div className='right'>
          <GroupIcon />
          <h5>Your Hospice Team</h5>
          <p>Each hospice team consists of health care workers from all disciplines: nurses, social workers, home health aides, spiritual counselors, and volunteers, all under the direction of a medical director. By tying all of these disciplines together, we can deliver nothing short of the most high-quality, all-encompassing hospice care available.</p>
        </div>
      </div>
    </div>
  );
}

export default HospiceTeam;