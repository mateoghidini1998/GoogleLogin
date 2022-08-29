import React from 'react'
import './SearchBtn.css'

const SearchBtn = (props) => {
  return (
    <button className='searchBtn' onClick={props.searchInGoogle}>Search</button>
  )
}

export default SearchBtn