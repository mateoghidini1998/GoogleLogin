import axios from 'axios'
import Searchbar from '../molecules/Searchbar'
import { useState, useRef } from 'react';
import Item from '../molecules/Item';
import './Search.css'
import Pagination from '../molecules/Pagination';

const Search = () => {    
  
  const [searchText, setSearchText] = useState('');
  const [resultData, setResultData] = useState({});
  const [loading, setIsLoading] = useState(false);
  const pageNumber = useRef(1)
  const [showNext, setShowNext] = useState(false)
 
  
  
 const searchInGoogle= async() => {
    const currentPage = pageNumber.current
    const inPage = startPage(currentPage)
    const BASE_URL = `https://customsearch.googleapis.com/customsearch/v1`
    const API_KEY = process.env.REACT_APP_SEARCH_KEY;
    const SEARCH_ENGINE_KEY = process.env.REACT_APP_SEARCH_ENGINE_KEY;    
    var apiCall = `${BASE_URL}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}&q=${searchText}&start=${inPage}`

    try{
      const response = await axios.get(apiCall);
      if(response){
        setIsLoading(true)
        console.log(response.data)
        setResultData(response.data)
        setShowNext(response.data.queries.nextPage)
        setIsLoading(false)
      }   
    } catch(error) {
      console.log(error);
      setIsLoading(false)
    }
    
  }

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
    
  }

  const startPage = (currentPage) => {
    if (currentPage === 1) return 1 
    else return ((currentPage - 1 ) * 10 + 1);
  }

  const nextPage = async() => {
    pageNumber.current++
    if(pageNumber.current === 11){
      setShowNext(false)
    }
    await searchInGoogle(searchText)
  }

  const prevPage = async() => {
    pageNumber.current--
    await searchInGoogle(searchText)
  }
  
  console.log(pageNumber.current)
  
  const items = resultData.items?.map((item)=>{
    return <Item key={item.id} title={item.title} description={item.snippet} url={item.formattedUrl}/>      
      
    }) ?? [] // return an empty array in case the result is undefined
  
  const searchInfo = resultData.searchInformation ? <p>About {resultData.searchInformation.formattedTotalResults} results ({resultData.searchInformation.formattedSearchTime} seconds)</p> : <p></p>
  console.log(searchText);

    
    

    return (
    <div className='searchPage'>
      
      <Searchbar 
      handleInputChange={handleInputChange} 
      searchInGoogle={searchInGoogle} 
      /> 
      <div>
        { (resultData.searchInformation && Object.keys(resultData.searchInformation)) !== 0 ? <>
            {searchInfo}
        </> : <p></p>  
        }
        {
        (resultData.items && Object.keys(resultData.items)) !== 0 ? <>
        {items}
        <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        showNext={showNext}
        actualPage={pageNumber.current}
        />
        </> : <><p>No results</p></>
        }
      </div>
      
    </div>
  )
}

export default Search