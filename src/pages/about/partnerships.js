import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import partnershipsImg from '../../images/headers/partnerships.png';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import DataStrip from '../../components/data/data';
import LocationsStrip from '../../components/locations/locations';
import Partners from '../../components/about/partners';
import './partnerships.css';

const PartnershipsPage = () => (
  <Layout>
    <div className='PartnershipsPage'>
        <SEO title="Partnerships Page" />
        <HeaderStrip image={partnershipsImg} title='Partnerships' headline="Working together for the best patient outcomes" />
        <div className='intro'>
            <h2>Collaboration is key</h2>
            <p>Every patient's care requires a collaborative effort of multiple different providers, staff, and organizations. At Charter, we know that efficient partnerships and trusted relationships are crucial to providing the best healthcare possible. We value our partnerships and we are always looking to build new relationships in the communities we serve.</p>
        </div>
        <Partners />
        <DataStrip />
        <TestimonialsStrip />
        <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PartnershipsPage;