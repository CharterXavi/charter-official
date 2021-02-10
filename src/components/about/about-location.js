import './about-location.css'

import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import React from 'react'

const AboutLocationStrip = (props) => {
  return (
    <div className='AboutLocationStrip'>
      <div className='two-column'>
        <div className='title'>
          <h3>{props.title}</h3>
          <hr/>
        </div>
        <div className='content'>
            <div className='left'>
                {props.leftContent}
            </div> 
            <div className='right'>   
                {props.rightContent}
            </div>
        </div>
        <ButtonPrimaryAlt content='Get to know Charter' link='/about' />
      </div>
    </div>
  )
}

export default AboutLocationStrip