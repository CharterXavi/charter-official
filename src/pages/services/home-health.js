import './home-health.css';

import Advantages from '../../components/home-health/advantages';
import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import Layout from "../../components/layout";
import LocationsStrip from '../../components/locations/locations';
import React from "react";
import SEO from "../../components/seo";
import TestimonialsStrip from '../../components/testimonials/testimonials';
import homeHealth from '../../images/headers/home-health.png';

const HomeHealthPage = () => (
  <Layout>
    <div className='HomeHealthPage'>
      <SEO title="Skilled Home Health Aide and Nurse Services" />
      <HeaderStrip2 image={homeHealth} title='Skilled Home Health' headline='Convenient & quality health services right at home' />
      <div className='two-column'>
        <div className="title">
          <h4>Meeting you where are</h4>
          <hr/>
        </div>
        <div className="content">
          <div className="left">
            <h6>What is Skilled Home Health?</h6>
            <p>
              Skilled Home Health offers a wide range of home health care services delivered in the convenience and privacy of your
              home by specially trained healthcare professionals. Our home health aide services can help shorten or avoid extended 
              hospital and skilled nursing facility stays. Whether you are recovering from surgery, dealing with an illness, or
              living with a chronic health condition, Charter Home Health can provide the home health nursing, rehabilitation, and 
              disease management assistance you need. We work hard to promote a caring and stress free environment, which is important
              to your recovery and well-being.
            </p>
            <p>
              Our innovation and dedication to continuity of care makes us a top choice among area physicians, hospitals, and nursing
              facilities. We understand each individual has unique needs, and believe every patient deserves to have the best health
              care available. All the services we offer are designed to help enhance our patients' quality of life, and are conveniently
              covered by Medicare and most private insurances.
            </p>
            <ButtonPrimaryAlt content='See Our locations' link='/locations' />
          </div>
          <div className="right">
            <h6>Home Health Services</h6>
            <p>We provide a vast selection of healthcare services in our home health programs. Making sure each patient has all of their needs met is crucial to ensuring the highest quality care. This includes the following and more:</p>
            <ul>
                <li>Skilled Nursing Care</li>
                <li>Intravenous Therapy</li>
                <li>Wound Care</li>
                <li>Foley Catheter Care</li>
                <li>Pain Management</li>
                <li>Medication Management</li>
                <li>Home Safety Evaluations</li>
                <li>Physical Therapy</li>
                <li>Occupational Therapy</li>
                <li>Speech Therapy</li>
                <li>Medical Social Services</li>
                <li>Home Health Aide Services</li>
                <li>Dietary and Nutrition Counseling</li>
            </ul>
          </div>
        </div>
      </div>
      <Advantages />
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default HomeHealthPage