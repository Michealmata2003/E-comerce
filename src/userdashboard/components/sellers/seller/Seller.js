import React from 'react';
import { sellerData } from './sellerData';

const Seller = () => {
  return (
    <div className='flex m-auto'>
      <div className='grid grid-cols-4 align-center py-6 gap-x-7 justify-center m-auto'>
      {
        sellerData.map((data, index) => (
          <div className='m-auto justify-center align-center w-full py-5' key={index}>
            <img src={data.img} alt={data.id} />
            <h4 className='text-xl w-full m-auto cursor-pointer text-center justify-center py-3 hover:text-logo font-semibold'>{data.title}</h4>
            <p className='w-full m-auto text-logo font-semibold text-center justify-center '>{data.pricing}</p>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Seller
