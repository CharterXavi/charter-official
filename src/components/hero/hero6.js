import React, {useEffect} from 'react';
import iconBlast from '../../images/icon-blast.png';
import doctorGraphic from '../../images/doctor-svg3.png';
import ButtonPrimary from '../buttons/button-primary';
import charterFeather from '../../images/charter-feather.png';
import heroCloud from '../../images/hero-cloud.png';
import './hero6.css';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroStrip6 = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <div className='Hero6'>
            <div className='hero-wrapper'>
                <img src={heroCloud} alt="Cloud" className='hero-cloud'/>
                <div data-aos='fade-up' data-aos-duration='1200' className='icon-blast-wrapper'>
                    <img className='icon-blast' src={iconBlast} alt="Healthcare icons floating around" />
                </div>
                <img className='doctor-graphic' src={doctorGraphic} alt="Doctor at a desk" />
                <div className='hero-content'>
                    <img src={charterFeather} alt="Feather logo" data-aos='fade-up' data-aos-duration='600'/>
                    <h1 data-aos='fade-up' data-aos-duration='700'>Charter Healthcare Group</h1>
                    <h2 data-aos='fade-up' data-aos-duration='1000'>
                        We're here for you.
                        <br></br>
                        We're there for you.  
                    </h2>
                    <div data-aos='fade-up' data-aos-duration='1300'><ButtonPrimary link='/about' content='Learn More' /></div>
                </div>
            </div>
        </div>
    );
};

export default HeroStrip6