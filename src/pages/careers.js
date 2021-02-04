import "aos/dist/aos.css";
import './careers.css';

import React, {useEffect} from "react";

import AOS from "aos";
import AwardIcon from '../components/icons/award';
import ClockIcon from '../components/icons/clock';
import DemographicsChart from '../components/data/demographics';
import HeaderStrip2 from '../components/header-strip/header-strip2';
import HealthcareIcon from '../components/icons/healthcare';
import JoinUsStrip from '../components/careers/join-us.js';
import Layout from "../components/layout";
import LocationsStrip from '../components/locations/locations';
import OurTeamStrip from '../components/our-team/our-team';
import SEO from "../components/seo";
import careersImage from '../images/headers/careers.png';

const CareersPage = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
  return (
    <Layout>
      <div className="CareersPage">
        <SEO title="Careers" />
        <HeaderStrip2
          image={careersImage}
          title='Careers'
          headline='Come work with us!'
        />
        <div className='two-column'>
          <div className="title">
            <h3>Our Charter Identity</h3>
            <hr/>
            <p>We're proud to be a part of what is undoubtedly a unique workforce. We've very intentionally built up our company with the most passionate and driven people we could find. Regardless of discipline or department, we are a company that truly invests in our people and what we do, and we never lose sight of the impact we're making.</p>
          </div>
          <div className="content">
            <div className="left">
            </div>
            <div className="right">
            </div>
          </div>
        </div>
        <div className='two-column benefits'>
          <div className="title">
            <h4>We take care of our own</h4>
            <hr/>
          </div>
          <div className="content">
            <div className="left">
              <h6>Competitive Benefits</h6>
              <p>We know that empowering our employees with competitive pay, benefits, and flexibility helps the company thrive.</p>
            </div>
            <div className="right">
              <h6>Mobility & recognition</h6>
              <p>We love to recognize those doing exceptional work, to make sure they know we appreciate them, and to promote from within often.</p>
            </div>
          </div>
          <div className='benefits-wrapper'>
            <div className='benefits-card' data-aos='fade-up' data-aos-duration='800'>
              <AwardIcon />
              <h6 className='detail-title'>Generous Incentives</h6>
              <p className='detail-text'>We provide 401K company matching, referral and retention bonuses, an Employee of the Month program, anniversary & birthday rewards, and more.</p>
            </div>
            <div className='benefits-card' data-aos='fade-up' data-aos-duration='1200'>
              <HealthcareIcon />
              <h6 className='detail-title'>Health & Wellness</h6>
              <p className='detail-text'>We help you cover all your bases with great insurance options: medical, dental, vision, life, critical illness, pet, short and/or long-term disability, etc.</p>
            </div>
            <div className='benefits-card' data-aos='fade-up' data-aos-duration='1600'>
              <ClockIcon />
              <h6 className='detail-title'>Real Flexibility</h6>
              <p className='detail-text'>We value flexibility. Enjoy competitive vacation/sick pay accrual, flexible work hours, and cutting edge, devices and systems to make the lives of our staff easier.</p>
            </div>
          </div>
        </div>
        <div className='two-column'>
          <div className="title">
            <h4>Our Workforce</h4>
            <hr/>
          </div>
          <div className="content">
            <div className="left">
              <h6>What we're made of</h6>
              <p>We value diversity at Charter. To know our company is composed of hard working, brilliant people from different walks of life, cultures, and worldviews helps us feel even more confident in our ability to improve lives wherever we go.</p>
            </div>
            <div className="right">
              <h6>Demographics</h6>
              <p>Our workforce reflects our values. In our growing workforce, diversity is front and center. Just see for yourself!</p>
            </div>
          </div>
          <div className='chart-wrapper'>
            <DemographicsChart />
          </div>
        </div>
        <JoinUsStrip />
        <LocationsStrip svg={true} />
      </div>
    </Layout>
  )
}

export default CareersPage