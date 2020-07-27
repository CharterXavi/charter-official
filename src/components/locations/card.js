import React from 'react'
import './card.css'
import Expander from './expander'
import Clicker from './clicker'


const Card = (props) => {

    const handleClick = () => {
        //calls method passed as prop to update state and rerender
        props.expandCard(props.id);
    }

    return (
        <div className='Card'>
            <div className='card-title'>
                <h5>{props.name}</h5>
                <Clicker onClick={handleClick} />
            </div>
            <Expander 
                isExpanded={props.isExpanded}
                address={props.address}
                phone={props.phone}
                fax={props.fax} 
            />
        </div>
    );
};

export default Card