import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import harpImg from '../../images/headers/harp.png';

const HarpPage = () => (
  <Layout>
    <SEO title="HARP Page" />
    <HeaderStrip image={harpImg} title='H.A.R.P.' headline='Health and Recovery Plans' />
    <h1>H.A.R.P.</h1>
    <p className='introduction-text'>We're devoted to our patients.</p>
  </Layout>
)

export default HarpPage