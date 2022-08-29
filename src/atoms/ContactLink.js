import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'

const ContactLink = () => {
  return (
    <Link className='link' to="/contact">Contact</Link>
  )
}

export default ContactLink