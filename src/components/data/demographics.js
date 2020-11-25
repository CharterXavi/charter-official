import React from 'react'
import './demographics.css'
import { Doughnut } from 'react-chartjs-2';

const DemographicsCharts = () => {

const genderData = {
    labels: ['Male', 'Female', 'Not Specified'],
    datasets: [
        {
        fill: false,
        backgroundColor: ['orange', '#f05f7e', '#363f55'],
        borderColor: 'white',
        data: [21, 78, 1]
        }
    ]
}
const ethnicityData = {
    labels: ['Asian', 'White', 'Black or African American', 'Native Hawaiian or Other Pacific Islander', 'Two or more races (Not Hispanic or Latino)', 'Hispanic or Latino'],
    datasets: [
        {
        fill: false,
        backgroundColor: ['#f05f7e', '#F493AA', '#F2D1C9', 'orange', '#0Fbdbd', '#546182', '#363f55'],
        borderColor: 'white',
        data: [17, 36, 10, 2, 2, 33]
        }
    ]
}

  return (
    <div className='DemographicCharts'>
        <div className='gender-chart'>
            <h6 className='detail-title'>Gender Distribution</h6>
            <Doughnut data={genderData} options={{ maintainAspectRatio: false }} />
        </div>
        <div className='ethnicity-chart'>
            <h6 className='detail-title'>Ethnic/Racial Distribution</h6>
            <Doughnut data={ethnicityData} options={{ maintainAspectRatio: false }} />
        </div>
    </div>
  )
}

export default DemographicsCharts;