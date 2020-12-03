import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import acuteImg from '../../images/headers/acute-care.png';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import './acute-care.css';

const AcuteCarePage = () => (
  <Layout>
    <div className='AcuteCarePage'>
      <SEO title="Acute Care" />
      <HeaderStrip2 image={acuteImg} title='Acute or Hospital-Based Care' headline="Quality solutions for urgent matters" />
      <div className='two-column'>
        <div className="title">
          <h4>We're ready for anything</h4>
          <hr/>
          <p>We're prepared to assist our patients before, during, and after their post-acute care journey.</p>
        </div>
        <div className="content">
          <div className="left">
            <h6>Navigator Program</h6>
            <p>
              We employ special Nurse Navigators to engage patients at the bedside before they ever leave the hostpial. 
              Starting communication from the inpatient setting allows for increased compliance and engagement in the post acute setting. 
            </p>
            <p>  
              The nurse navigator provides insight into the post-acute needs of the patient and works closely 
              with the inpatient case management team to ensure a smooth and appropriate transition from hospital 
              to either home or post acute facility.
            </p>
          </div>
          <div className="right">
            <h6>General Inpatient Care (GIP)</h6>
            <p>
              General inpatient care (GIP) is a short-term care hospice program focused on providing pain/symptom 
              management that cannot be accomplished in another setting. GIP can be provided in the hospital, 
              SNF or hospice inpatient facility.
            </p>
          </div>
        </div>
      </div>
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default AcuteCarePage