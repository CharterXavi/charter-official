import './marker.css';

import {Link} from 'gatsby'
import React from 'react';
import pinIcon from '../../images/iconography/locations/pin.png';

const Marker = (props) => {

    return (
        <div className="Marker" title={props.name}>
            {
                (props.isHovered === props.name) ?
                <p className='active-hover'>{props.name}</p>
                :
                <p>{props.name}</p>
            }
            <Link to={props.link}>
                <img src={pinIcon} alt="Pin" className='icon'/>
            </Link>
        </div>
    );
  };

  export default Marker;