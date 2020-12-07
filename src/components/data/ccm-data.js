import React from 'react'
import './ccm-data.css'
import { Line, Bar } from 'react-chartjs-2';

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
          <svg xmlns="http://www.w3.org/2000/svg" width="46" viewBox="0 0 47 47" fill="none" className='icon'>
              <g filter="url(#heart)">
                  <mask id="heart2" fill="white">
                      <path fillRule="evenodd" clipRule="evenodd" d="M42.664 18.6332C45.5854 13.2946 45.268 7.05515 41.4133 3.20045C36.8916 -1.32132 29.0883 -0.975501 23.3069 3.75578C17.5254 -0.975497 9.72219 -1.32131 5.20043 3.20045C1.19098 7.20989 1.0086 13.7993 4.31717 19.2716C4.33123 19.3015 4.34578 19.3315 4.36081 19.3616C7.78391 26.2078 15.4253 35.3975 19.9048 40.5131C21.7684 42.6414 25.0039 42.696 26.9046 40.6007C31.1957 35.8703 38.3458 27.392 42.3608 19.3616C42.4852 19.1128 42.5859 18.8701 42.664 18.6332Z"/>
                  </mask>
                  <path fillRule="evenodd" clipRule="evenodd" d="M42.664 18.6332C45.5854 13.2946 45.268 7.05515 41.4133 3.20045C36.8916 -1.32132 29.0883 -0.975501 23.3069 3.75578C17.5254 -0.975497 9.72219 -1.32131 5.20043 3.20045C1.19098 7.20989 1.0086 13.7993 4.31717 19.2716C4.33123 19.3015 4.34578 19.3315 4.36081 19.3616C7.78391 26.2078 15.4253 35.3975 19.9048 40.5131C21.7684 42.6414 25.0039 42.696 26.9046 40.6007C31.1957 35.8703 38.3458 27.392 42.3608 19.3616C42.4852 19.1128 42.5859 18.8701 42.664 18.6332Z" fill="url(#heart1)"/>
                  <path d="M42.664 18.6332L40.9095 17.6732L40.8218 17.8335L40.7646 18.007L42.664 18.6332ZM41.4133 3.20045L42.8275 1.78623L42.8275 1.78623L41.4133 3.20045ZM23.3069 3.75578L22.0402 5.30356L23.3069 6.34012L24.5735 5.30356L23.3069 3.75578ZM5.20043 3.20045L6.61464 4.61466L6.61464 4.61466L5.20043 3.20045ZM4.31717 19.2716L6.1273 18.4211L6.0828 18.3264L6.02867 18.2368L4.31717 19.2716ZM4.36081 19.3616L2.57195 20.256L2.57196 20.256L4.36081 19.3616ZM19.9048 40.5131L18.4001 41.8306L18.4001 41.8306L19.9048 40.5131ZM26.9046 40.6007L28.3859 41.9444L28.3859 41.9444L26.9046 40.6007ZM42.3608 19.3616L40.5719 18.4672L40.5719 18.4672L42.3608 19.3616ZM44.4185 19.5933C47.6489 13.6899 47.4677 6.42636 42.8275 1.78623L39.9991 4.61466C43.0684 7.68393 43.5218 12.8993 40.9095 17.6732L44.4185 19.5933ZM42.8275 1.78623C37.3744 -3.66688 28.3709 -2.97272 22.0402 2.208L24.5735 5.30356C29.8057 1.02172 36.4087 1.02424 39.9991 4.61466L42.8275 1.78623ZM24.5735 2.208C18.2429 -2.97272 9.23932 -3.66687 3.78621 1.78624L6.61464 4.61466C10.2051 1.02425 16.808 1.02172 22.0402 5.30356L24.5735 2.208ZM3.78621 1.78624C-1.04227 6.61472 -1.04369 14.2705 2.60567 20.3064L6.02867 18.2368C3.06089 13.3282 3.42424 7.80507 6.61464 4.61466L3.78621 1.78624ZM2.50704 20.1222C2.52812 20.167 2.54976 20.2116 2.57195 20.256L6.14967 18.4672C6.14179 18.4514 6.13434 18.4361 6.1273 18.4211L2.50704 20.1222ZM2.57196 20.256C6.12729 27.3667 13.9421 36.7396 18.4001 41.8306L21.4095 39.1955C16.9086 34.0555 9.44053 25.0489 6.14967 18.4672L2.57196 20.256ZM18.4001 41.8306C21.0377 44.8428 25.6683 44.9403 28.3859 41.9444L25.4233 39.2569C24.3395 40.4517 22.4992 40.44 21.4095 39.1955L18.4001 41.8306ZM28.3859 41.9444C32.6924 37.1971 40.0038 28.5482 44.1497 20.256L40.5719 18.4672C36.6878 26.2359 29.699 34.5434 25.4233 39.2569L28.3859 41.9444ZM44.1497 20.256C44.3135 19.9283 44.4525 19.596 44.5634 19.2595L40.7646 18.007C40.7194 18.1441 40.6569 18.2973 40.5719 18.4672L44.1497 20.256Z" fill="#363F55" mask="url(#heart2)"/>
              </g>
              <defs>
                  <filter id="heart" x="0" y="0" width="46.6138" height="46.1412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                  </filter>
                  <linearGradient id="heart1" x1="4.28288" y1="42.1412" x2="53.605" y2="20.3628" gradientUnits="userSpaceOnUse">
                      <stop offset="0.109375" stopColor="#F14D70"/>
                      <stop offset="0.317708" stopColor="#FF008A"/>
                      <stop offset="0.520833" stopColor="#FF446C"/>
                      <stop offset="0.869792" stopColor="#FFB016"/>
                  </linearGradient>
              </defs>
          </svg>
          <h5>Healthier patients</h5>
          <p>90 days after enrollment in the CCM program, we saw some wonderful changes: emergency room utilization decreased 34.19%, number of hospital admissions decreased 62.58%, and hospital bed days decreased 62.87%.</p>
        </div>
      </div>
      <div className='cost-stats two-column-left'>
        <div className='left'>
          <svg width="46" height="54" viewBox="0 0 46 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#bag)">
              <path d="M18.964 11.2246C19.2516 10.9769 19.4816 10.7834 19.643 10.6492H26.2102C26.3689 10.7771 26.595 10.9615 26.8778 11.1979C27.4736 11.6962 28.3202 12.4246 29.3169 13.3402C31.3129 15.1739 33.8983 17.7473 36.2759 20.7183C38.6596 23.6969 40.7973 27.0294 41.9454 30.3809C43.0898 33.7216 43.2274 37.0016 41.7446 39.9876C38.7147 46.0891 31.1243 49.1048 23.1759 48.9973C15.2283 48.8898 7.46554 45.6614 4.20252 39.9372C2.6361 37.1892 2.70176 34.0454 3.81264 30.747C4.92687 27.4388 7.06237 24.0796 9.4617 21.0433C11.8541 18.0159 14.4688 15.359 16.4908 13.4556C17.5004 12.5052 18.3591 11.7455 18.964 11.2246Z" fill="url(#bag1)" stroke="#363F55" strokeWidth="2"/>
              <path d="M18.0769 1.33529L20.5976 1.85648L20.8793 1.91472L21.1488 1.81439L23.1569 1.06701L25.165 1.81439L25.4472 1.9194L25.7404 1.85119L27.7488 1.38402L25.8451 6.89474H19.9974L18.0769 1.33529Z" fill="url(#bag2)" stroke="#363F55" strokeWidth="2"/>
              <path d="M17.1241 32.9863L17.1337 32.975C17.4136 32.6426 17.807 32.3908 18.3039 32.3908C18.5218 32.3908 18.741 32.4303 18.9497 32.5216C19.1261 32.5832 19.3149 32.6749 19.5062 32.7804L19.5253 32.7909L19.5438 32.8025C20.123 33.1671 20.6749 33.4251 21.1996 33.5864C21.7384 33.7479 22.3043 33.8298 22.9004 33.8298C23.7347 33.8298 24.2599 33.671 24.5727 33.4529L24.5807 33.4474L24.5807 33.4474C24.8635 33.2557 25.0051 33.0049 25.0051 32.5942C25.0051 32.4179 24.9535 32.3222 24.8566 32.2381L25.2935 31.7351L24.8566 32.2381C24.6745 32.0799 24.4287 31.9409 24.0992 31.8349L24.0888 31.8315L24.0785 31.8279C23.7034 31.6952 23.1587 31.5378 22.4331 31.3563C21.3952 31.1025 20.53 30.8438 19.8476 30.5777L19.8351 30.5728L19.8352 30.5727C19.0863 30.2652 18.4393 29.8022 17.9005 29.1905C17.2854 28.4922 17.0174 27.5876 17.0174 26.5623C17.0174 25.2853 17.5014 24.1819 18.4379 23.2939L18.9576 23.842L18.4379 23.2939C19.2158 22.5562 20.1822 22.0698 21.3075 21.8142V21.2006C21.3075 20.729 21.4621 20.2824 21.815 19.9368C22.1674 19.5777 22.6227 19.4202 23.1047 19.4202C23.5867 19.4202 24.042 19.5777 24.3945 19.9368C24.7473 20.2824 24.902 20.729 24.902 21.2006V21.78C26.125 22.0246 27.2154 22.5155 28.1585 23.2603C28.6592 23.6286 28.9469 24.1546 28.9469 24.7882C28.9469 25.2366 28.7992 25.6481 28.5131 25.9929C28.2313 26.3494 27.8297 26.5883 27.3335 26.5883C27.1285 26.5883 26.928 26.5551 26.7345 26.4929L26.7216 26.4887L26.7088 26.4841C26.5239 26.4172 26.3202 26.3045 26.1182 26.1792L26.1042 26.1705L26.0905 26.1612C25.5712 25.8067 25.0959 25.5569 24.6638 25.3992L24.6524 25.395L24.6411 25.3905C24.2622 25.2381 23.777 25.1493 23.166 25.1493C22.426 25.1493 21.9249 25.3107 21.589 25.5559L21.5785 25.5636L21.5784 25.5635C21.281 25.7729 21.143 26.0324 21.143 26.4243C21.143 26.6696 21.2145 26.8203 21.3351 26.9393C21.5286 27.115 21.789 27.2674 22.1372 27.3829C22.5451 27.5182 23.1148 27.6768 23.8543 27.8584C24.8668 28.0994 25.7149 28.3523 26.3874 28.6203C27.1249 28.9142 27.7554 29.3655 28.27 29.9681C28.872 30.6417 29.1308 31.5213 29.1308 32.5154C29.1308 33.7728 28.6651 34.8573 27.7535 35.7224C27.0063 36.4424 26.0574 36.9144 24.9428 37.1656V37.7785C24.9428 38.2501 24.7881 38.6968 24.4353 39.0424C24.0829 39.4014 23.6276 39.5589 23.1456 39.5589C22.6636 39.5589 22.2082 39.4014 21.8558 39.0423C21.503 38.6967 21.3483 38.2501 21.3483 37.7785V37.2469C20.7519 37.1558 20.1667 37.013 19.5932 36.8183C18.8 36.549 18.097 36.189 17.4948 35.7308C17.249 35.5626 17.024 35.3398 16.8851 35.045M17.1241 32.9863L16.8851 35.045M17.1241 32.9863L17.1151 32.998C16.8446 33.3459 16.711 33.7536 16.711 34.1909C16.711 34.4788 16.7571 34.7733 16.8851 35.045M17.1241 32.9863L16.8851 35.045" fill="white" stroke="#363F55" strokeWidth="1.51072"/>
            </g>
            <defs>
              <filter id="bag" x="0" y="0" width="45.8304" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              <linearGradient id="bag1" x1="4.24091" y1="50" x2="52.257" y2="28.2647" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
              </linearGradient>
              <linearGradient id="bag2" x1="17.2394" y1="7.89474" x2="29.0097" y2="-0.390896" gradientUnits="userSpaceOnUse">
                <stop offset="0.109375" stopColor="#F14D70"/>
                <stop offset="0.317708" stopColor="#FF008A"/>
                <stop offset="0.520833" stopColor="#FF446C"/>
                <stop offset="0.869792" stopColor="#FFB016"/>
              </linearGradient>
            </defs>
          </svg>
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