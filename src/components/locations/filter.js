import './filter.css'

import React, {useState} from 'react'

const Filter = (props) => {

    const [isActive, setActive] = useState('all');

    const handleClick = (id) => {
        setActive(id);
        props.filterByState(id);
    }

    return (
        <ul className='Filter'>
            <li className={`${isActive === 'all' ? 'active' : ''}`} onClick={() => handleClick('all')} key='all'>All</li>
            {props.allStates.map(locationState => {
                return (
                    <li className={`${isActive === locationState ? 'active' : ''}`} onClick={() => {handleClick(locationState)}} key={locationState}>{locationState}</li>
                )
            })}
        </ul>
    );
};

export default Filter