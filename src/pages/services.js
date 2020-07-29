import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip from '../components/header-strip/header-strip';
import servicesImage from '../images/services-header.png';

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <HeaderStrip 
      image={servicesImage}
      title='Our Services'
      headline='Exceptional Care & Life Enhancing Services'
    />
  </Layout>
)

export default ServicesPage