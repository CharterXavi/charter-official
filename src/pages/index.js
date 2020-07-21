import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStrip from '../components/hero/hero'
import AboutStrip from '../components/about/about'
import ServicesStrip from '../components/services/services'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroStrip />
    <AboutStrip />
    <ServicesStrip />
  </Layout>
)

export default IndexPage
