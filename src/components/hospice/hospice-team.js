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
        <div className='image-wrapper'>
          <img src={hospiceTeam1} alt="Group of health care professionals" />
          <img src={hospiceTeam2} alt="Group of health care professionals" />
        </div>
        <h2>Your Hospice Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus diam vitae ut et tincidunt quis sem est, ligula. Aliquam venenatis ut dapibus neque leo. Purus aliquet suscipit turpis volutpat nisl porta elit diam. Et nunc nunc neque aliquet ultricies risus.</p>
    </div>
  );
}

export default HospiceTeam;