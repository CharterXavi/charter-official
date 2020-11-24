import React, {useEffect} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip2 from '../components/header-strip/header-strip2';
import servicesImage from '../images/headers/services.png';
import ServicesStrip2 from '../components/services/services2';
import LocationsStrip from '../components/locations/locations';
import TestimonialsStrip from '../components/testimonials/testimonials';
import AOS from "aos";
import "aos/dist/aos.css";
import './services.css';
import DataStrip from '../components/data/data';

const ServicesPage = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
  
  return (
    <Layout>
      <div className='ServicesPage'>
        <SEO title="Services" />
        <HeaderStrip2 
          image={servicesImage}
          title='Our Services'
          headline='Exceptional Care & Life Enhancing Services'
        />
        <div className='two-column'>
          <div className='title'>
            <h4>Exceptional Care & Life Enhancing Services</h4>
            <hr/>
          </div>
          <div className='content'>
            <div className='left'>
              <h6>We've got you covered</h6>
              <p>At Charter Healthcare Group we believe in making a positive change in the lives of our patients and their families. For over ten years, we have been committed to providing exceptional care and life enhancing services to people all throughout the greater Los Angeles area. With a wide variety of programs, we're equipped to care for patients with varying conditions and needs.</p>
            </div>
            <div className='right'>
              <h6>What we offer</h6>
              <p>We have six main service offerings: private duty nursing, skilled home health care, palliative care, complex care management (CCM), hospice, and acute/hospital based care. </p>
            </div>
          </div>
        </div>
        <ServicesStrip2 />
        <DataStrip />
        <TestimonialsStrip svg={false} />
        <LocationsStrip svg={true} />
      </div>
    </Layout>
  )
}

export default ServicesPage