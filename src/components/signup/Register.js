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
  // const errRef = useRef();z
  const navigate = useNavigate()

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    privacyPolicy: ''

  });

  useEffect(() => {
    if (localStorage.getItem('commerce')) {
      navigate('/signup')
    }
  }, [])

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Basic validation checks
    if (!values.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    if (!values.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
    if (!values.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(values.password)) {
      newErrors.password = 'Password must be 8-24 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%)';
      valid = false;
    }
    if (!values.privacyPolicy) {
      newErrors.privacyPolicy = 'Please accept the Privacy Policy';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };




  const handleSubmit = async (e) => {
    console.log(values);
    e.preventDefault();
    if (!validateForm()) {
      return; // Form is not valid, do not proceed
    }
    const { firstName, lastName, email, password } = values
    const res = await axios.post('https://prakem-api.onrender.com/api/auth/register', {
      firstName,
      lastName,
      email,
      password
    });
    if (res.status === true) {
      localStorage.setItem('commerce', JSON.stringify(res.data))
      navigate('/login')
    }
    console.log(res);
    
  }
  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setValues({ ...values, [e.target.name]: e.target.checked });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    setErrors({ ...errors, [e.target.name]: '' }); // Clear any previous error for this field
  };

  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  //   setErrors({ ...errors, [e.target.name]: '' }); 

  // }
  return (
    <div className='py-7'>
      <div style={Container}>
        <Text />
        <form onSubmit={handleSubmit} className='w-full m-auto p-6 shadow-2xl md:w-2/5'>
          <CustomFormInput
            name={'firstName'}
            label={'First Name*'}
            value={values.firstName}
            error={errors.firstName}
            onChange={handleChange}
          />
          <CustomFormInput
            name={'lastName'}
            label={'Last Name*'}
            value={values.lastName}
            error={errors.lastName}
            onChange={handleChange}
          />
          <CustomFormInput
            name={'email'}
            label={'Email*'}
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
          <CustomFormInput
            name={'password'}
            label={'Password*'}
            type={'password'}
            value={values.password}
            error={errors.password}
            onChange={handleChange}
          />
          <div className='flex py-2 font-semibold text-base'>
            <input
              type='checkbox'
              name='privacyPolicy'
              checked={values.privacyPolicy}
              onChange={handleChange}

            />
            <p>I've read and accept the Privacy Policy</p>
          </div>
          {errors.privacyPolicy && <p className='text-red-500'>{errors.privacyPolicy}</p>}

          <h6>
            By signing up, you agree to our <NavLink className='hover:text-logo font-semibold text-base' to='/'>Terms of Service</NavLink>. Learn how we collect and use your data in our <NavLink className='hover:text-logo font-semibold text-base' to='/'>Privacy Policy</NavLink>.
          </h6>
          <CustomInputButton type='submit' className=''>SIGNUP</CustomInputButton>
          <NavLink to='/login' className=' w-full text-center justify-center flex m-auto text-base py-3 text-black bg-design4 hover:bg-black hover:text-white' >ALREADY HAVE AN ACCOUNT?</NavLink>
        </form>
      </div>
    </div>
  )
}

export default Register