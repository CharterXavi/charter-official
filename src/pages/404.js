import React from "react";
import {Link} from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";
import errorImage from '../images/404.png';
import './404.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className='error-wrapper'>
      <img src={errorImage} alt="Error image - page not found" />
      <h1>NOT FOUND</h1>
      <p>The page you're looking for doesn't seem to be available. We're sorry for the inconvenience!</p>
      <Link to='/'>Return Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
