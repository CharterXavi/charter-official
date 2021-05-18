import './about.css'

import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import React from 'react'

const AboutStrip = () => {
  return (
    <div className='AboutStrip'>
      <div className='two-column'>
        <div className='title'>
          <h3>The Charter Difference</h3>
          <hr/>
        </div>
        <div className='content'>
          <div className='left'>
              <h6>Passion & experience</h6>
              <p>Through years of hard work and dedication, we've earned our reputation as a premier provider of hospice, home health, and transitional care in the communities we serve.
                We have the experience and compassion required to make sure you and your loved one get the care you deserve. Our programs are individually tailored to meet our patients' changing needs. 
                Under our services, you will have your own personal plan of care and a team of dedicated professionals at your side to ensure the most meaningful and comfortable experience possible. 
                Let us make a difference in your life today!</p>
          </div> 
          <div className='right'>   
              <h6>Committed to changing lives</h6>
              <p>
                At Charter Healthcare Group, we believe in making a positive change in the lives of our patients and their families. 
                For over ten years, we have been committed to providing exceptional care and life enhancing services to people throughout San Bernardino, Riverside, and parts of Los Angeles and Orange counties.
                We don't plan on stopping there!
              </p>
          </div>
        </div>
        <div className="button-wrapper">
          <ButtonPrimaryAlt content='Get to know Charter' link='/about' />
          <ButtonPrimaryAlt content='See Our locations' link='/locations' />
        </div>
      </div>
    </div>
  )
}

export default AboutStrip