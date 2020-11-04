import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import privateDutyImage from '../../images/headers/private-duty.png';
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import './private-duty.css';

const PrivateDutyPage = () => (
  <Layout>
    <div className='PrivateDutyPage'>
      <SEO title="Private Duty" />
      <HeaderStrip2 image={privateDutyImage} title='Private Duty Nursing' headline="Addressing our patients' daily needs" />
      <div className='intro'>
        <h2>Private Duty Nursing</h2>
        <h5>What is Private Duty Nursing?</h5>
        <p>Private duty nursing involves sending specialized health care providers to serve patients of all ages who need quality care but want to regain some independence in their lives. Private duty nurses can offer you or your loved one top-quality medical care from the comfort of your home, and they can provide more continuous and individual care than the average skilled nursing visit in a home health program.</p>
        <p>We employ highly skilled nurses who also work hard to get to know you, your habits, your unique needs, and more. This allows us to fine-tune your private duty nursing care for the highest-quality experience. In other words, our nurses and staff are there to assist with more than just activities of daily living, personal care assistance, etc. - they're there for you in your time of need.</p>
        <h5>The Goal</h5>
        <p>Our goal with this service is simple: helping the patient and family gain as much independence back as possible and to gradually pull back on nursing care as the patient’s condition(s) improves. It's also crucial that we equip the family/caregiver with the skills and knowledge necessary to help execute the plan of care as well to ensure that true independence is achieved.</p>
      </div>
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PrivateDutyPage