import React from 'react'
import SearchBtn from '../atoms/SearchBtn'
import SearchInput from '../atoms/SearchInput'
import './Searchbar.css'

const Searchbar = (props) => {

  return (
    <div className='searchContainer'>
        <SearchInput 
        handleInputChange={props.handleInputChange}
        />
        
        <SearchBtn 
        searchInGoogle={props.searchInGoogle} 
        />
    </div>
  )
}

export default Searchbar