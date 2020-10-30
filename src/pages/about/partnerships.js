import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import partnershipsImg from '../../images/headers/partnerships.png';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import DataStrip from '../../components/data/data';
import LocationsStrip from '../../components/locations/locations';
import Partners from '../../components/about/partners';
import './partnerships.css';
import ButtonPrimary from "../../components/buttons/button-primary";
import networkIcon from '../../images/iconography/careers/hiring.png';

const PartnershipsPage = () => (
  <Layout>
    <SEO title="Partnerships" />
    <div className='PartnershipsPage'>
        <HeaderStrip2 image={partnershipsImg} title='Partnerships' headline="Working together for the best patient outcomes" />
        <div className='intro'>
            <h2>Collaboration is key</h2>
            <p>Every patient's care requires a collaborative effort of multiple different providers, staff, and organizations. At Charter, we know that efficient partnerships and trusted relationships are crucial to providing the best healthcare possible. We value our partnerships and we are always looking to build new relationships in the communities we serve.</p>
        </div>
        <Partners />
        <DataStrip />
        <TestimonialsStrip />
        <div className='intro become-partner'>
            <img src={networkIcon} alt="Network" />
            <h2>Partner with us!</h2>
            <p>Interested in becoming a partner? We'd love to hear more about how we might be able to work together to serve our patients. Head over to our contact page and fill out the form at the bottom - we look forward to connecting with you.</p>
            <ButtonPrimary content='Become a partner' link='/contact'/>
        </div>
        <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PartnershipsPage;