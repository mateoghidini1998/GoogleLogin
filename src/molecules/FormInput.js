import React, { useState } from 'react'
import './FormInput.css';
import { Input } from '../atoms/Input';
import ErrorSpan from '../atoms/ErrorSpan';

const FormInput = (props) => {

  const { id, onChange, errorMessage, ...inputProps } = props;
  

  


  return (
    <div className='formInput'>
        {/* <label htmlFor="">Username</label> */}
         <Input {...inputProps} onChange={onChange} /> 
        <ErrorSpan errorMessage={props.errorMessage}/>
        
    </div>
  )
}

export default FormInput