import React, {useEffect} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip from '../components/header-strip/header-strip';
import servicesImage from '../images/headers/services.png';
import ServicesStrip2 from '../components/services/services2';
import LocationsStrip from '../components/locations/locations';
import TestimonialsStrip from '../components/testimonials/testimonials';
import ButtonPrimary from '../components/buttons/button-primary';
import AOS from "aos";
import "aos/dist/aos.css";
import './services.css';
import PatientPath from '../components/services/patient-path';

const ServicesPage = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
  
  return (
    <Layout>
      <div className='ServicesPage'>
        <SEO title="Services" />
        <HeaderStrip 
          image={servicesImage}
          title='Our Services'
          headline='Exceptional Care & Life Enhancing Services'
        />
        <div className='intro'>
            <h2>Exceptional Care & Life Enhancing Services</h2>
            <p>At Charter Healthcare Group we believe in making a positive change in the lives of our patients and their families. For over ten years, we have been committed to providing exceptional care and life enhancing services to people all throughout the greater Los Angeles area.</p>
            <p>We have four main service offerings: home health care, palliative care, hospital admission reduction program (H.A.R.P.), and hospice. </p>
        </div>
        <ServicesStrip2 />
        <div className='intro bereavement'>
            <h2>Bereavement</h2>
            <p>At Charter, we stand by our patients and their loved ones wherever possible. An especially important way to do that is through bereavement support and services. When grief and loss occur, life can get a lot harder and we want to make sure we’re helping you navigate it all.</p>
            <ButtonPrimary content='Visit Bereavement Page' link='/services/bereavement' />
        </div>
        <PatientPath />
        <TestimonialsStrip svg={true} />
        <LocationsStrip svg={true} />
      </div>
    </Layout>
  )
}

export default ServicesPage