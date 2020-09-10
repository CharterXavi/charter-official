import React, {useEffect} from 'react'
import './data.css'
import ButtonPrimaryAlt from '../buttons/button-primary-alt'
import HomeChart from './home-chart'
import AOS from "aos";
import "aos/dist/aos.css";

const DataStrip = () => {
  
  useEffect(() => {
      AOS.init();
      AOS.refresh();
  }); 

  return (
    <div className='DataStrip'>
        <div className='left'>
            <HomeChart />
        </div>
        <div className='right'> 
            <h2>We're making a real impact.</h2>
            <p className='introduction-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus diam vitae ut et tincidunt quis sem est, ligula. Aliquam venenatis ut dapibus neque leo. Purus aliquet suscipit turpis volutpat nisl porta elit diam. Et nunc nunc neque aliquet ultricies risus.</p>
            <ButtonPrimaryAlt content='Read more' animation='fade-up' animationTime='1000' />
        </div>
    </div>
  )
}

export default DataStrip