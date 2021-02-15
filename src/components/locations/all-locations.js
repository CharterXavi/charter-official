import './all-locations.css'
import "aos/dist/aos.css";

import React, {useEffect} from 'react'

import AOS from "aos";

const AllLocations = (props) => {
    console.log(props.pages)
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className='AllLocations' data-aos='fade-up' data-aos-duration={props.animationTime} data-aos-once="true">
            <div className="two-column">
                <div className="title">
                    <h4>All Charter Locations</h4>
                    <hr/>
                </div>
            </div>
            <ul className='card-list'>
            {props.pages.map(location => {
                return (
                    <li key={location.name} className='card'>
                        <a href={location.path}>
                            <h6 className="detail-title">{location.name}</h6>
                            <p className="detail-text">
                                {location.region}
                                <br />
                                P: {location.number}
                            </p>
                        </a>
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

export default AllLocations