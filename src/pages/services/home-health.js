import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import homeHealth from '../../images/headers/home-health.png';
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import HomeServices from '../../components/home-health/home-services';
import './home-health.css';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import Advantages from '../../components/home-health/advantages';

const HomeHealthPage = () => (
  <Layout>
    <div className='HomeHealth'>
      <SEO title="Skilled Home Health" />
      <HeaderStrip2 image={homeHealth} title='Skilled Home Health' headline='Convenient & quality healthcare right at home' />
      <div className='intro'>
        <h2>Meeting you where you're at</h2>
        <p>Home Health offers a wide range of health care services delivered in the convenience and privacy of your home by specially trained healthcare professionals. It can help shorten or avoid extended hospital and skilled nursing facility stays. Whether you are recovering from surgery, dealing with an illness, or living with a chronic health condition,    Charter Home Health can provide the home-based skilled nursing, rehabilitation, and disease management assistance you need. We work hard to promote a caring and stress free environment, which is important to your recovery and well-being.</p>
        <p>Our innovation and dedication to continuity of care makes us a top choice among area physicians, hospitals, and nursing facilities. We understand each individual has unique needs, and believe every patient deserves to have the best health care available. All the services we offer are designed to help enhance our patients' quality of life, and are conveniently covered by Medicare and most private insurances.</p>
      </div>
      <HomeServices />
      <Advantages />
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default HomeHealthPage