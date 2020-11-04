import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import palliativeImage from '../../images/headers/palliative.png';
import './palliative-care.css';
import CareApproach from '../../components/palliative/care-approach';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';

const PalliativeCarePage = () => (
  <Layout>
    <div className='PalliativeCare'>
      <SEO title="Palliative Care" />
      <HeaderStrip2 image={palliativeImage} title='Palliative Care' headline='Equipping people to cope with serious illnesses' />
      <div className='intro'>
        <h2>Empowering Patients & Improving Quality of Life</h2>
        <h5>What is Palliative Care?</h5>
        <p>Serious illnesses and intensive treatments can cause exhaustion, pain, anxiety, depression, and more. Our Palliative team can help you and your loved ones cope with the difficult experience. Palliative care is a comprehensive care program specially-designed for individuals experiencing bothersome physical symptoms and emotional distress related to illnesses such as cancer, heart disease, lung disease, kidney failure, cystic fibrosis, renal disease, and respiratory disease, among others.</p>
        <p>Palliative care is very different from <a href='/services/hospice'>Hospice</a>: it's a program for a much more broad range of patients. Regardless of your age, stage, or prognosis, palliative care can be a great additional layer upon your primary treatment plan so you are as supported as possible in your treatment, comfort, and quality of life.</p>
      </div>
      <CareApproach />
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PalliativeCarePage