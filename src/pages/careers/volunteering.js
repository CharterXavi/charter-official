import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import volunteeringImg from '../../images/headers/volunteer.png';
import './volunteering.css';

const VolunteeringPage = () => (
  <Layout>
    <div className='VolunteeringPage'>
        <SEO title="Volunteering" />
        <HeaderStrip image={volunteeringImg} title='Volunteering' headline='Treatment for the soul' />

    </div>
  </Layout>
)

export default VolunteeringPage;