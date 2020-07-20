import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStrip from '../components/hero/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroStrip />
  </Layout>
)

export default IndexPage
