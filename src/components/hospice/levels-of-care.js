import './levels-of-care.css';
import "aos/dist/aos.css";

import React, {useEffect} from 'react';

import AOS from "aos";
import LevelsCard from './levels-card';
import fourIcon from '../../images/iconography/four.png';
import oneIcon from '../../images/iconography/one.png';
import threeIcon from '../../images/iconography/three.png';
import twoIcon from '../../images/iconography/two.png';

const LevelsOfCare = (props) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const levelsList = [
      {
        img: oneIcon,  
        title: 'Routine Home Health',
        content: 'Delivered primarily where the patient resides and provided by a team of hospice professionals. Care may involve skilled nursing care, certified home health aides, emotional and spiritual care, social services and/or volunteer services.',
        animationTime: '800'
      },
      {
        img: twoIcon,  
        title: 'Respite Care',
        content: 'Provided in order to relieve the individuals caring for the patient from caregiving duties. Respite care is available for up to five days at a time in a skilled nursing facility. Hospice will cover the cost of the facility while under respite care.',
        animationTime: '1100'
      },
      {
        img: threeIcon,  
        title: 'General Inpatient Care',
        content: 'Provided to patients with an acute onset of symptoms that cannot be managed on a routine level of care. Patients on general inpatient will be transferred to a contracted skilled nursing facility in order to have twenty-four hour nursing supervision.',
        animationTime: '1500'
      },
      {
        img: fourIcon,  
        title: 'Continuous Care',
        content: 'Provided where the patient resides and is designed to maintain an individual at home during a medical crisis.',
        animationTime: '1900'
      }
  ]

  return (
    <div className='LevelsOfCare'>
        <h4>4 Levels of Care</h4>
        <div className='levels-card-wrapper'>
            {
                levelsList.map(level => {
                    return <LevelsCard key={level.title} img={level.img} title={level.title} content={level.content} animationTime={level.animationTime} />
                })
            }
        </div>
    </div>
  );
}

export default LevelsOfCare;