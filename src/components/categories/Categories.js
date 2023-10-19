import React from 'react';
import './Categories.css';
import { NavLink } from 'react-router-dom';
import bedroom from '../../assets/bedroom.png';
import dining from '../../assets/dining.png';
import living from '../../assets/living.png';
import office from '../../assets/office.png';
import lounge from '../../assets/lounge.png';
import { Container } from '../../Style';
import Category from './Category';



const Categories = () => {
    return (
        <div style={Container}>
            <div className=' w-full m-auto align-center justify-center py-9'>
                <div className='grid  grid-cols-5 py-9 '>
                    <NavLink className='categories' to='/'>
                        <Category img={bedroom} text={'Bedroom'} />
                    </NavLink>
                    <NavLink className='categories' to='/'>
                        <Category img={living} text={'Living'} />
                    </NavLink>
                    <NavLink className='categories' to='/'>
                        <Category img={dining} text={'Dining'} />
                    </NavLink>
                    <NavLink className='categories' to='/'>
                        <Category img={bedroom} text={'Lounge'} />
                    </NavLink>
                    <NavLink className='categories' to='/'>
                        <Category img={office} text={'Office Chair'} />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Categories