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
    <div className="CareersPage">
      <SEO title="Careers" />
      <HeaderStrip2
        image={careersImage}
        title='Careers'
        headline='Come work for a passionate, people-driven company'
      />
      <div className='two-column'>
        <div className="title">
          <h4>Our Charter Identity</h4>
          <hr/>
        </div>
        <div className="content">
          <div className="left">
            <h6>Who we are</h6>
            <p>We're proud to be a part of what is undoubtedly a unique workforce. We've very intentionally build up our company with the most passionate and driven people we could find. Regardless of discipline or department we are a company that truly invests in what we do and the people we interact with, and we never lose sight of the impact we strive to make.</p>
          </div>
          <div className="right">
            <h6>What we're made of</h6>
            <p>Charter is a diverse place, and we value this a lot. To know our company is composed of hard working, brilliant people from different walks of life, cultures, and worldviews helps us feel even more confident in our ability to improve lives wherever we go.</p>
          </div>
        </div>
      </div>
      {/* <div className='picture-grid'>
        <TeamPics />
      </div> */}
      <div className='two-column'>
        <div className="title">
          <h4>We take care of our own</h4>
          <hr/>
        </div>
        <div className="content">
          <div className="left">
            <h6>Competitive Benefits</h6>
            <p>We know that empowering our employees with competitive pay, benefits, and flexibility helps the company thrive. A healthy and happy company is formed by healthy, happy individuals, and we do our best to foster that kind of environment.</p>
          </div>
          <div className="right">
            <h6>Mobility & recognition</h6>
            <p>We love to recognize those doing exceptional work and make sure they know we appreciate them. We value promoting from within and we always make sure to keep feedback flowing with performance reviews, surveys, and more to make sure everyone's happy.</p>
          </div>
        </div>
        <div className='benefits-wrapper'>
          <div className='benefits-card'>
            <img src={awardIcon} alt="Award" />
            <h6 className='detail-title'>Generous Incentives</h6>
            <p className='detail-text'>We provide 401K company matching, referral and retention bonuses, an Employee of the Month program, anniversary & birthday rewards ,and more.</p>
          </div>
          <div className='benefits-card' >
            <img src={healthIcon} alt="Healthcare" />
            <h6 className='detail-title'>Health & Wellness</h6>
            <p className='detail-text'>We help you cover all your bases with great insurance options: medical, dental, vision, life, critical illness, pet, short and/or long-term disability, etc.</p>
          </div>
          <div className='benefits-card'>
            <img src={clockIcon} alt="Clock" />
            <h6 className='detail-title'>Real Flexibility</h6>
            <p className='detail-text'>We value flexibility. Enjoy competitive vacation/sick pay accrual, flexible work hours, and cutting edge, devices and systems to make our staffs' lives easier.</p>
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
            <h6>Demographics</h6>
            <p>Amongst the majority of our employees who respond with demographic information, diversity is front and center.</p>
          </div>
          <div className="right"></div>
        </div>
        <div className='chart-wrapper'>
          <DemographicsChart />
        </div>
      </div>
      <JoinUsStrip />
      <OurTeamStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default CareersPage