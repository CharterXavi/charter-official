import './hospice.css';

import BereavementStrip from "../../components/hospice/bereavement-strip";
import HeaderStrip2 from "../../components/header-strip/header-strip2";
import HospiceEligibility from '../../components/hospice/hospice-eligibility';
import HospiceServices from "../../components/hospice/hospice-services";
import HospiceTeam from '../../components/hospice/hospice-team';
import Layout from "../../components/layout";
import LevelsOfCare from "../../components/hospice/levels-of-care";
import LocationsStrip from "../../components/locations/locations";
import React from "react"
import SEO from "../../components/seo";
import TestimonialsStrip from "../../components/testimonials/testimonials";
import hospiceImage from '../../images/headers/hospice.png';

const HospicePage = () => {
  
  
  return (
    <Layout>
      <div className='HospicePage'>
        <SEO title="Best Hospice Care Services" />
        <HeaderStrip2 title='Hospice' headline='Caring for those with a life-limiting illness by providing the best hospice care services in the world' image={hospiceImage} />
        <div className='two-column'>
          <div className="title">
            <h4>Physical, emotional, and spiritual support</h4>
            <hr/>
          </div>
          <div className="content">
            <div className="left">
              <h6>What is Hospice Care?</h6>
              <p>
                Hospice is a special way of caring for people who have a life limiting illness. Charter Hospice is committed to delivering the latest and most
                innovative approaches in pain and symptom management. Our focus is on improving a patient’s quality of life by creating a more comfortable
                environment for them and their loved ones. The hospice services allow us to provide the physical, emotional, and spiritual support that you
                and your family need during this time. Our interdisciplinary team works directly with your physician and our hospice medical director to ensure
                you receive the best hospice care possible.
              </p>
            </div>
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