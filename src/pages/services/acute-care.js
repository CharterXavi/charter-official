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
          <p>Although our programs are largely aimed at reducing hospital visits and lowering costs, we're prepared in the case of emergency.</p>
        </div>
        <div className="content">
          <div className="left">
            <h6>BPCI</h6>
            <p></p>
          </div>
          <div className="right">
            <h6>General Inpatient Care (GIP)</h6>
            <p></p>
          </div>
        </div>
      </div>
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default AcuteCarePage