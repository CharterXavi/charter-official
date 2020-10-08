import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import testimonialsImg from '../../images/headers/testimonials.png';
import HeaderStrip from '../../components/header-strip/header-strip';
import QuoteMosaic from '../../components/testimonials/quote-mosaic';
import Partners from '../../components/about/partners';
import LocationsStrip from '../../components/locations/locations';

import './testimonials.css';

const TestimonialsPage = () => (
  <Layout>
    <SEO title="Testimonials Page" />
    <div className='TestimonialsPage'>
        <HeaderStrip title='Testmonials' headline="Kind words from our patients" image={testimonialsImg} />
        <div className='intro'>
          <h2>Kind words from our patients</h2>
          <p>We work hard, day and night, to ensure the highest quality care and the greatest satisfaction for each and every one of our patients. In doing so, nothing motivates us to keep working diligently more than the kind feedback and gratitude from our patients, their famililes, and their loved ones.</p>
          <p>We’re excited to be able to share that joy with you - see for yourself what people have to say about Charter!</p>
        </div>
        <QuoteMosaic />
        <LocationsStrip svg={true}/>
    </div>
  </Layout>
)

export default TestimonialsPage