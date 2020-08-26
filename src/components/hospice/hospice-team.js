import React, {useEffect} from 'react';
import './hospice-team.css';
import AOS from "aos";
import "aos/dist/aos.css";
import hospiceTeam1 from '../../images/hospice-team1.png';
import hospiceTeam2 from '../../images/hospice-team2.png';

const HospiceTeam = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HospiceTeam'>
        <div className='left'>
          <img src={hospiceTeam1} alt="Group of health care professionals" />
        </div>
        <div className='right'>
          <h2>Your Hospice Team</h2>
          <p>Each hospice team consists of health care workers from all disciplines: nurses, social workers, home health aides, spiritual counselors, and volunteers, all under the direction of a medical director. By tying all of these disciplines together, we can deliver nothing short of the most high-quality, all-encompassing hospice care available.</p>
        </div>
    </div>
  );
}

export default HospiceTeam;