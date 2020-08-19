import React, {useEffect} from 'react';
import arrowRight from '../../images/iconography/arrow-right.png';

const ArrowRight = (props) => {

    const handleClick = () => {
        props.goToNext();
    }

    return (
        <div className='ArrowRight'>
            <img src={arrowRight} alt="forward arrow" onClick={handleClick} />
        </div>
    );
};

export default ArrowRight;