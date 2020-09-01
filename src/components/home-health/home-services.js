import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import stethoscopeImage from '../../images/stethoscope-image.png';
import './home-services.css';

const HomeServices = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HomeServices'>
        <div className='left'>
            <img src={stethoscopeImage} alt="Stethoscope" className='stethoscope' data-aos='fade-up' data-aos-duration='800'  />
        </div>
        <div className='right'>
          <h2>Home Health Services</h2>
          <div className='lists'>
            <ul>
                <li>Skilled Nursing Care</li>
                <li>Intravenous Therapy</li>
                <li>Wound Care</li>
                <li>Foley Catheter Care</li>
                <li>Pain Management</li>
                <li>Medication Management</li>
                <li>Home Safety Evaluations</li>
            </ul>
            <ul>
                <li>Physical Therapy</li>
                <li>Occupational Therapy</li>
                <li>Speech Therapy</li>
                <li>Medical Social Services</li>
                <li>Home Health Aide Services</li>
                <li>Dietary and Nutrition Counseling</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default HomeServices;