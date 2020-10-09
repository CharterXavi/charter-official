import React, {useEffect} from 'react';
import './acp.css';
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonSecondary from '../buttons/button-secondary';
import directiveForm from '../../images/directive.pdf';
import polstForm from '../../images/polst.pdf';
import healthIcon from '../../images/iconography/hospice/healthcare.png';
import stethoscopeIcon from '../../images/iconography/hospice/stethoscope.png';

const ACP = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='ACP intro'>
        <h2>Advanced Care Planning</h2>
        <p>Our qualified health care professionals work to help you identify your needs, goals and medical treatment preferences so you have a plan in place for advanced care. Once these first steps are completed they will help you select the most appropriate Advanced Care Directive. The goal is to ensure that you select a health care agent that you trust and feel comfortable with and that you receive the treatment you want when you can no longer make those decisions for yourself.</p>
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
  );
}

export default ACP;