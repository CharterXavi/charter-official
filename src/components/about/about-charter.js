import React, {useEffect} from "react";
import './about-charter.css';
import bookIcon from '../../images/iconography/about/book.png';
import checkboxIcon from '../../images/iconography/about/checkbox.png';
import targetIcon from '../../images/iconography/about/target.png';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutCharter = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
});


  return (
    <div className='AboutCharter'>
      <h2>Who we are</h2>
      <div className='about-card-wrapper'>
        <div className='about-card' data-aos='fade-up' data-aos-duration='900'>
              <img src={targetIcon} alt="Target" />
              <h3>Our Mission</h3>
              <p>Charter is committed to delivering high quality services that enhance the post acute care continuum in its communities by providing compassionate, innovative, and accessible healthcare solutions for patients and their families.</p>
              <p>Above all, we strive to improve patient outcomes and quality of care while reducing ​the total cost of care. ​</p>
          </div>
          <div className='about-card' data-aos='fade-up' data-aos-duration='1300'>
              <img src={bookIcon} alt="Book" />
              <h3>Our Story</h3>
              <p>Charter is committed to delivering high quality services that enhance the post acute care continuum in its communities by providing compassionate, innovative, and accessible healthcare solutions for patients and their families.</p>
              <p>We strive to improve patient outcomes and quality of care while reducing ​the total cost of care by: ​</p>
          </div>
          <div className='about-card' data-aos='fade-up' data-aos-duration='1800'>
              <img src={checkboxIcon} alt="Checkbox" />
              <h3>Our Commitment</h3>
              <p>We're committed to instilling compassion and sensitivity in our teams for our patients, families, and peers. We believe in the power of truly, genuinely being there for those that depend on us and our services.</p>
              <p>But that's not all. We're committed as well to training and education, creating an environment of learning, and fostering healthy working relationships. </p>
          </div>
      </div>
    </div>
  )
}

export default AboutCharter;

