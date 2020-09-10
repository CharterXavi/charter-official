import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip from '../components/header-strip/header-strip';
import OurTeamStrip from '../components/our-team/our-team';
import LocationsStrip from '../components/locations/locations';
import careersImage from '../images/headers/careers-header.png';
import DemographicsChart from '../components/data/demographics';
import TeamPics from '../components/our-team/team-pics';
import ButtonPrimaryAlt from '../components/buttons/button-primary-alt';
import healthIcon from '../images/iconography/health-icon.png';
import clockIcon from '../images/iconography/clock.png';
import highFiveIcon from '../images/iconography/high-five.png';
import './careers.css';

const CareersPage = () => (
  <Layout>
    <SEO title="Careers" />
    <HeaderStrip
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
    <div className='intro'>
      <h2>We take care of our own</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo pharetra, morbi pellentesque. Duis semper tellus velit, aliquam non. Blandit proin nulla erat lorem blandit mauris molestie pellentesque gravida. Interdum eget leo sem sed massa etiam congue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod ipsum, semper erat eget phasellus fermentum a egestas. Arcu tincidunt neque in ac.</p>
      <div className='benefits-wrapper'>
        <div className='benefits-card'>
          <img src={healthIcon} alt="" />
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
          <img src={highFiveIcon} alt="" />
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
          <img src={clockIcon} alt="" />
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
    <div className='intro join-us'>
      <h2>Join us!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo pharetra, morbi pellentesque. Duis semper tellus velit, aliquam non. Blandit proin nulla erat lorem blandit mauris molestie pellentesque gravida. Interdum eget leo sem sed massa etiam congue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod ipsum, semper erat eget phasellus fermentum a egestas. Arcu tincidunt neque in ac.</p>
      <ButtonPrimaryAlt link='https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=ffc1c116-da32-4d3c-8e03-c4a1e22c100a&ccId=19000101_000001&type=MP&lang=en_US' content='See job openings' />
    </div>
    <OurTeamStrip />
    <LocationsStrip svg={true} />
  </Layout>
)

export default CareersPage