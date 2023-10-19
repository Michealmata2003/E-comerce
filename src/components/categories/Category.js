import React from 'react';



const Category = ({ img, text }) => {
  return (
    <div className='justify-center'>
      <img  src={img} alt='' />
      <p className='text-design5 py-2 '>{text}</p>
    </div>
  )
}

export default Category