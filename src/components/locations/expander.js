import React from 'react'
import './expander.css'


const Expander = (props) => {
  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Expander ${props.isExpanded ? 'expanded-card' : ''}`}>
          {props.cities.map(city => {
            return <p>{city.name}</p>
          })}
        </div>
    );
};

export default Expander