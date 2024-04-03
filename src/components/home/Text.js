import React from 'react';
import { HeroButton } from '../buttons/Button';

export const FirstHeroText = () => {
  return (

    <div className='w-full md:w-1/2'>
      <h5 className='text-2xl  font-semibold py-3'>New Products </h5>
      <h1 className='text-7xl font-semibold'>Flexible Chair</h1>
      <p className='text-xl   py-6'>Torem Ipsum dolor sit amet, consectetur adipisicing elised do eiusmo tempor incididunt ut labore et dolore magna</p>
      <HeroButton>Shop Now</HeroButton>
    </div>
  )
}

export const SecondHeroText = () => {
  return (
    <div className='w-full md:w-1/2'>
      <h5 className='text-2xl  font-semibold py-3'>Best Seller</h5>
      <h1 className='text-7xl font-semibold'>Creative Solfa</h1>
      <p className='text-xl   py-6'>Torem Ipsum dolor sit amet, consectetur adipisicing elised do eiusmo tempor incididunt ut labore et dolore magna</p>
      <HeroButton>Shop Now</HeroButton>
    </div >
  )
}

