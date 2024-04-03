import React from 'react';
import { HeroButton } from '../buttons/Button';
import { Container } from '../../Style';
import Category from './Category';


const Categories = () => {
    return (
        <div style={Container}>
            <div className='block w-full py-3.5 h-full m-auto justify-between align-center md:flex'>
                <h1 className='text-4xl font-semibold justify-center m-auto text-center text-design2 align-center'>What We Do</h1>
                <div className='w-full align-center justify-center md:w-1/2'>
                    <p className=' w-full py-3 m-auto justify-between align-center md:w-3/4'>Consectetur adipisicing elit, do eiusmod tempor incididunt dolore magna aliqua. Ut enim adminim veniam nostrud exercitation Consectetur adipisicing elit, do eiusmod tempor incididunt dolore magna aliqua. Ut enim adminim veniam nostrud exercitation</p>
                    <HeroButton >Learn More</HeroButton>
                </div>
            </div>
            <Category />
        </div>
    )
}

export default Categories
