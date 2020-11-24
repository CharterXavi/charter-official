import React, {useEffect} from 'react';
import './advantages.css';
import AOS from "aos";
import "aos/dist/aos.css";
import AdvantageCard from './advantage-card';
import group from '../../images/iconography/hospice/group.png';
import clock from '../../images/iconography/careers/clock.png';
import checkbox from '../../images/iconography/about/checkbox.png';
import health from '../../images/iconography/hospice/healthcare.png';

const Advantages = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const advantageList = [
    {
      img: health,  
      title: 'Personalized Care',
      content: 'Our health care providers work directly with your physician so we can adapt to your specific health care needs as effecitvely as possible.',
      animationTime: '800'
    },
    {
      img: clock,  
      title: 'Convenience',
      content: 'Shortens and in some cases, eliminates hospitalizations or skilled nursing home stays. Many risks, such as infection, are eliminated or minimized when care is given at home.',
      animationTime: '1100'
    },
    {
      img: group,  
      title: 'Independence',
      content: 'We strive to help you regain your independence and maintain your quality of life so you can look forward to a brighter future.',
      animationTime: '1500'
    },
    {
      img: checkbox,  
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
                    return <AdvantageCard key={item.title} img={item.img} title={item.title} content={item.content} animationTime={item.animationTime} />
                })
            }
        </div>
    </div>
  );
}

export default Advantages;