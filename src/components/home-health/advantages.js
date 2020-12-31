import './advantages.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";
import AdvantageCard from './advantage-card';
import CheckboxIcon from '../icons/checkbox';
import ClockIcon from '../icons/clock';
import HealthcareIcon from '../icons/healthcare';
import VolunteerIcon from '../icons/volunteer';

const Advantages = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const advantageList = [
    {
      icon: <HealthcareIcon />,  
      title: 'Personalized Care',
      content: 'Our health care providers work directly with your physician so we can adapt to your specific health care needs as effecitvely as possible.',
      animationTime: '800'
    },
    {
      icon: <ClockIcon />,  
      title: 'Convenience',
      content: 'Shortens and in some cases, eliminates hospitalizations or skilled nursing home stays. Many risks, such as infection, are eliminated or minimized when care is given at home.',
      animationTime: '1100'
    },
    {
      icon: <VolunteerIcon />,  
      title: 'Independence',
      content: 'We strive to help you regain your independence and maintain your quality of life so you can look forward to a brighter future.',
      animationTime: '1500'
    },
    {
      icon: <CheckboxIcon />,  
      title: 'Control',
      content: 'Charter Home Health gives you choices and allows you to be an active participant in your own care and recovery journey.',
      animationTime: '1900'
    }
]

return (
    <div className='Advantages'>
        <h4>Advantages of Home Health</h4>
        <div className='card-wrapper'>
            {
                advantageList.map(item => {
                    return <AdvantageCard key={item.title} icon={item.icon} title={item.title} content={item.content} animationTime={item.animationTime} />
                })
            }
        </div>
    </div>
  );
}

export default Advantages;