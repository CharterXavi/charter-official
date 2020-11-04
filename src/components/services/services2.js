import React, {useEffect} from 'react';
import './services2.css';
import medkitIcon from '../../images/iconography/services/medkit.png';
import heartIcon from '../../images/iconography/services/heart.png';
import homeIcon from '../../images/iconography/services/home-health.png';
import ccmIcon from '../../images/iconography/services/ccm.png';
import healthIcon from '../../images/iconography/services/healthcare.png';
import hospitalIcon from '../../images/iconography/services/hospital.png';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
// Data AOS for react imports
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesStrip2 = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });  

  return (
    <div className='ServicesStrip2'>
        <h2>Our Services</h2>
        <div className='card-container'>
            <div className='card' data-aos='fade-up' data-aos-duration='600' >
                <img src={medkitIcon} alt="Heart symbol" className='icon' />
                <h4>Private Duty</h4>
                <p>Hospice is a special way of caring for people who have a life limiting illness.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Hospice Page' link='/services/private-duty' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1000' >
                <img src={homeIcon} alt="House symbol" className='icon' />
                <h4>Skilled Home Health</h4>
                <p>We can deliver a wide range of services conveniently and privately at home.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Home Health Page' link='/services/home-health' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1400' >
                <img src={healthIcon} alt="Healthcare cross symbol" className='icon' />
                <h4>Palliative Care</h4>
                <p>Our Palliative team can help you and your loved ones cope with serious illnesses.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Palliative Care Page' link='/services/palliative-care' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='800' >
                <img src={ccmIcon} alt="Stehoscope symbol" className='icon' />
                <h4>Complex Care Management</h4>
                <p>C.C.M. is our comprehensive plan to make sure we keep patients out of the hospital.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to HARP Page' link='/services/ccm' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1200' >
                <img src={heartIcon} alt="Heart symbol" className='icon' />
                <h4>Hospice</h4>
                <p>Hospice is a special way of caring for people who have a life limiting illness.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Hospice Page' link='/services/hospice' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1600' >
                <img src={hospitalIcon} alt="Stehoscope symbol" className='icon' />
                <h4>Acute / Hopsital-Based Care</h4>
                <p>We offer Acute/Hospital-based care in times of emergency.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to HARP Page' link='/services/acute-care' />
            </div>
        </div>
    </div>
  )
}

export default ServicesStrip2