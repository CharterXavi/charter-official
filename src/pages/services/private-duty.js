import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import privateDutyImage from '../../images/headers/private-duty.png';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import './private-duty.css';

const PrivateDutyPage = () => (
  <Layout>
    <div className='PrivateDutyPage'>
      <SEO title="Private Duty" />
      <HeaderStrip image={privateDutyImage} title='Private Duty Nursing' headline="Addressing our patients' daily needs" />
      <div className='intro'>
        <h2>Helping with daily challenges</h2>
        <p>Private duty nursing involves sending specialized health care providers to serve patients of all ages who need quality care but want to regain some independence in their lives. Private duty nurses can offer you or your loved one top-quality medical care from the comfort of your home or anywhere else you may need skilled care.</p>
        <p>We employ highly skilled nurses who also work hard to get to know you, your habits, your unique needs, and more. This allows us to fine-tune your private duty nursing care for the highest-quality experience.</p>
      </div>
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PrivateDutyPage