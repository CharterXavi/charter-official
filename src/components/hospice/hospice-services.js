import './hospice-services.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";
import BottleIcon from '../icons/bottle';
import CrossIcon from '../icons/cross';
import FlowerIcon from '../icons/flower';
import HealthcareIcon from '../icons/healthcare';
import HeartIcon from '../icons/heart';
import HomeIcon from '../icons/home';
import HospiceCard from './hospice-card';
import PhoneIcon from '../icons/phone';
import PillIcon from '../icons/pill';
import SocialIcon from '../icons/social';
import StethoscopeIcon from '../icons/stethoscope';

const HospiceServices = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const hospiceServicesList = [
      {
        icon: <HealthcareIcon />,
        title: 'Nursing Services',
        alt: 'Health Cross Symbol',
        animationTime: '800'
      },
      {
        icon: <SocialIcon />,
        title: 'Social Services',
        alt: 'Group of three people',
        animationTime: '1000'
      },
      {
        icon: <HomeIcon />,
        title: 'Home Health Aide',
        alt: 'House',
        animationTime: '1200'
      },
      {
        icon: <CrossIcon />,
        title: 'Spiritual Support',
        alt: 'Religious cross',
        animationTime: '1400'
      },
      {
        icon: <PillIcon />,
        title: 'Medications',
        alt: 'Pill',
        animationTime: '1600'
      },
      {
        icon: <BottleIcon />,
        title: 'Medical Supplies',
        alt: 'Pill Bottle',
        animationTime: '1800'
      },
      {
        icon: <StethoscopeIcon />,
        title: 'Medical Equipment',
        alt: 'Stethoscope',
        animationTime: '2000'
      },
      {
        icon: <FlowerIcon />,
        title: 'Bereavement Services',
        alt: 'Flower',
        animationTime: '2200'
      },
      {
        icon: <HeartIcon />,
        title: 'Therapy',
        alt: 'Heart',
        animationTime: '2300'
      },
      {
        icon: <PhoneIcon />,
        title: '24 Hr. Health Line',
        alt: 'Phone',
        animationTime: '2400'
      }
  ]

  return (
    <div className='HospiceServices'>
        <div className='two-column'>
            <h5>What we offer</h5>
            <p>Charter Hospice allows you to have a personalized plan of care that is carefully designed to meet your health needs. We provide an array of services to help make the transition easier for you and your loved ones.</p>
        </div>
        <div className='hospice-card-wrapper'>
            {
                hospiceServicesList.map(service => {
                    return <HospiceCard key={service.title} icon={service.icon} title={service.title} alt={service.alt} animationTime={service.animationTime}/>
                })
            }
        </div>
    </div>
  );
}

export default HospiceServices;