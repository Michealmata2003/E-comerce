import React from 'react';
import { AssuredData } from './AssureData';
import { Container } from '../../../Style';

const Assurance = () => {

  return (
    <div>
      <div style={Container}>
        {
          AssuredData.map((data, index) => (
            <div className='' key={index}>
              <img className=' h-full' src={data.img} alt='' />
              <h5>{data.title}</h5>
              <p>{data.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Assurance
