import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import LocationsStrip from '../../components/locations/locations';
import volunteeringImg from '../../images/headers/volunteer.png';
import VolunteerStrip from '../../components/careers/volunteer-strip';
import './volunteering.css';

const VolunteeringPage = () => (
  <Layout>
    <div className='VolunteeringPage'>
        <SEO title="Volunteering/Interning" />
        <HeaderStrip2 image={volunteeringImg} title='Volunteering & Interning' headline='Supporting our patients' />
        <div className='intro'>
          <h2>Lending a hand at Charter</h2>
          <p>Volunteers and interns play a crucial role in what we do here at Charter. These supportive roles allow us to extend the reach and quality of the care we provide our patients, while also providing the workers with rich, hands-on experience in the field that they feel interested in or called to.</p>
        </div>
        <VolunteerStrip />
        <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default VolunteeringPage;