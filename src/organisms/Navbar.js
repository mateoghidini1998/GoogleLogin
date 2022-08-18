import React from 'react'
import Contact from '../atoms/Contact'
import Home from '../atoms/Home'
import Search from '../atoms/Search'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="links">
            <Home />
            <Search />
            <Contact />
        </div>
    </div>
  )
}

export default Navbar