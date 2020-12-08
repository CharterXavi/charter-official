import React, {useEffect} from "react";
import './about-charter.css';
import AOS from "aos";
import "aos/dist/aos.css";
import TargetIcon from '../icons/target';
import BookIcon from "../icons/book";
import CheckboxIcon from "../icons/checkbox";

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
          <p>As we continue extending our reach across southern California, we're also actively opening new doors in other states like Colorado, Nevada, Utah, Arizona, and beyond.</p>
        </div>
        <div className='about-card' data-aos='fade-up' data-aos-duration='1800'>
          <CheckboxIcon />
          <h6>Our Commitment</h6>
          <p>We're committed to instilling compassion and sensitivity in our teams for our patients, families, and peers. We believe in the power of truly, genuinely being there for those that depend on us and our services.</p>
          <p>But that's not all. We're committed as well to training and education, creating an environment of learning, and fostering healthy working relationships. </p>
        </div>
      </div>
    </div>
  )
}

export default AboutCharter;

