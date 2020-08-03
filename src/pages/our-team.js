import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import teamImage from '../images/our-team-header.png';
import HeaderStrip from '../components/header-strip/header-strip';
import LocationsStrip from '../components/locations/locations';
import TeamGrid from '../components/our-team/team-grid';
import './our-team.css';

const OurTeamPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <HeaderStrip 
      image={teamImage}
      title='Our Team'
      headline="We're blessed to get to work with the best"
    />
    <div className='intro'>
      <h2>Exceptional Care & Life Enhancing Services</h2>
      <p>At Charter Healthcare Group we believe in making a positive change in the lives of our patients and their families. For over ten years, we have been committed to providing exceptional care and life enhancing services to people all throughout the greater Los Angeles area.</p>
      <p>We have four main service offerings: home health care, palliative care, hospital admission reduction program (H.A.R.P.), and hospice.</p>
    </div>
    <TeamGrid />
    <LocationsStrip />
  </Layout>
)

export default OurTeamPage