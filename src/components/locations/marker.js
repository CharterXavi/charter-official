import React from 'react';
import './marker.css';
import pinIcon from '../../images/iconography/locations/pin.png';

const Marker = (props) => {
    return (
        <div className="Marker" title={props.name}>
            <img src={pinIcon} alt="Pin" />
        </div>
    );
  };

  export default Marker;