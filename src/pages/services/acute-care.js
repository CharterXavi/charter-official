import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import harpImg from '../../images/headers/harp.png';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import './acute-care.css';

const AcuteCarePage = () => (
  <Layout>
    <div className='AcuteCarePage'>
      <SEO title="Acute Care Page" />
      <HeaderStrip image={harpImg} title='Acute/Hospital-Based Care' headline="Quality solutions for urgent matters" />
      <div className='intro'>
        <h2>We're ready for anything</h2>
        <p>Our H.A.R.P. program, or "Hospital Admission Reduction Program", consists of two programs aimed at most effectively preventing our patients from going back to the hospital after they are discharged. This includes our Transitional Care Management (TCM) program and our Advanced Care Planning (ACP) program.</p>
      </div>

      
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default AcuteCarePage