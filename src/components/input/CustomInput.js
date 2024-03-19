import React, { forwardRef } from 'react';
import { InputWrap, labelStyling } from './InputStyle';
import './Input.css';



export const CustomInput = ({ label, name, placeholder, }) => {
  return (
    <InputWrap>
      <label style={labelStyling} >{label}</label>
      <input placeholder={placeholder} name={name} />

    </InputWrap>
  )
}


export const CustomFormInput = ({ type, label, name, placeholder, onChange, values, error }) => {
  return (
    <InputWrap>
      <label style={labelStyling} >{label}</label>
      <input className='realinput' type={type} placeholder={placeholder} name={name} onChange={onChange} value={values} />
      <span>{error}</span>
    </InputWrap>
  )
}

