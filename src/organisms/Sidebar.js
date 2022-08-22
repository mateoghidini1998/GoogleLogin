import React from 'react'
import ContactLink from '../atoms/ContactLink'
import HomeLink from '../atoms/HomeLink'
import SearchLink from '../atoms/SearchLink'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="links">
            <HomeLink />
            <SearchLink />
            <ContactLink />
        </div>
    </div>
  )
}

export default Sidebar