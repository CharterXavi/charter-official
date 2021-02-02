import './about-charter.css';
import "aos/dist/aos.css";

import React, {useEffect} from "react";

import AOS from "aos";
import BookIcon from "../icons/book";
import CheckboxIcon from "../icons/checkbox";
import TargetIcon from '../icons/target';

const AboutCharter = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
});


  return (
    <div className='AboutCharter'>
      <h4>Charter Healthcare Group</h4>
      <div className='about-card-wrapper'>
        <div className='about-card' data-aos='fade-up' data-aos-duration='900'>
          <TargetIcon />
          <h6>Our Mission</h6>
          <p>Charter is committed to delivering high quality services that enhance the post acute care continuum in its communities by providing compassionate, innovative, and accessible healthcare solutions for patients and their families.</p>
          <p>Above all, we strive to improve patient outcomes and quality of care while reducing ​the total cost of care. ​</p>
        </div>
        <div className='about-card' data-aos='fade-up' data-aos-duration='1300'>
          <BookIcon />
          <h6>Our Story</h6>
          <p>From the moment of conception, Charter has been a place where people care deeply about their work and their patients. Since we first obtained our accrediations and certifications in 2007, we've been expanding and growing rapidly to meet the needs of our communities at home and beyond.</p>
          <p>
            We continue to extend our reach across southern California, and have opened new doors in Colorado, Nevada, Utah, Arizona, and Nebraska.
            We look forward to expanding our access to additional states and territories in the future to meet the demand of needed patient care.
          </p>
        </div>
        <div className='about-card' data-aos='fade-up' data-aos-duration='1800'>
          <CheckboxIcon />
          <h6>Our Commitment</h6>
          <p>We're committed to instilling compassion and sensitivity in our teams for our patients, families, and peers. We believe in the power of genuinely being there for those that depend on us and our services.</p>
          <p>We're also committed to continuous learning and development and fostering healthy working relationships.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCharter;

