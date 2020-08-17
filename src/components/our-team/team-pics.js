import React, {useEffect} from 'react'
import './team-pics.css'
import AOS from "aos";
import "aos/dist/aos.css";
import team1 from '../../images/team/team1.png';
import team2 from '../../images/team/team2.png';
import team3 from '../../images/team/team3.png';
import team4 from '../../images/team/team4.png';

const TeamPics = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

  return (
    <div className='TeamPics'>
        <img src={team1} alt="Health Care Workers posing and smiling" data-aos-animation='fade-up' data-aos-duration='800' />
        <img src={team2} alt="Health Care Workers posing and smiling" data-aos-animation='fade-up' data-aos-duration='1100' />
        <img src={team3} alt="Health Care Workers posing and smiling" data-aos-animation='fade-up' data-aos-duration='1500' />
        <img src={team4} alt="Health Care Workers posing and smiling" data-aos-animation='fade-up' data-aos-duration='2000' />
    </div>
  )
}

export default TeamPics