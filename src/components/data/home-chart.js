import React from 'react'
import './home-chart.css'
import { Line } from 'react-chartjs-2';

const HomeChart = () => {

const data = {
    labels: ['January', 'February', 'March',
    'April', 'May', 'June', 'July'],
    datasets: [
        {
        label: 'Patient Health',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: '#f05f7e',
        borderWidth: 2,
        data: [22, 45, 78, 67, 95, 86, 110]
        },
        {
        label: 'Patient Satisfaction',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: '#0FBDBD',
        borderWidth: 2,
        data: [10, 25, 18, 45, 64, 55, 89]
        }
    ]
}

  return (
    <div className='HomeChart'>
        <Line data={data} options={{ maintainAspectRatio: false }}/>
    </div>
  )
}

export default HomeChart;