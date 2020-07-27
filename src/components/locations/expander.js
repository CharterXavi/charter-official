import React from 'react'
import './expander.css'


const Expander = (props) => {
  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Expander ${props.isExpanded ? 'expanded-card' : ''}`}>
          <p>{props.address}</p>
          <p>{props.phone}</p>
          <p>{props.fax}</p>
        </div>
    );
};

export default Expander