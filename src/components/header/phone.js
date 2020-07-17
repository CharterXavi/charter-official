import React from 'react'
import './phone.css'
import phoneIcon from '../../images/phone-outline.png'; //uses webpack to store data about the image in an import

const Phone = () => {
    return (
        <div className='Phone'>
            <a href='tel:+11234567890' className='btn-primary'><img src={phoneIcon} alt='Phone Icon' /> {/* data about Logo from webpack used as src for image */}123-456-7890</a>
        </div>
    );
};

export default Phone