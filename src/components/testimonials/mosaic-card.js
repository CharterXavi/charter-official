import React from "react";
import heartIcon from '../../images/iconography/heart-gradient.png';
import './mosaic-card.css';

const MosaicCard = (props) => {

  return (
    <div className='MosaicCard'>
        <img src={heartIcon} alt="Heart" />
        <p>{`"${props.quote}"`}</p>
        <p>- {props.author}</p>
    </div>
  )
}

export default MosaicCard;