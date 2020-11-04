import React, {useEffect} from 'react';
import './harp.css';
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonSecondary from '../buttons/button-secondary';
import directiveForm from '../../images/directive.pdf';
import polstForm from '../../images/polst.pdf';
import healthIcon from '../../images/iconography/hospice/healthcare.png';
import stethoscopeIcon from '../../images/iconography/hospice/stethoscope.png';

const HARP = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HARP'>
      <div className='two-column'>
        <div className='left'>
            <h4>Advanced Care Planning</h4>
            <p>Our qualified health care professionals work to help you identify your needs, goals and medical treatment preferences so you have a plan in place for advanced care. Once these first steps are completed they will help you select the most appropriate Advanced Care Directive. The goal is to ensure that you select a health care agent that you trust and feel comfortable with and that you receive the treatment you want when you can no longer make those decisions for yourself.</p>
            <h5>Forms</h5>
            <p>Two important forms should be completed during this process:</p>
            <ul>
              <li>Physician's Orders for Life-Sustaining Treatment (POLST): a medical order that tells emergency health care professionals what to do during a medical crisis where the patient cannot speak for him or herself.</li>
              <li>Advanced Health Care Directive: you have the right to give instructions about your own health care. You also have the right to name someone else to make health care decisions for you. This form lets you do either or both of these things. </li>
            </ul>
            <div className='forms'>
              <div className='form-card' data-aos='fade-up' data-aos-duration='800'>
                <div className='card-title'>
                  <img src={stethoscopeIcon} alt="" />
                  <h5>Physician's Orders for Life-Sustaining Treatment</h5>
                </div>
                <ButtonSecondary link={polstForm} download={true} content='Download form' />
              </div>
              <div className='form-card' data-aos='fade-up' data-aos-duration='1400'>
                <div className='card-title'>
                  <img src={healthIcon} alt="" />
                  <h5>Advanced Healthcare Directive</h5>
                </div>
                <ButtonSecondary link={directiveForm} download={true} content='Download form' />
              </div>
            </div>
        </div>
        <div className='right'>
          <h4>Transitional Care Management</h4>
          <p>Transitional Care Management (TCM) is a program that provides services for individuals who need help during transitions in care from an inpatient setting (including acute hospital, rehabilitation hospital, long-term acute care hospital or skilled nursing facility) to the patient’s home.</p>
          <p>A Transitional Care Specialist will visit you at the hospital or at home to explain the benefits of the program. Then a home nurse visit will be set up to evaluate your needs.</p>
          <h5>Goals</h5>
          <p>The Program can help you:</p>
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

export default HARP;