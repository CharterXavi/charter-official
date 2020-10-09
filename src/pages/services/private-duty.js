import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import privateDutyImage from '../../images/headers/private-duty.png';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import './private-duty.css';

const PrivateDutyPage = () => (
  <Layout>
    <div className='PrivateDutyPage'>
      <SEO title="Private Duty Page" />
      <HeaderStrip image={privateDutyImage} title='Private Duty Nursing' headline="Addressing our patients' daily needs" />
      <div className='intro'>
        <h2>Helping with daily challenges</h2>
        <p>Our H.A.R.P. program, or "Hospital Admission Reduction Program", consists of two programs aimed at most effectively preventing our patients from going back to the hospital after they are discharged. This includes our Transitional Care Management (TCM) program and our Advanced Care Planning (ACP) program.</p>
      </div>

      
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PrivateDutyPage