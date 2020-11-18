import React from 'react'
import './about.css'
import ButtonPrimaryAlt from '../buttons/button-primary-alt';

const AboutStrip = () => {
  return (
    <div className='AboutStrip'>
      <div className='two-column'>
        <div className='title'>
          <h2>The Charter Difference</h2>
          <hr/>
        </div>
        <div className='content'>
          <div className='left'>
              <h5>Passion & experience</h5>
              <p>Our hard work and dedication have earned us a reputation as a premier provider of  hospice, home health, and transitional care in the communities we serve. We have a team of highly experienced and compassionate individuals who are ready to help make sure you and your loved one get the care you deserve. All of our programs are individually customized to meet our patients' changing needs. Under our services, you will have your own personal plan of care and a team of caring individuals there to ensure you have a meaningful and comfortable experience. So let us make a difference in your life today!</p>
          </div> 
          <div className='right'>   
              <h5>Committed to changing lives</h5>
              <p>At Charter Healthcare Group we believe in making a positive change in the lives of our patients and their families. For over ten years, we have been committed to providing exceptional care and life enhancing services to people all throughout San Bernardino, Riverside, and parts of Los Angeles and Orange counties.</p>
          </div>
        </div>
        <ButtonPrimaryAlt content='Get to know Charter' link='/about' />
      </div>
    </div>
  )
}

export default AboutStrip