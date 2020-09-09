import React from 'react';
import arrowLeft from '../../images/iconography/arrow-left.png';
import './arrow-left.css';

const ArrowLeft = (props) => {

    const handleClick = () => {
        props.goToPrev();
    }

    return (
        <div className='ArrowLeft' onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex='0' >
            <img src={arrowLeft} alt="back arrow" />
        </div>
    );
};

export default ArrowLeft;