import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import harpImg from '../../images/headers/harp.png';
import HARP from '../../components/harp/harp';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import './ccm.css';

const CCMPage = () => (
  <Layout>
    <div className='CCMPage'>
      <SEO title="CCM" />
      <HeaderStrip2 image={harpImg} title='C.C.M.' headline='Complex Care Management' />
      <div className='intro'>
        <h2>Keeping our patients out of the hospital</h2>
        <h5>What is CCM?</h5>
        <p>Complex Care Management, or CCM, is a collection of programs and initiatives designed for patients with serious medical needs, who are susceptible to more frequent hospitalization. The goal of CCM is to reduce hospitalizations and emergency room visits by bridging gaps in care through in-home provider and nursing visits, connecting members to specialists, identifying social determinants of care, providing medication reconciliation and medication changes as indicated as well as providing 24/7 access to care through our inhouse triage team. In short, this program aims to improve communication and coordination for patients' care as they are discharged from hospitals to help avoid readmission.</p>
        <h5>Hospital Admission Reduction Program (HARP)</h5>
        <p>Our CCM program accomplishes its goals primarily through our H.A.R.P. model (Hospitalization Admission Reduction Program) consisting of Transitional Care Management (TCM) and Advanced Care Planning (ACP).</p>
      </div>
      <HARP />
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default CCMPage