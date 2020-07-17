import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStrip from '../components/hero/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroStrip />
    <p className='introduction-text'>Throughout the many stages of post-accute care, we put you first.</p>
  </Layout>
)

export default IndexPage
