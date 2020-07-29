import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip from '../components/header-strip/header-strip';
import aboutImage from '../images/about-header.png';

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <HeaderStrip 
      image={aboutImage}
      title='About Charter'
      headline='Healthcare with YOU in mind at every stage'
    />
  </Layout>
)

export default AboutPage