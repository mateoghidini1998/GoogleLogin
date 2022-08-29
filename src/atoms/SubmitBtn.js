import React from 'react'
import './SubmitBtn.css'

const SubmitBtn = ({ handleSubmit }) => {
  return (
    <button className='btn' onSubmit={handleSubmit} >Submit</button>
  )
}

export default SubmitBtn