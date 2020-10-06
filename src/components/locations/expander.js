import React from 'react'
import './expander.css'


const Expander = (props) => {
  //calculate the height based on the amount of items in the list
  const heightFactor = (props.cities.length * 30).toString().concat('px');
  const handleHover = (id) => {
    props.hoverReveal(id);
  }

  const businesses = [];
  props.cities.map(city => {
    city.locations.map(business => {
      businesses.push(business);
    })
  })

  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Expander ${props.isExpanded ? 'expanded-card' : ''}`} style={{height: `${props.isExpanded ? heightFactor : '0px'}`}}>
          {businesses.map(business => {
            return <p onMouseOver={() => {handleHover(business.name)}} id={business.name} >{business.name}</p>
          })}
        </div>
    );
};

export default Expander;