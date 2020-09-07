import React, {useEffect} from 'react';
import './hospice-services.css';
import AOS from "aos";
import "aos/dist/aos.css";
import HospiceCard from './hospice-card';
import healthIcon from '../../images/iconography/health-icon.png';
import groupIcon from '../../images/iconography/group.png';
import homeIcon from '../../images/iconography/home.png';
import crossIcon from '../../images/iconography/cross.png';
import pillIcon from '../../images/iconography/pill.png';
import medicationsIcon from '../../images/iconography/medication.png';
import stethoscopeIcon from '../../images/iconography/stethoscope-icon.png';
import flowerIcon from '../../images/iconography/flower.png';
import heartIcon from '../../images/iconography/heart-icon.png';
import phoneIcon from '../../images/iconography/phone.png';

const HospiceServices = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const hospiceServicesList = [
      {
        icon: healthIcon,
        title: 'Nursing Services',
        alt: 'Health Cross Symbol',
        animationTime: '800'
      },
      {
        icon: groupIcon,
        title: 'Social Services',
        alt: 'Group of three people',
        animationTime: '1000'
      },
      {
        icon: homeIcon,
        title: 'Home Health Aide',
        alt: 'House',
        animationTime: '1200'
      },
      {
        icon: crossIcon,
        title: 'Spiritual Support',
        alt: 'Religious cross',
        animationTime: '1400'
      },
      {
        icon: pillIcon,
        title: 'Medications',
        alt: 'Pill',
        animationTime: '1600'
      },
      {
        icon: medicationsIcon,
        title: 'Medical Supplies',
        alt: 'Pill Bottle',
        animationTime: '1800'
      },
      {
        icon: stethoscopeIcon,
        title: 'Medical Equipment',
        alt: 'Stethoscope',
        animationTime: '2000'
      },
      {
        icon: flowerIcon,
        title: 'Bereavement Services',
        alt: 'Flower',
        animationTime: '2200'
      },
      {
        icon: heartIcon,
        title: 'Therapy',
        alt: 'Heart',
        animationTime: '2300'
      },
      {
        icon: phoneIcon,
        title: '24 Hr. Health Line',
        alt: 'Phone',
        animationTime: '2400'
      }
  ]

  return (
    <div className='HospiceServices'>
        <div className='intro'>
            <h2>What we offer</h2>
            <p>Charter Hospice allows you to have a personalized plan of care that is carefully designed to meet your health needs. We provide an array of services to help makethings easier for you and your loved ones.</p>
        </div>
        <div className='hospice-card-wrapper'>
            {
                hospiceServicesList.map(service => {
                    return <HospiceCard icon={service.icon} title={service.title} alt={service.alt} animationTime={service.animationTime}/>
                })
            }
        </div>
    </div>
  );
}

export default HospiceServices;