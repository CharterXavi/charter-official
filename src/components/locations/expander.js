import './expander.css'

import React, {useEffect, useState} from 'react'

const Expander = (props) => {


  //Upon render or rerender, allow for height calculation to be dynamic based on window size
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
      //upon render, listen for screen size change and setState to 
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 
      }
  });
  useEffect(() => {
    handleResize();
  });
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  } 

  //calculate the height based on the amount of items in the list
  const heightFactor = `${screenWidth < 450 ? 
    ((props.cities.length * 59) + screenWidth/100).toString().concat('px')
    :
    (props.cities.length * 45).toString().concat('px')
  }`;
  const handleHover = (id) => {
    props.hoverReveal(id);
  }

  const businesses = [];
  props.cities.map(city => {
    city.locations.map(business => {
      return businesses.push(business);
    })
    return city;
  })

  //render a menu that displays a link for each page in the config file
    return (
        <div className={`Expander ${props.isExpanded ? 'expanded-card' : ''}`} style={{height: `${props.isExpanded ? heightFactor : '0px'}`}}>
          {businesses.map(business => {
            return <a 
              href={business.link} 
              target='_blank' 
              rel='noopener noreferrer' 
              key={business.name} 
              onMouseOver={() => {handleHover(business.name)}}
              onFocus={() => {handleHover(business.name)}}
            >
              {business.name}
            </a>
          })}
        </div>
    );
};

export default Expander;