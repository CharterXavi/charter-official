import React from 'react';
import arrowLeft from '../../images/iconography/arrow-left.png';
import './arrow-left.css';

const ArrowLeft = (props) => {

    const handleClick = () => {
        props.goToPrev();
    }

    return (
        <div className='ArrowLeft' onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex='0' >
            <img src={arrowLeft} alt="back arrow" width='20' height='11.5' />
        </div>
    );
};

export default ArrowLeft;