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
      content: 'Our health care providers work directly with your physician to better adapt to your specific health care needs.',
      animationTime: '800'
    },
    {
      img: group,  
      title: 'Independence',
      content: 'Helps you regain your independence and maintain your quality of life.',
      animationTime: '1100'
    },
    {
      img: checkbox,  
      title: 'Control',
      content: 'Gives you choices and allows you to be an active participant in your own care.',
      animationTime: '1500'
    },
    {
      img: clock,  
      title: 'Convenience',
      content: 'Shortens and in some cases, eliminates hospitalizations or skilled nursing home stays. Many risks, such as infection, are eliminated or minimized when care is given at home.',
      animationTime: '1900'
    }
]

return (
    <div className='Advantages'>
        <h2>Advantages of Home Health</h2>
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