import React from "react"
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import HeaderStrip2 from "../../components/header-strip/header-strip2";
import './hospice.css';
import hospiceImage from '../../images/headers/hospice.png';
import HospiceServices from "../../components/hospice/hospice-services";
import TestimonialsStrip from "../../components/testimonials/testimonials";
import HospiceTeam from '../../components/hospice/hospice-team';
import LocationsStrip from "../../components/locations/locations";
import LevelsOfCare from "../../components/hospice/levels-of-care";
import HospiceEligibility from '../../components/hospice/hospice-eligibility';
import BereavementStrip from "../../components/hospice/bereavement-strip";

const HospicePage = () => {
  
  
  return (
    <Layout>
      <div className='HospicePage'>
        <SEO title="Hospice" />
        <HeaderStrip2 title='Hospice' headline='Caring for those with a life-limiting illness' image={hospiceImage} />
        <div className='two-column'>
          <div className="title">
            <h4>Physical, emotional, and spiritual support</h4>
            <hr/>
          </div>
          <div className="content">
            <div className="left">
              <h6>What is Hospice Care?</h6>
              <p>Hospice is a special way of caring for people who have a life limiting illness. Charter Hospice is committed to delivering the latest and most innovative approaches in pain and symptom management. Our focus is on improving a patient’s quality of life by creating a more comfortable environment for them and their loved ones. The hospice program allows us to provide the physical, emotional, and spiritual support that you and your family need during this time. Our interdisciplinary team works directly with your physician and our hospice medical director to ensure you receive the care you deserve.</p></div>
            <div className="right">
              <h6>Our Mission Statement</h6>
              <p>“To provide the most meaningful and comfortable experience to our patients and their families during the end of life journey.”</p>
            </div>
          </div>
        </div>
        <HospiceServices />
        <HospiceTeam />
        <HospiceEligibility />
        <LevelsOfCare />
        <BereavementStrip />
        <TestimonialsStrip />
        <LocationsStrip svg={true} />
      </div>
    </Layout>
  )
}
export default HospicePage