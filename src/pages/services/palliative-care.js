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
        <p>Palliative care is a comprehensive care program focused on providing relief from the symptoms and stress of serious illnesses. Our Palliative team, made of specially-trained doctors, NPs, nurses, and other disciplines- can help you and your loved ones cope with the difficult experience.</p>
        <h5>Palliative Care vs. Hospice Care</h5>
        <p>Palliative care is very different from <a href='/services/hospice'>Hospice</a>: it's a program for a much more broad range of patients. It is based on the needs of the patient thus, regardless of your age, stage, or prognosis, palliative care can be a great additional layer upon your primary treatment plan so you are as supported as possible in your treatment, comfort, and quality of life.</p>
      </div>
      <CareApproach />
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PalliativeCarePage