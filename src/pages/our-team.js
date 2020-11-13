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
    <HeaderStrip2 
      image={teamImage}
      title='Our Team'
      headline="We're blessed to get to work with the best"
    />
    <div className='intro'>
      <h2>Exceptional Care & Life Enhancing Services</h2>
      <p>At Charter Healthcare Group we believe in making a positive change in the lives of our patients and their families. For over ten years, we have been committed to providing exceptional care and life enhancing services to people all throughout the greater Los Angeles area.</p>
      <p>We have four main service offerings: home health care, palliative care, hospital admission reduction program (H.A.R.P.), and hospice.</p>
    </div>
    <TeamGrid />
    <div className='hiring-strip'>
      <div className='two-column-left'>
        <div className='left'>
          <img src={hiringIcon} alt="Person" />
          <h2>We're Hiring!</h2>
          <p>Interested in a career at Charter? Visit our Careers page to learn more about who we are, what we stand for, and who we're looking for in our future employees. You can also read about our competitve compensation, benefits, culture, and more!</p>
          <ButtonPrimaryAlt content='Visit Careers page' link='/careers' />
        </div>
        <div className='right'>
          <img src={hiringImage} alt="Charter team standing together" />
        </div>
      </div>
    </div>
    <LocationsStrip svg={true} />
  </Layout>
)

export default OurTeamPage