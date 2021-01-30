import './contact.css';

import HeaderStrip2 from '../components/header-strip/header-strip2';
import Layout from "../components/layout"
import LocationsStrip from '../components/locations/locations';
import React from "react"
import SEO from "../components/seo"
import contact from '../images/headers/contact.png';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className='ContactPage'>
      <HeaderStrip2 
        image={contact}
        title='Contact Us'
        headline='Let us know how we can assist you'
      />
      <div className="two-column">
        <div className="title">
          <h4>We're here for you!</h4>
          <p>If you have any questions please feel free to fill out our contact form below or call us at <a href='tel:+19096444965'>909-644-4965</a>. We look forward to hearing from you and assisting you!</p>
          <hr/>
        </div>
      </div>
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default ContactPage