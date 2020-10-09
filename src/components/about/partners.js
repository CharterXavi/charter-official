import React from "react";
import './partners.css';
import covina from '../../images/covina.png';
import epic from '../../images/epic.png';
import valley from '../../images/valley.png';
import primecare from '../../images/primecare.png';
import iehp from '../../images/iehp.png';
import lomalinda from '../../images/lomalinda.png';
import lakeside from '../../images/lakeside.png';
import regal from '../../images/regal.png';

const Partners = () => {

  return (
    <div className='Partners'>
        <img src={covina} alt="Company Logo" />
        <img src={epic} alt="Company Logo" />
        <img src={valley} alt="Company Logo" />
        <img src={primecare} alt="Company Logo" />
        <img src={iehp} alt="Company Logo" />
        <img src={lomalinda} alt="Company Logo" />
        <img src={lakeside} alt="Company Logo" />
        <img src={regal} alt="Company Logo" />
    </div>
  )
}

export default Partners;