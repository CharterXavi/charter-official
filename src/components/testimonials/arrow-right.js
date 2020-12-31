import './arrow-right.css';

import React from 'react';
import arrowRight from '../../images/iconography/arrow-right.png';

const ArrowRight = (props) => {

    const handleClick = () => {
        props.goToNext();
    }

    return (
        <div className='ArrowRight' onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex='0' >
            <img src={arrowRight} alt="forward arrow" width='20' height='11.5'/>
        </div>
    );
};

export default ArrowRight;