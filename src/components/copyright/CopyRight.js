import React from 'react';
import { Container } from '../../Style';
import payment from '../../assets/payment.png';
import './CopyRight.css';

const CopyRight = () => {
  return (
    <div className='bg-black'>
      <div style={Container}>
        <div className='copyright flex justify-between py-4'>
          <p className='text-white'>© 2021, Furns. Made With  by HasThemes.</p>
          <img src={payment} alt='' />
        </div>
        
      </div>
    </div>
  )
}

export default CopyRight