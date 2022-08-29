import React, {useState, useEffect} from 'react'
import axios from 'axios';

const BASE_URL = `https://customsearch.googleapis.com/customsearch/v1`
const API_KEY = process.env.SEARCH_KEY;
const SEARCH_ENGINE_KEY = process.env.SEARCH_ENGINE_KEY;
  
const useSearch = (searchTerm) =>{
    const [data, setData] = useState(null);
    
    useEffect(()=>{
      const fetchData = async() =>{
        const response = axios.get(
          `${BASE_URL}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}&q=${searchTerm}`
          );
          setData(response?.data);
      }

    }, [searchTerm]);
    return {
      data,
    };
  }

export default useSearch