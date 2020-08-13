import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeaderStrip from '../components/header-strip/header-strip';
import careersImage from '../images/careers-header.png';
import DemographicsChart from '../components/data/demographics';
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
      <h2>Join us!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo pharetra, morbi pellentesque. Duis semper tellus velit, aliquam non. Blandit proin nulla erat lorem blandit mauris molestie pellentesque gravida. Interdum eget leo sem sed massa etiam congue.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod ipsum, semper erat eget phasellus fermentum a egestas. Arcu tincidunt neque in ac.</p>
    </div>
    <div className='demographics'>
      <h2>Our Workforce</h2>
      <div className='chart-wrapper'>
        <DemographicsChart />
      </div>
    </div>
  </Layout>
)

export default CareersPage