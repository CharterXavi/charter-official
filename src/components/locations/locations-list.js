import './locations-list.css'
import "aos/dist/aos.css";

import React, {useEffect} from 'react'

import AOS from "aos";

const LocationsList = (props) => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className='LocationsList'data-aos='fade-up' data-aos-duration={props.animationTime} data-aos-once="true">
            LOCATIONS
        </div>
    );
};

export default LocationsList