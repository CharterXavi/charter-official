import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import teamImage from '../images/headers/our-team.png';
import HeaderStrip2 from '../components/header-strip/header-strip2';
import LocationsStrip from '../components/locations/locations';
import TeamGrid from '../components/our-team/team-grid';
import hiringImage from '../images/hiring.png';
import hiringIcon from '../images/iconography/careers/hiring.png';
import ButtonPrimaryAlt from '../components/buttons/button-primary-alt';
import './our-team.css';

const OurTeamPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <div className='OurTeamPage'>
      <HeaderStrip2 
        image={teamImage}
        title='Our Team'
        headline="Meet some of the people behind Charter's success"
      />
      <div className='two-column'>
        <div className='title'>
          <h4>We've got uniquely qualified and passionate teams</h4>
          <hr/>
          <p>Our leadership wields many decades of combined experience across disciplines. Drawing on the vast and diverse wisdom of those who have been in their field for years helps us succeed in providing the best care for our patients and the best experience for our partners, providers, and employees.</p>
        </div>
        <div className='content'>
          <div className='left'>
          </div>
          <div className='right'>
          </div>
        </div>
      </div>
      <TeamGrid />
      <div className='hiring-strip'>
        <div className='two-column-left'>
          <div className='left'>
            <img src={hiringIcon} alt="Person" />
            <h4>We're Hiring!</h4>
            <p>Interested in a career at Charter? Visit our Careers page to learn more about who we are, what we stand for, and who we're looking for in our future employees. You can also read about our competitve compensation, benefits, culture, and more!</p>
            <ButtonPrimaryAlt content='Visit Careers page' link='/careers' />
          </div>
          <div className='right'>
            <img src={hiringImage} alt="Charter team standing together" />
          </div>
        </div>
      </div>
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default OurTeamPage