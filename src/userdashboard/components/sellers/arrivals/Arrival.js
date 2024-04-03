import React from 'react';
import { arrivalData } from './arrivalData';

const Arrival = () => {


  return (
    <div className='grid grid-cols-2 align-center py-6 gap-x-7 justify-center m-auto md:grid-cols-4'>
      {
        arrivalData.map((data, index) => (
          <div className='' key={index}>
            <img src={data.img} alt={data.id} />
            <h4 className='text-xl w-full m-auto cursor-pointer text-center justify-center py-3 hover:text-logo font-semibold'>{data.title}</h4>
            <p className='w-full m-auto text-logo font-semibold text-center justify-center '>{data.pricing}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Arrival
