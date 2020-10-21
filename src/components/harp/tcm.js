import React, {useEffect} from 'react';
import './tcm.css';
import AOS from "aos";
import "aos/dist/aos.css";
import houseGraphic from '../../images/house-graphic.png';
import checkboxes from '../../images/iconography/checkbox-blast.png';

const TCM = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='TCM'>
      <div className='two-column-right'>
        <div className='left'>
              <img src={houseGraphic} alt="Group of health care professionals" className='house' data-aos='fade-up' data-aos-duration='800'  />
              <img src={checkboxes} alt="Group of health care professionals" className='checkboxes' data-aos='fade-up' data-aos-duration='1500' />
          </div>
          <div className='right'>
            <h2>Transitional Care Management</h2>
            <p>Transitional Care Management (TCM) is a program that provides services for individuals who need help during transitions in care from an inpatient setting (including acute hospital, rehabilitation hospital, long-term acute care hospital or skilled nursing facility) to the patient’s home.</p>
            <p>A Transitional Care Specialist will visit you at the hospital or at home to explain the benefits of the program. Then a home nurse visit will be set up to evaluate your needs. The Program can help you:</p>
              <ul>
                  <li>Stay safe and stable at home to avoid unnecessary visits to the hospital</li>
                  <li>Set goals or your health</li>
                  <li>Prepare for your routine visit to your primary care doctor</li>
                  <li>Answer questions and concerns you may have regarding your condition</li>
                  <li>Learn about your symptoms and how to treat them</li>
                  <li>Teach you about your health condition and your medications</li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default TCM;