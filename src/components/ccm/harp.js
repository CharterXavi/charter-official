import './harp.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";
import ButtonSecondary from '../buttons/button-secondary';
import HealthcareIcon from '../icons/healthcare';
import StethoscopeIcon from '../icons/stethoscope';
import directiveForm from './directive.pdf';
import polstForm from './polst.pdf';

const HARP = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HARP'>
      <div className='two-column'>
        <div className="title">
          <h5>Transitional Care Management</h5>
        </div>
        <div className="content">
          <div className="left">
            <h6>What is TCM?</h6>
            <p>Transitional Care Management (TCM) is a program that provides services for individuals who need help during transitions in care from an inpatient setting (including acute hospital, rehabilitation hospital, long-term acute care hospital or skilled nursing facility) to the patient’s home.</p>
            <p>A Transitional Care Specialist will visit you at the hospital or at home to explain the benefits of the program. Then a home nurse visit will be set up to evaluate your needs.</p>
          </div>
          <div className="right">
            <h6>Goals</h6>
            <p>The Program can help you:</p>
            <ul>
                <li>Stay safe and stable at home to avoid unnecessary visits to the hospital</li>
                <li>Set goals for your health</li>
                <li>Prepare for routine visits to your primary care doctor</li>
                <li>Answer questions and concerns you may have regarding your condition</li>
                <li>Learn about your symptoms and how to treat them</li>
                <li>Teach you about your health condition and your medications</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='two-column'>
        <div className="title">
          <h5>Advanced Care Planning</h5>
        </div>
        <div className="content">
          <div className="left">
            <h6>What is ACP?</h6>
            <p>Our qualified health care professionals work to help you identify your needs, goals and medical treatment preferences so you have a plan in place for advanced care. Once these first steps are completed they will help you select the most appropriate Advanced Care Directive. The goal is to ensure that you select a health care agent that you trust and feel comfortable with and that you receive the treatment you want when you can no longer make those decisions for yourself.</p>
          </div>
          <div className="right">
            <h6>Forms</h6>
            <p>Two important forms should be completed during this process: the Advanced Healthcare Directive and the Physician's Order for Life-Sustaining Treatment (POLST). These forms are available for download below.</p>
          </div>
        </div>
        <div className='forms'>
              <div className='form-card' data-aos='fade-up' data-aos-duration='800'>
                <HealthcareIcon />
                <h6 className='detail-title'>Advanced Healthcare Directive</h6>
                <p className='detail-text'>You have the right to give instructions about your own health care and to name someone else to make health care decisions for you. This form lets you do either or both of these things.</p>
                <ButtonSecondary link={directiveForm} download={true} content='Download form' />
              </div>
              <div className='form-card' data-aos='fade-up' data-aos-duration='1400'>
                <StethoscopeIcon />
                <h6 className='detail-title'>Physician's Orders for Life-Sustaining Treatment (POLST)</h6>
                <p className='detail-text'>This is a medical order that tells emergency health care professionals what to do during a medical crisis where the patient cannot speak for him or herself.</p>
                <ButtonSecondary link={polstForm} download={true} content='Download form' />
              </div>
            </div>
      </div>
    </div>
  );
}

export default HARP;