import React from 'react'
import './Description.css'

const Description = (props) => {
  return (
    <p className='description'>{props.description}</p>
  )
}

export default Description