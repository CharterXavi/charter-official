import './bereavement-strip.css';

import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import FlowerIcon from '../icons/flower';
import React from 'react';

const BereavementStrip = () => {

  return (
    <div className='Bereavement intro'>
            <FlowerIcon />
            <h5>Bereavement</h5>
            <p>At Charter, we stand by our patients and their loved ones wherever possible. An especially important way to do that is through bereavement support and services. When grief and loss occur, life can get a lot harder and we want to make sure we’re helping you navigate it all.</p>
            <ButtonPrimaryAlt content='Visit Bereavement Page' link='/services/bereavement' />
    </div>
  );
}

export default BereavementStrip;

