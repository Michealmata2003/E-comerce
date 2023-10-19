import React from 'react'
import { NavLink } from 'react-router-dom'

const Text = () => {
  return (
    <div className='py-9 bg-design4'>
        <h3 className='w-full text-center text-4xl py-3'>LOGIN</h3>
        <p className='text-center py-2'><NavLink className='hover:text-logo' to='/'>HOME</NavLink>/SIGNIN</p>
    </div>
  )
}

export default Text