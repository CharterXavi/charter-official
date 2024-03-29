import './palliative-care.css';

import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import CareApproach from '../../components/palliative/care-approach';
import HeaderStrip2 from '../../components/header-strip/header-strip2';
import Layout from "../../components/layout"
import LocationsStrip from '../../components/locations/locations';
import React from "react"
import SEO from "../../components/seo"
import TestimonialsStrip from '../../components/testimonials/testimonials';
import palliativeImage from '../../images/headers/palliative.png';

const PalliativeCarePage = () => (
  <Layout>
    <div className='PalliativeCarePage'>
      <SEO title="Best Palliative Care | Comfort, Home, and End of Life Care" />
      <HeaderStrip2 image={palliativeImage} title='Palliative Care' headline='Equipping people to cope with serious illnesses in the comfort of your home' />
      <div className='two-column'>
        <div className="title">
          <h4>Empowering Patients & Improving Quality of Life</h4>
          <hr/>
        </div>
        <div className="content">
          <div className="left">
            <h6>What is Palliative Care?</h6>
            <p>
              Palliative care is a comprehensive care program focused on providing relief from the symptoms and stress of serious illnesses. Our Palliative team,
              made of specially-trained doctors, NPs, nurses, and other disciplines- can help you and your loved ones navigate and cope with the difficult experience.
              Our best-in-class palliative care is integral in providing comfort in difficult situations such as extreme or end-of-life illnesses.
            </p>
            <ButtonPrimaryAlt content='See Our locations' link='/locations' />
          </div>
          <div className="right">
            <h6>Palliative Care vs. Hospice Care</h6>
            <p>
              Palliative care is very different from <a href='/services/hospice'>Hospice Care</a>: it's a program for a much more broad range of patients. It is based on the needs of the patient,
              regardless of your age, stage, or prognosis. Palliative care or palliative home care can be a great additional layer upon your primary treatment
              plan so you are as supported as possible in your treatment, comfort, and quality of life.
            </p>
          </div>
        </div>
      </div>
      <CareApproach />
      <TestimonialsStrip />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default PalliativeCarePage