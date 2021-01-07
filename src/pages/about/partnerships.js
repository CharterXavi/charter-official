import './partnerships.css';

import ButtonPrimary from "../../components/buttons/button-primary";
import DataStrip from '../../components/data/data';
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import Layout from "../../components/layout"
import LocationsStrip from '../../components/locations/locations';
import Partners from '../../components/about/partners';
import React from "react"
import SEO from "../../components/seo"
import TestimonialsStrip from '../../components/testimonials/testimonials';
import partnershipsImg from '../../images/headers/partnerships.png';

const PartnershipsPage = () => (
  <Layout>
    <SEO title="Partnerships" />
    <div className='PartnershipsPage'>
        <HeaderStrip2 image={partnershipsImg} title='Partnerships' headline="Working together for the best patient outcomes" />
        <div className='two-column'>
            <div className='title'>
              <h4>Partnerships at Charter</h4>
              <hr/>
            </div>
            <div className='content'>
              <div className='left'>
                <h6>Collaboration is key</h6>
                <p>Every patient's care requires a collaborative effort of multiple different providers, staff, and organizations. At Charter, we know that efficient partnerships and trusted relationships are crucial to providing the best healthcare possible. We value our partnerships and we are always looking to build new relationships in the communities we serve.</p>
                <h6>Partner with us!</h6>
                <p>Interested in becoming a partner? Charter is already a trusted partner to many of the country's notable healthcare providers, but we don't want to stop there. We'd love to hear more about how we might be able to work together to serve our patients.</p>
                <ButtonPrimary content='Become a partner' link='/contact'/>
              </div>
              <div className='right'>
                <h6>BPCI Program</h6>
                <p>
                  The Bundled Payments for Care Improvement Advanced (BPCI) program is an incentivized managed care program by the Centers for Medicare and Medicaid Services (CMS) for Medicare patients that hospitals can opt into. 
                  Hospitals that opt in to the program are tasked with managing the patient's care for 90 days starting from the hospital discharge date. 
                  At Charter, we help work with these participating hospitals to manage these patients in the home and SNF setting while also providing a nurse navigator to manage patients from the inpatient setting as well. 
                  Patients benefit because they get additional post acute services for 90 days after discharge. As we work hard at Charter to lower the overall costs to patients after hospitalization through our innovative care, the hospital gets a payout from CMS.
                  In short, hospitals are financially incentivized to rely on innovative care providers like Charter to help provide a better, more consistent continuity of care after patients are discharged.  
                </p>
              </div>
            </div>
        </div>
        <Partners />
        <DataStrip />
        <TestimonialsStrip />
        <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PartnershipsPage;