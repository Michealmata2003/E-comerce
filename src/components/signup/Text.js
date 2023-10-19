import React from 'react'
import { NavLink } from 'react-router-dom'

const Text = () => {
  return (
    <div className='py-7'>
        <h3 className='w-full text-center text-4xl py-3'>CREATE ACCOUNT</h3>
        <p className='text-center py-2'><NavLink className='hover:text-logo' to='/'>HOME</NavLink>/SIGNUP</p>
    </div>
  )
}

export default Text