import React from 'react'
import PaginationBtn from '../atoms/PaginationBtn'
import './Pagination.css'


const Pagination = ({ nextPage, prevPage, showNext, actualPage }) => {
  return (
    <div className='paginationContainer'>
        {actualPage > 1 && (
          <button className='paginationBtn' onClick={prevPage}>Back</button>
          )
        }
        <span>Page {actualPage}</span>
        {showNext && (
          <button className='paginationBtn' onClick={nextPage}>Next</button>
        )}
    </div>
  )
}

export default Pagination