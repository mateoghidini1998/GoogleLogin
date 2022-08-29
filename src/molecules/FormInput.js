import React from 'react'
import './FormInput.css';
import { Input } from '../atoms/Input';
import ErrorSpan from '../atoms/ErrorSpan';

const FormInput = (props) => {

  const { id, onChange, errorMessage, ...inputProps } = props;

  return (
    <div className='formInput'>        
         <Input 
         {...inputProps} 
         onChange={onChange} 
         /> 

        <ErrorSpan 
        errorMessage={props.errorMessage}
        />        
    </div>
  )
}

export default FormInput