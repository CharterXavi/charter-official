import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import LocationsStrip from '../../components/locations/locations';
import volunteeringImg from '../../images/headers/volunteer.png';
import './volunteering.css';

const VolunteeringPage = () => (
  <Layout>
    <div className='VolunteeringPage'>
        <SEO title="Volunteering" />
        <HeaderStrip2 image={volunteeringImg} title='Volunteering' headline='Treatment for the soul' />
        <div className='intro'>
          <h2>Lending a hand</h2>
          <p>We offer two different volunteering programs at Charter Healthcare Group.</p>
        </div>
        <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default VolunteeringPage;