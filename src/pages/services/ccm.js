import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import harpImg from '../../images/headers/harp.png';
import TCM from '../../components/harp/tcm';
import ACP from '../../components/harp/acp';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import './ccm.css';

const CCMPage = () => (
  <Layout>
    <div className='CCMPage'>
      <SEO title="CCM" />
      <HeaderStrip image={harpImg} title='C.C.M.' headline='Complex Care Management' />
      <div className='intro'>
        <h2>Keeping our patients out of the hospital</h2>
        <p>Our H.A.R.P. program, or "Hospital Admission Reduction Program", consists of two programs aimed at most effectively preventing our patients from going back to the hospital after they are discharged. This includes our Transitional Care Management (TCM) program and our Advanced Care Planning (ACP) program.</p>
      </div>
      <TCM />
      <ACP />
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default CCMPage