import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import familyImage from '../../images/family.png';
import './home-services.css';

const HomeServices = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HomeServices'>
        <div className='intro'>
          <h2>Home Health Services</h2>
          <p>We provide a vast selection of healthcare services in our home health programs. Making sure each patient has all of their needs met is crucial to ensuring the highest quality care. This includes the following and more:</p>
          <ul>
              <li>Skilled Nursing Care</li>
              <li>Intravenous Therapy</li>
              <li>Wound Care</li>
              <li>Foley Catheter Care</li>
              <li>Pain Management</li>
              <li>Medication Management</li>
              <li>Home Safety Evaluations</li>
              <li>Physical Therapy</li>
              <li>Occupational Therapy</li>
              <li>Speech Therapy</li>
              <li>Medical Social Services</li>
              <li>Home Health Aide Services</li>
              <li>Dietary and Nutrition Counseling</li>
          </ul>
        </div>
    </div>
  );
}

export default HomeServices;