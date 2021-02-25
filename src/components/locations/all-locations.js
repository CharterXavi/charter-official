import './all-locations.css'
import "aos/dist/aos.css";

import React, {useEffect, useState} from 'react'

import AOS from "aos";
import Filter from './filter'
import PhoneIcon from '../icons/phone';
import PinIcon from '../icons/pin';

const AllLocations = (props) => {
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
        })
        setActiveLocations(newLocations);
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
                                {location.address}
                            </p>
                            <p className="detail-text"> 
                                <a href={`tel:${location.number}`}>{location.number}</a>
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