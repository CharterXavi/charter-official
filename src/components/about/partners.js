import React from "react";
import './partners.css';
import bcbs from '../../images/partners/bcbs.png';
import epic from '../../images/partners/epic.png';
import healthcarePartners from '../../images/partners/healthcare-partners.png';
import healthcenterPartners from '../../images/partners/healthcenter-partners.png';
import hollywoodPres from '../../images/partners/hollywood-pres.png';
import iehp from '../../images/partners/iehp.png';
import kaiser from '../../images/partners/kaiser.png';
import LACare from '../../images/partners/lacare.png';
import LLUH from '../../images/partners/lluh.png';
import mediCal from '../../images/partners/medical.png';
import medicare from '../../images/partners/medicare.png';
import monarch from '../../images/partners/monarch.png';
import regal from '../../images/partners/regal.png';
import riverside from '../../images/partners/riverside.png';

const Partners = () => {

  return (
    <div className='Partners'>
        <img src={bcbs} alt="Company Logo" />
        <img src={epic} alt="Company Logo" />
        <img src={healthcarePartners} alt="Company Logo" />
        <img src={healthcenterPartners} alt="Company Logo" />
        <img src={hollywoodPres} alt="Company Logo" />
        <img src={iehp} alt="Company Logo" />
        <img src={kaiser} alt="Company Logo" />
        <img src={LACare} alt="Company Logo" />
        <img src={LLUH} alt="Company Logo" />
        <img src={mediCal} alt="Company Logo" />
        <img src={medicare} alt="Company Logo" />
        <img src={monarch} alt="Company Logo" />
        <img src={regal} alt="Company Logo" />
        <img src={riverside} alt="Company Logo" />
    </div>
  )
}

export default Partners;