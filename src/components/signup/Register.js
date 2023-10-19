import React, { useState, useEffect, useRef } from 'react'
import { CustomFormInput } from '../input/CustomInput'
import Text from './Text'
import { Container } from '../../Style'
import { NavLink } from 'react-router-dom'
import { CustomInputButton } from '../buttons/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
  // const userRef = useRef();
  // const errRef = useRef();
  const navigate = useNavigate()

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if (localStorage.getItem('commerce')) {
      navigate('/dashboard')
    }
  }, [])
  const handleSubmit = async (e) => {
    console.log(values);
    e.preventDefault();
    const { firstName, lastName, email, password } = values
    const res = await axios.post('https://prakem-api.onrender.com/api/auth/register', {
      firstName,
      lastName,
      email,
      password
    });
    if (res.status === true) {
      localStorage.setItem('commerce', JSON.stringify(res.data))
    }
    console.log(res);
    navigate('/login')
  }
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <div className='py-7'>
      <div style={Container}>
        <Text />
        <form onSubmit={handleSubmit} className='w-2/5 m-auto p-6 shadow-2xl '>

          <CustomFormInput
            name={'firstName'}
            label={'First Name*'}
            onChange={(e) => handleChange(e)}

          />
          <CustomFormInput
            name={'lastName'}
            label={'Last Name*'}
            onChange={(e) => handleChange(e)}
          />
          <CustomFormInput
            name={'email'}
            label={'Email*'}
            onChange={(e) => handleChange(e)}
          />
          <CustomFormInput
            name={'password'}
            label={'Password*'}
            type={'passeord'}
            onChange={(e) => handleChange(e)}
          />
          <div className='flex py-2 font-semibold text-base'>
            <input type='checkbox' />
            <p>I've read and accept the Privacy Policy</p>
          </div>
          <span>By signing up, you agree to our <NavLink className='hover:text-logo font-semibold text-base' to='/'>Terms of Service</NavLink>. Learn how we collect and use your data in our <NavLink className='hover:text-logo font-semibold text-base' to='/'>Privacy Policy</NavLink>.
          </span>
          <CustomInputButton type='submit' className=''>SIGNUP</CustomInputButton>

          <NavLink to='/login' className=' w-full text-center justify-center flex m-auto text-base py-3 text-black bg-design4 hover:bg-black hover:text-white' >ALREADY HAVE AN ACCOUNT?</NavLink>
        </form>
      </div>
    </div>
  )
}

export default Register