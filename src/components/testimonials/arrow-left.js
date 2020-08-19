import React from 'react';
import arrowLeft from '../../images/iconography/arrow-left.png';

const ArrowLeft = (props) => {

    const handleClick = () => {
        props.goToPrev();
    }

    return (
        <div className='ArrowLeft'>
            <img src={arrowLeft} alt="back arrow" onClick={handleClick} />
        </div>
    );
};

export default ArrowLeft;