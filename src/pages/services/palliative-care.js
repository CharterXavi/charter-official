import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import palliativeImage from '../../images/palliative.png';
import './palliative-care.css';
import CareApproach from '../../components/palliative/care-approach';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';

const PalliativeCarePage = () => (
  <Layout>
    <div className='PalliativeCare'>
      <SEO title="Palliative" />
      <HeaderStrip image={palliativeImage} title='Palliative Care' headline='Equipping people to cope with serious illnesses' />
      <div className='intro'>
        <h1>Palliative Care</h1>
        <p>Serious illnesses and their treatments can cause exhaustion, anxiety and depression. Our Palliative  team can assist you and your loved ones cope with the difficult experience. Palliative care is a comprehensive care program especially designed for individuals experiencing physical symptoms and emotional distress related to illnesses such as cancer, heart disease, lung disease, kidney failure, cystic fibrosis, renal disease, and respiratory disease, among others.</p>
        <div className='list-wrapper'>
          <ul>
            <li>Pain</li>
            <li>Fatigue</li>
            <li>Loss of Appetite</li>
            <li>Dehydration</li>
            <li>Shortness of Breath</li>
            <li>Fever</li>
          </ul>
          <ul>
            <li>Constipation</li>
            <li>Insomnia</li>
            <li>Infection</li>
            <li>Vomiting</li>
            <li>Nausea</li>
          </ul>
        </div>
      </div>
      <CareApproach />
      <TestimonialsStrip svg={true} />
      <LocationsStrip />
    </div>
  </Layout>
)

export default PalliativeCarePage