import React from 'react'
import './expander.css'


const Expander = (props) => {

  const heightFactor = (props.cities.length * 30).toString().concat('px');

  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Expander ${props.isExpanded ? 'expanded-card' : ''}`} style={{height: `${props.isExpanded ? heightFactor : '0px'}`}}>
          {props.cities.map(city => {
            return <p>{city.name}</p>
          })}
        </div>
    );
};

export default Expander