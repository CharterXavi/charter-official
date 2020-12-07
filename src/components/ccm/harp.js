import React, {useEffect} from 'react';
import './harp.css';
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonSecondary from '../buttons/button-secondary';
import directiveForm from '../../images/directive.pdf';
import polstForm from '../../images/polst.pdf';
import healthIcon from '../../images/iconography/hospice/healthcare.png';
import stethoscopeIcon from '../../images/iconography/hospice/stethoscope.png';

const HARP = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className='HARP'>
      <div className='two-column'>
        <div className="title">
          <h5>Transitional Care Management</h5>
        </div>
        <div className="content">
          <div className="left">
            <h6>What is TCM?</h6>
            <p>Transitional Care Management (TCM) is a program that provides services for individuals who need help during transitions in care from an inpatient setting (including acute hospital, rehabilitation hospital, long-term acute care hospital or skilled nursing facility) to the patient’s home.</p>
            <p>A Transitional Care Specialist will visit you at the hospital or at home to explain the benefits of the program. Then a home nurse visit will be set up to evaluate your needs.</p>
          </div>
          <div className="right">
            <h6>Goals</h6>
            <p>The Program can help you:</p>
            <ul>
                <li>Stay safe and stable at home to avoid unnecessary visits to the hospital</li>
                <li>Set goals or your health</li>
                <li>Prepare for your routine visit to your primary care doctor</li>
                <li>Answer questions and concerns you may have regarding your condition</li>
                <li>Learn about your symptoms and how to treat them</li>
                <li>Teach you about your health condition and your medications</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='two-column'>
        <div className="title">
          <h5>Advanced Care Planning</h5>
        </div>
        <div className="content">
          <div className="left">
            <h6>What is ACP?</h6>
            <p>Our qualified health care professionals work to help you identify your needs, goals and medical treatment preferences so you have a plan in place for advanced care. Once these first steps are completed they will help you select the most appropriate Advanced Care Directive. The goal is to ensure that you select a health care agent that you trust and feel comfortable with and that you receive the treatment you want when you can no longer make those decisions for yourself.</p>
          </div>
          <div className="right">
            <h6>Forms</h6>
            <p>Two important forms should be completed during this process: the Advanced Healthcare Directive and the Physician's Order for Life-Sustaining Treatment (POLST).</p>
          </div>
        </div>
        <div className='forms'>
              <div className='form-card' data-aos='fade-up' data-aos-duration='800'>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" viewBox="0 0 54 54" fill="none" className='icon'>
                    <g filter="url(#healthcare)">
                        <circle cx="27" cy="25" r="24" fill="url(#healthcare1)" stroke="#363F55" strokeWidth="2"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M32 12C32 10.8954 31.1046 10 30 10H24C22.8954 10 22 10.8954 22 12V18C22 19.1046 21.1046 20 20 20H14C12.8954 20 12 20.8954 12 22V28C12 29.1046 12.8954 30 14 30H20C21.1046 30 22 30.8954 22 32V38C22 39.1046 22.8954 40 24 40H30C31.1046 40 32 39.1046 32 38V32C32 30.8954 32.8954 30 34 30H40C41.1046 30 42 29.1046 42 28V22C42 20.8954 41.1046 20 40 20H34C32.8954 20 32 19.1046 32 18V12Z" fill="white"/>
                    </g>
                    <defs>
                        <filter id="healthcare" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <linearGradient id="healthcare1" x1="4.67857" y1="50" x2="62.7587" y2="24.6388" gradientUnits="userSpaceOnUse">
                            <stop offset="0.109375" stopColor="#F14D70"/>
                            <stop offset="0.317708" stopColor="#FF008A"/>
                            <stop offset="0.520833" stopColor="#FF446C"/>
                            <stop offset="0.869792" stopColor="#FFB016"/>
                        </linearGradient>
                    </defs>
                </svg>
                <h6 className='detail-title'>Advanced Healthcare Directive</h6>
                <p className='detail-text'>You have the right to give instructions about your own health care and to name someone else to make health care decisions for you. This form lets you do either or both of these things.</p>
                <ButtonSecondary link={directiveForm} download={true} content='Download form' />
              </div>
              <div className='form-card' data-aos='fade-up' data-aos-duration='1400'>
                <svg width="55" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className='icon'>
                  <g filter="url(#stetho)">
                    <circle cx="32" cy="30" r="29" fill="url(#stetho1)" stroke="#363F55" strokeWidth="2"/>
                    <path d="M27.7969 8.39999C16.7068 23.1554 26.0004 28.2 26.0004 28.2M26.0004 28.2C26.0004 28.2 34.1334 33.1253 43.6392 17.9711M26.0004 28.2C26.0004 28.2 12.1989 41.4 20.5998 48.6C29.0008 55.8 47.6003 39.9048 47.6003 39.9048" stroke="white" strokeWidth="2"/>
                    <ellipse cx="28.4" cy="7.19999" rx="2.4" ry="2.4" fill="#363F55"/>
                    <ellipse cx="49.3997" cy="39" rx="4.2" ry="4.2" fill="#363F55"/>
                    <ellipse cx="44.0001" cy="16.8" rx="2.4" ry="2.4" fill="#363F55"/>
                    <ellipse cx="49.3999" cy="39" rx="3" ry="3" fill="white"/>
                  </g>
                  <defs>
                    <filter id="stetho" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <linearGradient id="stetho1" x1="5.21429" y1="60" x2="74.9105" y2="29.5666" gradientUnits="userSpaceOnUse">
                      <stop offset="0.109375" stopColor="#F14D70"/>
                      <stop offset="0.317708" stopColor="#FF008A"/>
                      <stop offset="0.520833" stopColor="#FF446C"/>
                      <stop offset="0.869792" stopColor="#FFB016"/>
                    </linearGradient>
                  </defs>
                </svg>
                <h6 className='detail-title'>Physician's Orders for Life-Sustaining Treatment (POLST)</h6>
                <p className='detail-text'>This is a medical order that tells emergency health care professionals what to do during a medical crisis where the patient cannot speak for him or herself.</p>
                <ButtonSecondary link={polstForm} download={true} content='Download form' />
              </div>
            </div>
      </div>
    </div>
  );
}

export default HARP;