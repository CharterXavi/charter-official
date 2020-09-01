import React, {useEffect} from 'react';
import './acp.css';
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonSecondary from '../buttons/button-secondary';
import directiveForm from '../../images/directive.pdf';
import polstForm from '../../images/polst.pdf';

const ACP = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='ACP intro'>
        <h2>Advanced Care Planning</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus odio in pellentesque rutrum in. Sed pretium enim odio suspendisse justo eget. Massa aliquet ultrices ut at urna, tempor duis. Cras purus molestie integer commodo non bibendum ultrices metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus odio in pellentesque rutrum in. Sed pretium enim odio suspendisse justo eget. Massa aliquet ultrices ut at urna, tempor duis. Cras purus molestie integer commodo non bibendum ultrices metus.</p>
        <div className='forms'>
            <div className='form-card' data-aos='fade-up' data-aos-duration='800'>
                <h4>POLST</h4>
                <p>A POLST form is a medical order that tells emergency health care professionals what to do during a medical crisis where the patient cannot speak for him or herself.</p>
                <ButtonSecondary link={polstForm} download={true} content='Download form' />
            </div>
            <div className='form-card' data-aos='fade-up' data-aos-duration='1400'>
                <h4>Advanced Healthcare Directive</h4>
                <p>You have the right to give instructions about your own health care. You also have the right to name someone else tomake health care decisions for you. This form lets you do either or both of these things. </p>
                <ButtonSecondary link={directiveForm} download={true} content='Download form' />
            </div>
        </div>
    </div>
  );
}

export default ACP;