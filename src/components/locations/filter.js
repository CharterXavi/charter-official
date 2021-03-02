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
            <li 
            className={`${isActive === 'all' ? 'active' : ''}`} 
            key='all'
            >
                <button
                onClick={() => handleClick('all')} 
                onKeyPress={() => handleClick('all')} 
                >
                    All
                </button>
            </li>
            {props.allStates.map(locationState => {
                return (
                    <li 
                    className={`${isActive === locationState ? 'active' : ''}`} 
                    key={locationState}
                    >
                        <button
                        onClick={() => {handleClick(locationState)}} 
                        onKeyPress={() => handleClick('all')} 
                        >
                            {locationState}
                        </button>
                    </li>
                )
            })}
        </ul>
    );
};

export default Filter