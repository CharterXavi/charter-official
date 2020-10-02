import React from 'react';
import './bereavement-strip.css';
import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import flowerIcon from '../../images/iconography/hospice/flower.png';

const BereavementStrip = () => {

  return (
    <div className='Bereavement intro'>
            <img src={flowerIcon} alt="Flower" />
            <h2>Bereavement</h2>
            <p>At Charter, we stand by our patients and their loved ones wherever possible. An especially important way to do that is through bereavement support and services. When grief and loss occur, life can get a lot harder and we want to make sure we’re helping you navigate it all.</p>
            <ButtonPrimaryAlt content='Visit Bereavement Page' link='/services/bereavement' />
    </div>
  );
}

export default BereavementStrip;

