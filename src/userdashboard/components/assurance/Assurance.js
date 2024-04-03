import React from 'react';
import { AssuredData } from './AssureData';
import { Container } from '../../../Style';
import safe from '../../../assets/safe.png';


const Assurance = () => {

  return (

    <div className='py-8 m-auto align-center just-center text-center w-full bg-design3'>
      <div style={Container}>
        <div className='grid grid-cols-1 align-center gap-7 justify-center m-auto sm:grid-cols-3'>
          {
            AssuredData.map((data, index) => (
              <div className='m-auto align-center just-center text-center w-full bg-white py-9 ' key={index}>
                <img className='h-full  m-auto ' src={data.img} alt={data.id} />
                <h5 className='py-4 font-bold'>{data.title}</h5>
                <p className=''>{data.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Assurance
