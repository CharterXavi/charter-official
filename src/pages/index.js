import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroStrip from '../components/hero/hero'
import AboutStrip from '../components/about/about'
import ServicesStrip from '../components/services/services'
import VideoStrip from '../components/video/video'
import TestimonialsStrip from '../components/testimonials/testimonials'
import OurTeamStrip from '../components/our-team/our-team'
import LocationsStrip from '../components/locations/locations'
import DataStrip from '../components/data/data'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroStrip />
    <AboutStrip />
    <ServicesStrip />
    <VideoStrip />
    <TestimonialsStrip />
    <DataStrip />
    <OurTeamStrip />
    <LocationsStrip />
  </Layout>
)

export default IndexPage
