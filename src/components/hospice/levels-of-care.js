import React, {useEffect} from 'react';
import './levels-of-care.css';
import AOS from "aos";
import "aos/dist/aos.css";
import oneIcon from '../../images/iconography/one.png';
import twoIcon from '../../images/iconography/two.png';
import threeIcon from '../../images/iconography/three.png';
import fourIcon from '../../images/iconography/four.png';
import LevelsCard from './levels-card';

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
        content: 'Delivered primarily where the patient resides and provided by a team of hospice professionals. Care may involve skilled nursing care, certified home health aides, emotional and spiritual care, social services and/or volunteer services.',
        animationTime: '1100'
      },
      {
        img: threeIcon,  
        title: 'General Inpatient Care',
        content: 'Delivered primarily where the patient resides and provided by a team of hospice professionals. Care may involve skilled nursing care, certified home health aides, emotional and spiritual care, social services and/or volunteer services.',
        animationTime: '1500'
      },
      {
        img: fourIcon,  
        title: 'Continuous Care',
        content: 'Delivered primarily where the patient resides and provided by a team of hospice professionals. Care may involve skilled nursing care, certified home health aides, emotional and spiritual care, social services and/or volunteer services.',
        animationTime: '1900'
      }
  ]

  return (
    <div className='LevelsOfCare'>
        <h2>4 Levels of Care</h2>
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