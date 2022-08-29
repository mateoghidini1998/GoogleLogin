import React from 'react'
import ContactForm from '../organisms/ContactForm'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container'>
      <div className='formContainer'>         
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact