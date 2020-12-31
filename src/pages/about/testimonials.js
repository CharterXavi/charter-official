import './testimonials.css';

import HeaderStrip2 from '../../components/header-strip/header-strip2';
import Layout from "../../components/layout";
import LocationsStrip from '../../components/locations/locations';
import QuoteMosaic from '../../components/testimonials/quote-mosaic';
import React from "react";
import SEO from "../../components/seo";
import testimonialsImg from '../../images/headers/testimonials.png';

const TestimonialsPage = () => (
  <Layout>
    <SEO title="Testimonials" />
    <div className='TestimonialsPage'>
        <HeaderStrip2 title='Testmonials' headline="Kind words from our patients" image={testimonialsImg} />
        <div className='two-column'>
          <div className='title'>
            <h4>Kind words from our patients</h4>
            <hr/>
          </div>
          <div className='content'>
            <div className='left'>
              <h6>Making a difference</h6>
              <p>We work hard, day and night, to ensure the highest quality care and the greatest satisfaction for each and every one of our patients. In doing so, nothing motivates us to keep working diligently more than the kind feedback and gratitude from our patients, their famililes, and their loved ones.</p>
            </div>
            <div className='right'>
              <h6>Testimonials</h6>
              <p>We’re excited to be able to share that joy with you - see for yourself what people have to say about Charter!</p>
            </div>
          </div>
        </div>
        <QuoteMosaic />
        <LocationsStrip svg={true}/>
    </div>
  </Layout>
)

export default TestimonialsPage