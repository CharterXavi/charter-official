import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderStrip from '../components/header-strip/header-strip';
import contact from '../images/headers/contact.png';
import './contact.css';
import LocationsStrip from '../components/locations/locations';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <HeaderStrip 
      image={contact}
      title='Contact Us'
      headline='Let us know how we can assist you'
    />
    <div className='intro'>
      <h1>We're here for you</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo pharetra, morbi pellentesque. Duis semper tellus velit, aliquam non. Blandit proin nulla erat lorem blandit mauris molestie pellentesque gravida. Interdum eget leo sem sed massa etiam congue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo pharetra, morbi pellentesque. Duis semper tellus velit, aliquam non. Blandit proin nulla erat lorem blandit mauris molestie pellentesque gravida. Interdum eget leo sem sed massa etiam congue.</p>
    </div>
    <LocationsStrip />
  </Layout>
)

export default ContactPage