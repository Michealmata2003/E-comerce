import React from 'react';
import { Container } from '../../Style';
import Slides from './Slides';

const Welcome = () => {
  return (
    <div className='flex m-auto justify-center align-center' style={Container}>
      <Slides />
    </div>
  )
}

export default Welcome