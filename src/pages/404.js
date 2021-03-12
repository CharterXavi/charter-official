import './404.css';

import ButtonPrimary from '../components/buttons/button-primary'
import Layout from "../components/layout";
import {Link} from 'gatsby';
import React from "react";
import SEO from "../components/seo";
import compass from '../images/charter-compass-v6-white.webp'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className='error-wrapper'>
      <img src={compass} alt="Charter Compass" className='logo'/>
      <h3>404 | NOT FOUND</h3>
      <h6 style={{color: 'white'}}>The page you're looking for doesn't seem to be available. We're sorry for the inconvenience!</h6>
      <ButtonPrimary link='/' content='Return home' />
    </div>
  </Layout>
)

export default NotFoundPage
