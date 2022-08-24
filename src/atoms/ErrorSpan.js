import React from 'react'
import './ErrorSpan.css'

const ErrorSpan = (props) => {

    const {errorMessage} = props;

  return (
    <span>{errorMessage}</span>
  )
}

export default ErrorSpan