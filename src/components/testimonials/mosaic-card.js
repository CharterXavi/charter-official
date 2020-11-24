import React from "react";
import heartIcon from '../../images/iconography/hospice/heart.png';
import './mosaic-card.css';

const MosaicCard = (props) => {

  return (
    <div className='MosaicCard'>
        <img src={heartIcon} alt="Heart" />
        <p className='detail-text'>{`"${props.quote}"`}</p>
        <p className='detail-text'>- {props.author}</p>
    </div>
  )
}

export default MosaicCard;