import React, {useEffect} from 'react'
import './services.css'
import {Link} from 'gatsby'
import heartIcon from '../../images/heart-icon.png'
import houseIcon from '../../images/house-icon.png'
import stethoscopeIcon from '../../images/stethoscope-icon.png'
import healthIcon from '../../images/health-icon.png'
import ButtonPrimaryAlt from '../buttons/button-primary-alt'
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
                <img src={heartIcon} alt="Heart symbol" class='icon' />
                <h3>Hospice</h3>
                <p>Hospice is a special way of caring for people who have a life limiting illness.</p>
                <Link to='/services/hospice'>
                    <ButtonPrimaryAlt content='Read more' alt='Go to Hospice Page' />
                </Link>
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='900' >
                <img src={stethoscopeIcon} alt="Stehoscope symbol" class='icon' />
                <h3>H.A.R.P.</h3>
                <p>H.A.R.P. is our comprehensive plan to make sure we keep you out of the hospital.</p>
                <Link to='/services/harp'>
                    <ButtonPrimaryAlt content='Read more' alt='Go to HARP Page' />
                </Link>
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1300' >
                <img src={healthIcon} alt="Healthcare cross symbol" class='icon' />
                <h3>Palliative Care</h3>
                <p>Our Palliative team can help you and your loved ones cope with serious illnesses.</p>
                <Link to='/services/palliative-care'>
                    <ButtonPrimaryAlt content='Read more' alt='Go to Palliative Care Page' />
                </Link>
            </div>
            <div className='card' data-aos='fade-up' data-aos-duration='1900' >
                <img src={houseIcon} alt="House symbol" class='houseIcon icon' />
                <h3>Home Health</h3>
                <p>We can deliver a wide range of services in the convenience and privacy of your own home.</p>
                <Link to='/services/home-health'>
                    <ButtonPrimaryAlt content='Read more' alt='Go to Home Health Page' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ServicesStrip