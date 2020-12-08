import React from 'react';
import PinIcon from '../icons/pin';
import './marker.css';

const Marker = (props) => {
    return (
        <div className="Marker" title={props.name}>
            {
                (props.isHovered === props.name) ?
                <p className='active-hover'>{props.name}</p>
                :
                <p>{props.name}</p>
            }
            <a href={props.link} target='_blank' rel='noreferrer noopener'>
                <PinIcon />
            </a>
        </div>
    );
  };

  export default Marker;