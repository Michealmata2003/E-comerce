import React from 'react';
import './CustomClick.css';

export const CustomClick = ({children}) => {
  return (
<button className='text-[15px] sm:text-lg  m-auto lg:text-xl py-2 px-10 border-2  font-medium  text-white'><span></span>{children}</button>

  )
}

