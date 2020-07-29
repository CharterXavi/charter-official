import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip from '../components/header-strip/header-strip';
import careersImage from '../images/careers-header.png';

const CareersPage = () => (
  <Layout>
    <SEO title="Careers" />
    <HeaderStrip
      image={careersImage}
      title='Careers'
      headline='Come work for a passionate, people-driven company'
    />
  </Layout>
)

export default CareersPage