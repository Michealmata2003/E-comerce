import React, { useState, useEffect } from 'react';
import { slides } from './Slide';
import './Hero.css';
import { ImageStyle } from '../../Style';


const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideLength = slides.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  // // manual scroll
  // useEffect(() => {
  //   setCurrentSlide(0)
  // }, [])

  // useEffect for autoScroll

  useEffect(() => {
    if (autoScroll === true) {
      auto();
      return () => clearInterval(slideInterval);
    }
  }, [currentSlide])

  return (

    <div className='h-full'>
      {
        slides.map((slide, index) => (
          <div key={slide.id} className={index === currentSlide ? "slidex current" : "slidex"}>
            {index === currentSlide && (
              <div className='block w-full py-3.5 h-full m-auto justify-center align-center sm:flex'>
                {slide.text}
                <div className='w-full align-center justify-center flex md:w-1/2'>
                  <img className='heroimage' src={slide.img} alt='image' />
                </div>
              </div>
            )

            }
          </div>
        ))
      }

    </div>

  )
}

export default Slides