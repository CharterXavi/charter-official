import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import teamImage from '../images/headers/our-team.png';
import HeaderStrip from '../components/header-strip/header-strip';
import LocationsStrip from '../components/locations/locations';
import TeamGrid from '../components/our-team/team-grid';
import hiringImage from '../images/hiring.png';
import ButtonPrimaryAlt from '../components/buttons/button-primary-alt';
import './our-team.css';

const OurTeamPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <HeaderStrip 
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
      <div className='left'>
        <h2>We're Hiring!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus diam vitae ut et tincidunt quis sem est, ligula. Aliquam venenatis ut dapibus neque leo. Purus aliquet suscipit turpis volutpat nisl porta elit diam. Et nunc nunc neque aliquet ultricies risus.</p>
        <ButtonPrimaryAlt content='See current openings' link='/careers' />
      </div>
      <div className='right'>
        <img src={hiringImage} alt="Charter team standing together" />
      </div>
      <svg className='hiring-wave' xmlns="http://www.w3.org/2000/svg" width="1440" height="521" viewBox="0 0 1440 521" fill="none">
            <g filter="url(#filter12_d)">
            <path d="M1 482.19C1 482.19 260 161.919 732.5 292.855C1205 423.791 1441 15 1441 15C1441 118.527 1441 412.473 1441 516H691.5H1V482.19Z" fill="#F6F7FB"/>
            </g>
            <defs>
            <filter id="filter12_d" x="-4" y="0" width="1460" height="521" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="5" dy="-5"/>
            <feGaussianBlur stdDeviation="5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
        </svg>
    </div>
    <LocationsStrip svg={true} />
  </Layout>
)

export default OurTeamPage