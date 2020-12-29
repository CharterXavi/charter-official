import React from "react";
import {Link} from 'gatsby';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import errorImage from '../../images/404.png';
import './privacy-policy.css';

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <div className='error-wrapper'>
      <img src={errorImage} alt="Error - page not found" />
      <h3>NOT FOUND</h3>
      <h6>The page you're looking for doesn't seem to be available. We're sorry for the inconvenience!</h6>
      <Link to='/'>Return Home</Link>
    </div>
  </Layout>
)

export default PrivacyPage