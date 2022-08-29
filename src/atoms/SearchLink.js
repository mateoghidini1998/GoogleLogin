import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'

const Search = () => {
  return (
    <Link className='link' to="/search">Search</Link>
  )
}

export default Search