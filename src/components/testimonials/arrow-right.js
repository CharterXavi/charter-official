import React from 'react';
import arrowRight from '../../images/iconography/arrow-right.png';
import './arrow-right.css';

const ArrowRight = (props) => {

    const handleClick = () => {
        props.goToNext();
    }

    return (
        <div className='ArrowRight' onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex='0' >
            <img src={arrowRight} alt="forward arrow" />
        </div>
    );
};

export default ArrowRight;