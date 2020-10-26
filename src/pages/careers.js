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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo pharetra, morbi pellentesque. Duis semper tellus velit, aliquam non. Blandit proin nulla erat lorem blandit mauris molestie pellentesque gravida. Interdum eget leo sem sed massa etiam congue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod ipsum, semper erat eget phasellus fermentum a egestas. Arcu tincidunt neque in ac.</p>
    </div>
    <div className='demographics'>
      <h2>Our Workforce</h2>
      <div className='chart-wrapper'>
        <DemographicsChart />
      </div>
    </div>
    <div className='intro benefits'>
      <h2>We take care of our own</h2>
      <p>Here at Charter, we know that empowering our employees with competitive pay, benefits, and flexibility helps the company thrive. A healthy and happy company is formed by healthy, happy individuals, and we do our best to foster that kind of environment.</p>
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
            <li>Cutting edge systems to make our nurses' lives easier</li>
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