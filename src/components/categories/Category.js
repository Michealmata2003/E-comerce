import React, { useState, useEffect } from 'react';
import { testimonials } from './CategoryData';
import './Categories.css';


const Category = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0)


  const goToSlide = (slideNumber) => {
    setCurrentTestimony(slideNumber - 1);
  };
  return (
    <div className='category'>
      <div className='category-slides'>
        {testimonials.map((testimony, index) => (
          <div className={index === currentTestimony ? 'categorySlide active' : 'categorySlide'} key={index}>
            <div className='image'>
              <img src={testimony.img} alt='img' />
            </div>
            <div className='bg-design4 p-6'>
              <h1 className='text-design1 p-6 text-3xl font-semibold justify-start '>{testimony.title}</h1>
              <p className='bg-design4 p-6'>{testimony.description}</p>
              <div className="controls">
                <button onClick={() => goToSlide(1)}>1</button>
                <button onClick={() => goToSlide(2)}>2</button>
                <button onClick={() => goToSlide(3)}>3</button>
                <button onClick={() => goToSlide(4)}>4</button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Category

// import React from 'react';



// const Category = ({ img, text }) => {
//   return (
//     <div className='justify-center'>
//       <img  src={img} alt='' />
//       <p className='text-design5 py-2 '>{text}</p>
//     </div>
//   )
// }

// export default Category