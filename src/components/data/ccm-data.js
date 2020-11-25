import React from 'react'
import './ccm-data.css'
import { Line, Bar } from 'react-chartjs-2';
import heartIcon from '../../images/iconography/services/heart.png';
import moneyIcon from '../../images/iconography/moneybag.png';
import ButtonSecondary from '../buttons/button-secondary';

const CCMData = () => {

    const clinicalData = {
        labels: ['0 Days', '90 Days'],
        datasets: [
            {
            label: 'Emergency Room Utilization',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#363f55',
            borderColor: '#363f55',
            borderWidth: 3,
            borderJoinStyle: 'miter',
            borderCapStyle: 'butt',
            pointRadius: 1,
            pointHoverRadius: 5,
            pointBorderWidth: 1,
            data: [0, -34.19]
            },
            {
            label: 'Hospital Admissions',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#0FBDBD',
            borderColor: '#0FBDBD',
            borderJoinStyle: 'miter',
            borderWidth: 2,
            borderDash: [2],
            borderCapStyle: 'butt',
            pointRadius: 1,
            pointHoverRadius: 5,
            pointBorderWidth: 1,
            data: [0, -62]
            },
            {
            label: 'Hospital Bed Days',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#f05f7e',
            borderColor: '#f05f7e',
            borderWidth: 2,
            borderJoinStyle: 'miter',
            borderCapStyle: 'butt',
            pointRadius: 1,
            pointHoverRadius: 5,
            pointBorderWidth: 1,
            data: [0, -63]
            }
        ]
    }

    const costData = {
      labels: ['Gross Savings', 'Operating Cost', 'Net Savings'],
      datasets: [
        {
          label: 'Dollar Amounts (in millions)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#363F55',
          hoverBackgroundColor: '#546182',
          data: [44.7, 19.3, 25.3]
        }
      ]
    };

  return (
    <div className='CCMData'>
      <div className='two-column'>
        <div className="title">
          <h4>The proven power of CCM</h4>
          <hr/>
        </div>
        <div className="content">
          <p>Our Complex Care Management program has a solid track record in improving the quality of care patients receive and in lowering their overall healthcare costs by significantly reducing hospital admissions. To properly research our program and see its efficacy, we teamed up with UCLA Biostatistics in a large CCM Study.</p>
        </div>
      </div>
      <div className='clinical-stats two-column-right'>
        <div className='left'>
          <div className='data-container'>
            <Line data={clinicalData} width={100} height={100} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className='right'>
          <img src={heartIcon} alt="Heart" />
          <h5>Healthier patients</h5>
          <p>90 days after enrollment in the CCM program, we saw some wonderful changes: emergency room utilization decreased 34.19%, number of hospital admissions decreased 62.58%, and hospital bed days decreased 62.87%.</p>
        </div>
      </div>
      <div className='cost-stats two-column-left'>
        <div className='left'>
          <img src={moneyIcon} alt="Moneybag" />
          <h5>More affordable care</h5>
          <p>The estimated cost savings attributed to the CCM model was $44,708,312. Estimated operating cost of the CCM model was $19,331,564 which gave a total estimated net savings of $25,376,748; return on investment (ROI) 2.31. The cost savings analysis and ROI demonstrated a significantly cost effective model of care.</p>
        </div>
        <div className='right'>
          <div className='data-container'>
            <Bar data={costData} width={100} height={100} options={{ maintainAspectRatio: false }} />
          </div>          
        </div>
      </div>
    </div>
  )
}

export default CCMData;