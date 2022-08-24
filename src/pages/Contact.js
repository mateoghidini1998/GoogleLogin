import React from 'react'
import ContactForm from '../organisms/ContactForm'
import Sidebar from '../organisms/Sidebar'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container'>
      <div className="sidebarContainer">
        <Sidebar/>
      </div>
      <div className='formContainer'>         
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact