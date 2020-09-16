import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderStrip from '../../components/header-strip/header-strip';
import bereavementImg from '../../images/headers/bereavement.png';
import flowersLeft from '../../images/iconography/flowers-left.png';
import flowersRight from '../../images/iconography/flowers-right.png';
import heartIcon from '../../images/iconography/heart-icon.png'
import TestimonialsStrip from '../../components/testimonials/testimonials';
import LocationsStrip from '../../components/locations/locations';
import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import './bereavement.css';

const BereavementPage = () => (
  <Layout>
    <div className='BereavementPage'>
      <SEO title="Bereavement Page" />
      <HeaderStrip image={bereavementImg} title='Bereavement' headline='Treatment for the soul' />
      <div className='intro'>
        <h2>Grief and Loss</h2>
        <p>Grief affects us in every way: physically, emotionally, mentally, and spiritually. It can leave us feeling alone and fearful. “Bereavement” refers to the period in which we process this grief following loss in our lives. As individuals we all experience grief and loss in a unique manner, and therefore the bereavement process may look a bit different for everyone. During this process, it is common to find yourself overwhelmed by everyday tasks and decision making. At Charter, we believe this is a crucial time to lend our support to you and your loved ones to make the bereavement process as manageable as possible. Our goal is to provide assistance and compassion to those we serve, ensuring that all families find the support they need throughout this difficult time.</p>
      </div>
      <div className='intro services'>
        <h2>Lending a hand</h2>
        <p>Charter Bereavement offers the following for a period of 13 months or longer:</p>
        <ul>
            <li>Periodic letters of encouragement</li>
            <li>Educational information regarding bereavement</li>
            <li>Support groups led by caring professionals at Charter Hospice</li>
            <li>Frequent telephone calls by providers and volunteers who work specifically in the field of bereavement</li>
            <li>Community resources like grief therapists and counsellors</li>
            <li>Holiday workshops</li>
            <li>Annual memorial services</li>
            <li>Additional support by phone for families</li>
        </ul>
        <img src={flowersLeft} alt="Flowers" className='flowers-left' data-aos='fade-up' data-aos-duration='900' />
        <img src={flowersRight} alt="Flowers" className='flowers-right' data-aos='fade-up' data-aos-duration='1500' />
      </div>
    <div className='intro resources'>
        <img src={heartIcon} alt="Heart" data-aos='fade-up' data-aos-duration='900' />
        <h2>Additional Resources</h2>
        <p>Bereavement is a tough time, and it can be challenging to navigate your grief and sadness in a healthy way while still tending to your obligations in day-to-day life. To help make sure you’re experiencing the bereavement process in the healthiest way possible, we offer therapy and counselling. This allows you to have accountability in your bereavement experience, monitoring things like depression, anxiety, sadness, grief in your children, adolescents, or teens, grief during holidays, and much more. Keeping up with how you’re doing and being available to you every step of the way allows our Charter providers to guide you through your bereavement with your wellbeing at the center of it all. In short, we are always here for you.</p>
        <ButtonPrimaryAlt content='Reach out to us' link='/contact' />
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="535" viewBox="0 0 1440 535" fill="none" className='bereavement-svg'>
            <path d="M0 533.377V140C0 140 48 103.5 149 85C250 66.5 308 20 455.5 20C603 20 612 0.5 715.5 0.5C819 0.5 817 20 959.5 20C1102 20 1231.5 84 1316.5 102.5C1401.5 121 1440 151 1440 151V533.377C1440 533.377 1297.27 537.029 1120.57 533.377C943.858 529.725 876.743 533.377 703.434 533.377C530.124 533.377 509.735 533.377 327.929 533.377C146.124 533.377 0 533.377 0 533.377Z" fill="#363F55"/>
        </svg>
    </div>
      <TestimonialsStrip svg={true} />
      <LocationsStrip svg={true} />
    </div>
  </Layout>
)

export default BereavementPage;