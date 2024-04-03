import React from 'react';
import { BlogData } from './BlogData';
import { Container } from '../../Style';
import { HeroButton } from '../buttons/Button';
import './News.css';

const Blog = () => {

  return (
    <div style={Container}>
      <div>
        <div className='latestnews grid grid-cols-3 py-8 gap-9 m-auto justify-center'>
          {
            BlogData.map((blogs, index) => (
              <div key={index} className='bg-design4 w-full'>
                <div className=''>
                  <img className='w-full' src={blogs.img} alt='' />
                </div>
                <div className='p-3'>
                  <h3 className='text-xl py-'>{blogs.title}</h3>
                  <div className='flex gap-4 py-4'>
                    <span className='text-black'>{blogs.author}</span>
                    <span className='text-black'>{blogs.date}</span>
                  </div>
                  <p className='text-base py-2'>{blogs.articlce}</p>
                  <HeroButton> Read More</HeroButton>
                </div>
                
              </div>
            ))

          }
        </div>
      </div>
    </div>
  )
}

export default Blog