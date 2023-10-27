import React from 'react';
import { ratingData } from './ratingData';

const Rating = () => {
  return (
    <div className='grid grid-cols-4 align-center py-6 gap-x-7 justify-center m-auto'>
      {
        ratingData.map((data, index) => (
          <div className='' key={index}>
            <img src={data.img} alt={data.id} />
            <h4 className='text-xl w-full m-auto cursor-pointer text-center justify-center py-3 hover:text-logo font-semibold'>{data.title}</h4>
            <p className='w-full m-auto text-logo font-semibold text-center justify-center '>{data.pricing}</p>fh
          </div>
        ))
      }
    </div>
  )
}

export default Rating
