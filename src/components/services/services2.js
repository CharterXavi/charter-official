import React, {useEffect} from 'react';
import './services2.css';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import charterCompass from '../../images/charter-compass-v6-navy.png';
// Data AOS for react imports
import AOS from "aos";
import "aos/dist/aos.css";
import HeartIcon from '../icons/heart';
import CCMIcon from '../icons/ccm';
import HealthcareIcon from '../icons/healthcare';
import HomeIcon from '../icons/home';
import MedkitIcon from '../icons/medkit';
import HospitalIcon from '../icons/hospital';

const ServicesStrip2 = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });  

  return (
    <div className='ServicesStrip2'>
        <div className='title'>
            <h4>Our Services</h4>
            <hr/>
        </div>
        <div className='card-container'>
            <div className='card' data-aos='fade-up' data-aos-duration='600' >
                <MedkitIcon />
                <h6>Private Duty Home Care</h6>
                <p className='detail-text'>Private duty home care offers in-home support for day-to-day activities.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Hospice Page' link='/services/private-duty' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1000' >   
                <HomeIcon />
                <h6>Skilled Home Health</h6>
                <p className='detail-text'>We can deliver a range of services conveniently and privately at home.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Home Health Page' link='/services/home-health' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1400'>
                <HealthcareIcon />
                <h6>Palliative Care</h6>
                <p className='detail-text'>Our Palliative team can help you / your loved ones cope with serious illnesses.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Palliative Care Page' link='/services/palliative-care' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='800' >
                <CCMIcon />
                <h6>Complex Care Management</h6>
                <p className='detail-text'>C.C.M. is our comprehensive plan to keep patients out of the hospital.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to HARP Page' link='/services/ccm' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1200' >
                <HeartIcon />
                <h6>Hospice</h6>
                <p className='detail-text'>Hospice is a special way of caring for people who have a life limiting illness.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to Hospice Page' link='/services/hospice' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1600' >
                <HospitalIcon />
                <h6>Acute / Hopsital-Based Care</h6>
                <p className='detail-text'>We offer Acute/Hospital-based care in times of emergency.</p>
                <ButtonPrimaryAlt content='Learn more' alt='Go to HARP Page' link='/services/acute-care' />
            </div>
        </div>
        <img src={charterCompass} alt="Compass" className='compass-one' />
    
    </div>
  )
}

export default ServicesStrip2