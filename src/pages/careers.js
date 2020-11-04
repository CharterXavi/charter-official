import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip2 from '../components/header-strip/header-strip2';
import OurTeamStrip from '../components/our-team/our-team';
import LocationsStrip from '../components/locations/locations';
import careersImage from '../images/headers/careers.png';
import DemographicsChart from '../components/data/demographics';
import TeamPics from '../components/our-team/team-pics';
import healthIcon from '../images/iconography/hospice/healthcare.png';
import clockIcon from '../images/iconography/careers/clock.png';
import awardIcon from '../images/iconography/careers/award.png';
import JoinUsStrip from '../components/careers/join-us.js';
import './careers.css';

const CareersPage = () => (
  <Layout>
    <SEO title="Careers" />
    <HeaderStrip2
      image={careersImage}
      title='Careers'
      headline='Come work for a passionate, people-driven company'
    />
    <div className='intro'>
      <h2>Our Charter Identity</h2>
      <h5>Who we are</h5>
      <p>We're proud to be a part of what is undoubtedly a unique workforce. We've very intentionally build up our company with the most passionate and driven people we could find. Regardless of discipline or department we are a company that truly invests in what we do and the people we interact with, and we never lose sight of the impact we strive to make.</p>
      <h5>What we're made of</h5>
      <p>Charter is a diverse place, and we value this a lot. To know our company is composed of hard working, brilliant people from different walks of life, cultures, and worldviews helps us feel even more confident in our ability to improve lives wherever we go.</p>
    </div>
    <div className='demographics'>
      <h2>Our Workforce</h2>
      <h5>Demographics</h5>
      <p>Amongst the majority of our employees who respond with demographic information, diversity is front and center.</p>
      <h5>Percentages:</h5>
      <div className='chart-wrapper'>
        <DemographicsChart />
      </div>
    </div>
    <div className='intro benefits'>
      <h2>We take care of our own</h2>
      <h5>Mobility & recognition</h5>
      <p>We love to recognize those doing exceptional work and make sure they know we appreciate them. We value promoting from within and we always make sure to keep feedback flowing with performance reviews, surveys, and more to make sure everyone's happy.</p>
      <h5>Competitive Benefits</h5>
      <p>We know that empowering our employees with competitive pay, benefits, and flexibility helps the company thrive. A healthy and happy company is formed by healthy, happy individuals, and we do our best to foster that kind of environment.</p>
      <div className='benefits-wrapper'>
        <div className='benefits-card'>
          <img src={healthIcon} alt="Healthcare" />
          <h4>Health & Wellness</h4>
          <p>Cover your all your bases:</p>
          <ul>
            <li>Medical, dental, vision, and life insurance</li>
            <li>Critical illness insurance</li>
            <li>Pet insurance</li>
            <li>Short/long term disability</li>
          </ul>
        </div>
        <div className='benefits-card'>
          <img src={awardIcon} alt="Award" />
          <h4>Generous Incentives</h4>
          <p>Hard work at Charter pays off:</p>
          <ul>
            <li>401K company matching</li>
            <li>Referral and retention bonuses</li>
            <li>Employee of the Month program</li>
            <li>Appreciation events</li>
            <li>Birthday recognition & gifts</li>
            <li>Anniversary rewards</li>
          </ul>
        </div>
        <div className='benefits-card'>
          <img src={clockIcon} alt="Clock" />
          <h4>Real Flexibility</h4>
          <p>Balance life and work:</p>
          <ul>
            <li>Competitive vacation/sick pay accrual</li>
            <li>Flexible work hours</li>
            <li>Cutting edge devices and systems to make our nurses' lives easier</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='picture-grid'>
      <TeamPics />
    </div>
    <JoinUsStrip />
    <OurTeamStrip />
    <LocationsStrip svg={true} />
  </Layout>
)

export default CareersPage