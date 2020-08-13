import React from 'react'
import './demographics.css'
import { Doughnut } from 'react-chartjs-2';

const DemographicsChart = () => {

const genderData = {
    labels: ['Men', 'Women'],
    datasets: [
        {
        fill: false,
        backgroundColor: ['#f05f7e', 'orange'],
        borderColor: 'white',
        data: [50, 50]
        }
    ]
}
const ethnicityData = {
    labels: ['Asian', 'Caucasian', 'Black', 'Hispanic', 'Native American'],
    datasets: [
        {
        fill: false,
        backgroundColor: ['#f05f7e', '#0FBDBD', 'orange', '#F493AA', '#363f55'],
        borderColor: 'white',
        data: [20, 20, 20, 20, 20]
        }
    ]
}

  return (
    <div className='DemographicsChart'>
        <Doughnut data={genderData} options={{ maintainAspectRatio: false }}/>
        <Doughnut data={ethnicityData} options={{ maintainAspectRatio: false }}/>
    </div>
  )
}

export default DemographicsChart;