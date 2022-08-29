import React from 'react'
import './SearchInput.css'

const SearchInput = (props) => {
  return (
    <input className='searchInput' onChange={props.handleInputChange}></input>
  )
}

export default SearchInput