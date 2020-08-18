import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip from '../components/header-strip/header-strip';
import OurTeamStrip from '../components/our-team/our-team';
import LocationsStrip from '../components/locations/locations';
import careersImage from '../images/careers-header.png';
import DemographicsChart from '../components/data/demographics';
import TeamPics from '../components/our-team/team-pics';
import ButtonPrimaryAlt from '../components/buttons/button-primary-alt';
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
    </div>
    <div className='picture-grid'>
      <TeamPics />
    </div>
    <div className='intro join-us'>
      <h2>Join us!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo pharetra, morbi pellentesque. Duis semper tellus velit, aliquam non. Blandit proin nulla erat lorem blandit mauris molestie pellentesque gravida. Interdum eget leo sem sed massa etiam congue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod ipsum, semper erat eget phasellus fermentum a egestas. Arcu tincidunt neque in ac.</p>
      <ButtonPrimaryAlt link='/careers' content='See job openings' />
    </div>
    <OurTeamStrip />
    <LocationsStrip />
  </Layout>
)

export default CareersPage