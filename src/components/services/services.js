import React from 'react'
import './services.css'
import {Link} from 'gatsby'
import heartIcon from '../../images/heart-icon.png'
import houseIcon from '../../images/house-icon.png'
import stethoscopeIcon from '../../images/stethoscope-icon.png'
import healthIcon from '../../images/health-icon.png'
import ButtonPrimaryAlt from '../buttons/button-primary-alt'


const ServicesStrip = () => {
  return (
    <div className='ServicesStrip'>
        <h2>Our Post-Accute Care Services</h2>
        <div className='card-container'>
            <div className='card'>
                <img src={heartIcon} alt="Heart symbol" class='icon' />
                <h3>Hospice</h3>
                <p className='introduction-text'>This is a description about a service.</p>
                <Link to='/services/hospice'>
                    <ButtonPrimaryAlt content='Read more' alt='Go to Hospice Page' />
                </Link>
            </div>
            <div className='card'>
                <img src={stethoscopeIcon} alt="Stehoscope symbol" class='icon' />
                <h3>H.A.R.P.</h3>
                <p className='introduction-text'>This is a description about a service.</p>
                <Link to='/services/harp'>
                    <ButtonPrimaryAlt content='Read more' alt='Go to HARP Page' />
                </Link>
            </div>
            <div className='card'>
                <img src={healthIcon} alt="Healthcare cross symbol" class='icon' />
                <h3>Palliative Care</h3>
                <p className='introduction-text'>This is a description about a service.</p>
                <Link to='/services/palliative-care'>
                    <ButtonPrimaryAlt content='Read more' alt='Go to Palliative Care Page' />
                </Link>
            </div>
            <div className='card'>
                <img src={houseIcon} alt="House symbol" class='icon' />
                <h3>Home Health</h3>
                <p className='introduction-text'>This is a description about a service.</p>
                <Link to='/services/home-health'>
                    <ButtonPrimaryAlt content='Read more' alt='Go to Home Health Page' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ServicesStrip