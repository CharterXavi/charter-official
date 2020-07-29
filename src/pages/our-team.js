import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import teamImage from '../images/our-team-header.png';
import HeaderStrip from '../components/header-strip/header-strip';
import OurTeamStrip from '../components/our-team/our-team';
import LocationsStrip from '../components/locations/locations';

const OurTeamPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <HeaderStrip 
      image={teamImage}
      title='Our Team'
      headline="We're blessed to get to work with the best"
    />
    <OurTeamStrip />
    <LocationsStrip />
  </Layout>
)

export default OurTeamPage