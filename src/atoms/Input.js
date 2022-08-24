import React, {useState} from 'react'
import './Input.css'

export const Input = (props) => {

    const { id, onChange, ...inputProps } = props;
    const [focused, setFocused] = useState(false)

    const handleFocused = (e) =>{
        setFocused(true)
      }

  return (
    <input {...inputProps} onChange={onChange} onBlur={handleFocused} focused={focused.toString()}/>
  )
}
