import React, {useEffect} from 'react'
import './services.css'
import {Link} from 'gatsby'
import heartIcon from '../../images/iconography/heart-icon.png'
import houseIcon from '../../images/iconography/house-icon.png'
import stethoscopeIcon from '../../images/iconography/stethoscope-icon.png'
import healthIcon from '../../images/iconography/health-icon.png'
import ButtonPrimaryAlt from '../buttons/button-primary-alt'
// Data AOS for react imports
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesStrip = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });  

  return (
    <div className='ServicesStrip'>
        <h2>Our Post-Accute Care Services</h2>
        <div className='card-container'>
            <div className='card' data-aos='fade-up' data-aos-duration='600' >
                <img src={heartIcon} alt="Heart symbol" className='icon' />
                <h3>Hospice</h3>
                <p>Hospice is a special way of caring for people who have a life limiting illness.</p>
                <ButtonPrimaryAlt content='Read more' alt='Go to Hospice Page' link='/services/hospice' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='900' >
                <img src={stethoscopeIcon} alt="Stehoscope symbol" className='icon' />
                <h3>H.A.R.P.</h3>
                <p>H.A.R.P. is our comprehensive plan to make sure we keep you out of the hospital.</p>
                <ButtonPrimaryAlt content='Read more' alt='Go to HARP Page' link='/services/harp' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1300' >
                <img src={healthIcon} alt="Healthcare cross symbol" className='icon' />
                <h3>Palliative Care</h3>
                <p>Our Palliative team can help you and your loved ones cope with serious illnesses.</p>
                <ButtonPrimaryAlt content='Read more' alt='Go to Palliative Care Page' to='/services/palliative-care' />
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1900' >
                <img src={houseIcon} alt="House symbol" className='houseIcon icon' />
                <h3>Home Health</h3>
                <p>We can deliver a wide range of services in the convenience and privacy of your own home.</p>
                <ButtonPrimaryAlt content='Read more' alt='Go to Home Health Page' link='/services/home-health' />
            </div>
        </div>
    </div>
  )
}

export default ServicesStrip