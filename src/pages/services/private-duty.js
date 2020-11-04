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
      <HeaderStrip2 image={privateDutyImage} title='Private Duty Home Care' headline="Addressing our patients' daily needs" />
      <div className='intro'>
        <h2>Private Duty Home Care</h2>
        <h5>What is Private Duty Home Care?</h5>
        <p>Private duty home care is a service provided to individuals who need in-home support and assistance with day-to-day activities. A private duty caregiver is assigned to visit your home and help with daily living activities such as personal grooming, meal preparation, housekeeping, and companionship. Private duty care makes it possible for your loved ones to stay home safely and comfortably by customizing the services to meet the unique needs of each client.</p>
        <h5>The Goal</h5>
        <p>Our goal with this service is simple: helping the patient and family gain as much independence back as possible by maintaining a client’s ability to remain safely at home while offering relief from caregiver burden. Private Duty Home Care fills the gap in homecare services during periods ranging from a brief visit, to 24 hours a day.</p>
        <h5>Services</h5>
        <p>Some services provided are as follows:</p>
        <ul>
          <li>Personal care such as bathing, dressing, hygiene, transfers, and ambulation</li>
          <li>Light housekeeping and maintenance around the house.</li>
          <li>Cooking and meal preparation</li>
          <li>Medication reminders</li>
          <li>And more!</li>
        </ul>
      </div>
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PrivateDutyPage