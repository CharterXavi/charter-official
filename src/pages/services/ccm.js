import './ccm.css';

import CCMData from '../../components/data/ccm-data';
import HARP from '../../components/ccm/harp';
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import Layout from "../../components/layout"
import LocationsStrip from '../../components/locations/locations';
import React from "react"
import SEO from "../../components/seo"
import harpImg from '../../images/headers/harp.png';

const CCMPage = () => (
  <Layout>
    <div className='CCMPage'>
      <SEO title="Complex Care Management | Transitional Care & Advanced Care Planning" />
      <HeaderStrip2 image={harpImg} title='Complex Care Management' headline='Reducing hospital readmissions and costs through transitional care and advance care planning' />
      <div className='two-column'>
        <div className="title">
          <h4>Keeping our patients out of the hospital</h4>
          <hr/>
        </div>
        <div className="content">
          <div className="left">        
            <h6>What is Complex Care Management?</h6>
            <p>Complex Care Management, or CCM, is a collection of programs and initiatives designed for patients with serious medical needs, who are susceptible to more frequent hospitalization. The goal of CCM is to reduce hospitalizations and emergency room visits by bridging gaps in care through in-home provider and nursing visits, connecting members to specialists, identifying social determinants of care, providing medication reconciliation and medication changes as indicated as well as providing 24/7 access to care through our inhouse triage team.</p>
            <p>In short, this program aims to improve communication and coordination for patients' care as they are discharged from hospitals to help avoid readmission.</p>
          </div>
          <div className="right">
            <h6>Hospital Admission Reduction Program (HARP)</h6>
            <p>Our CCM program accomplishes its goals primarily through our Hospitalization Admission Reduction Program (HARP), consisting of Transitional Care Management (TCM) and Advanced Care Planning (ACP).</p>
          </div>
        </div>
      </div>
      <HARP />
      <CCMData />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default CCMPage