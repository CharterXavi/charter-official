import './all-locations.css'
import "aos/dist/aos.css";

import React, {useEffect, useState} from 'react'

import AOS from "aos";
import Filter from './filter'

const AllLocations = (props) => {
    //All locations are passed in as props from locations page
    const [activeLocations, setActiveLocations] = useState(props.pages);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const getStates = (arr) => {
        let uniqueStates = [];
        arr.map(item => {
            return uniqueStates.includes(item.state) ? null : uniqueStates.push(item.state); 
        });
        return uniqueStates;
    }

    const filterByState = (state) => {
        if(state === 'all') return setActiveLocations(props.pages);
        
        let newLocations = [];
        props.pages.map(item => {
            if(item.state === state) {
                return newLocations.push(item);
            }
            return item;
        })
        return setActiveLocations(newLocations);
    }

    return (
        <div className='AllLocations'>
            <div className="two-column">
                <div className="title">
                    <h4>All Charter Locations</h4>
                    <hr/>
                </div>
            </div>
            <Filter 
                allStates={getStates(props.pages)}
                filterByState={filterByState}
            />
            <ul className='card-list'>
            {activeLocations.map(location => {
                return (
                    <li key={location.name} data-aos='fade-up' data-aos-duration='500'>
                        <div className='card'>
                            <h6 className='detail-title'>{location.name}</h6>
                            <p className="detail-text">
                                {location.address?.general}
                                {location.address.homeHealth}
                            </p>
                            <p className="detail-text"> 
                                <a href={`tel:${location.phone.general}`}>{location.phone.general}</a>
                                <a href={`tel:${location.phone.homeHealth}`}>{location.phone.homeHealth}</a>
                            </p>
                            <a href={location.path} className='bottom-link'>View {location.city} page</a>
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

export default AllLocations