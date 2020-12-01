import React, {useEffect} from 'react';
import './care-approach.css';
import AOS from "aos";
import "aos/dist/aos.css";
import CareCard from './care-card';
import c from '../../images/iconography/c.png';
import a from '../../images/iconography/a.png';
import r from '../../images/iconography/r.png';
import e from '../../images/iconography/e.png';

const CareApproach = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const careList = [
    {
      img: c,  
      title: 'Coordination',
      content: 'Together with your primary health care provider, our team coordinates a plan of care that will offer effective pain and symptom management in every part of your treatment.',
      animationTime: '800'
    },
    {
      img: a,  
      title: 'Access',
      content: 'Our team is available to help 24 hours a day, 7 days a week, both by telephone and through home visits. You can request a nurse, a social worker or a chaplain to visit you at home.',
      animationTime: '1100'
    },
    {
      img: r,  
      title: 'Response',
      content: 'We care about your well-being and will work as hard as possible to ensure a quick response. You will receive visits from your team routinely and when you need them.',
      animationTime: '1500'
    },
    {
      img: e,  
      title: 'Education',
      content: 'Discussions about treatment, choices like symptom/pain management, will be provided so that you understand your condition, care options and other needs.',
      animationTime: '1900'
    }
]

return (
    <div className='CareApproach'>
                <h4>Our Palliative C.A.R.E. Approach</h4>
        <div className='care-card-wrapper'>
            {
                careList.map(item => {
                    return <CareCard key={item.title} img={item.img} title={item.title} content={item.content} animationTime={item.animationTime} />
                })
            }
        </div>
    </div>
  );
}

export default CareApproach;