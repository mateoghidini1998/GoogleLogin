import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'

const HomeLink = () => {
  return (
    <Link className='link' to="/">Home</Link>
  )
}

export default HomeLink