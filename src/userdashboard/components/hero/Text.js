import React from 'react';
import { CustomClick } from '../buttons/CustomClick';

export const ProfileText = () => {
  return (

    <div className='flex w-full m-auto align-center justify-center'>
      <div className='w-full md:w-2/3 '>
        <h5 className='text-2xl text-profile  font-semibold py-3 text-center'>Style Destination </h5>
        <h1 className='text-7xl text-profile font-semibold text-center'>Basic Collection</h1>
        <p className=' m-auto text-profile text-xl w-1/2 py-6 text-center'>Torem Ipsum dolor sit amet, consectetur adipisicing elised do eiusmo tempor </p>
        <div className='text-center m-auto w-full'><CustomClick >Shop Now</CustomClick></div>
      </div>
    </div>
  )
}