import React from 'react'
import './expander.css'


const Expander = (props) => {
  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Expander ${props.isExpanded ? 'expanded-card' : ''}`}>
          <p>1012 East Cooley Drive, Suite G, Colton CA 92324</p>
          <p>P: 909-825-2969</p>
          <p>F: 909-825-8751</p>
        </div>
    );
};

export default Expander