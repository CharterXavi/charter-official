import React from "react"
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import HeaderStrip from "../../components/header-strip/header-strip";
import './hospice.css';
import hospiceImage from '../../images/headers/hospice.png';
import HospiceServices from "../../components/hospice/hospice-services";
import TestimonialsStrip from "../../components/testimonials/testimonials";
import HospiceTeam from '../../components/hospice/hospice-team';
import LocationsStrip from "../../components/locations/locations";
import LevelsOfCare from "../../components/hospice/levels-of-care";
import HospiceEligibility from '../../components/hospice/hospice-eligibility';

const HospicePage = () => {
  
  
  return (
    <Layout>
      <div className='Hospice'>
        <SEO title="Hospice" />
        <HeaderStrip title='Hospice' headline='This is a headline about Hospice' image={hospiceImage} />
        <div className='intro'>
          <h2>Physical, emotional, and spiritual support</h2>
          <p>Hospice is a special way of caring for people who have a life limiting illness. Charter Hospice is committed to delivering the latest and most innovative approaches in pain and symptom management. Our focus is on improving a patient’s quality of life by creating a more comfortable environment for them and their loved ones. The hospice program allows us to provide the physical, emotional, and spiritual support that you and your family need during this time. Our interdisciplinary team works directly with your physician and our hospice medical director to ensure you receive the care you deserve.</p>
          <div className='mission-statement'>
            <h4>Our Mission Statement:</h4>
            <p className='quote-text'>“To provide the most meaningful and comfortable experience to our patients and their families during the end of life journey.”</p>
          </div>
        </div>
        <HospiceServices />
        <div className='intro'>
          <HospiceTeam />
        </div>
        <div className='intro'>
          <HospiceEligibility />
        </div>
        <LevelsOfCare />
        <TestimonialsStrip svg={true} />
        <LocationsStrip />
      </div>
    </Layout>
  )
}
export default HospicePage