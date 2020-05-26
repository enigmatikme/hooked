import React, { useReducer, useState, useEffect } from 'react';
import Header from './Header';
import Movies from './Movies';
import Search from './Search';
import { GlobalStyle, HeaderContainer } from '../styles/app.styles';

import axios from 'axios';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const apiSerializer = (query) => {
  let api;
  if (query.trim() === "") {
    //will return all results 
    api = MOVIE_API_URL;
  } else {
    //will search by title
    api = `https://www.omdbapi.com/?t=${query}&apikey=4a3b711b`;
  }
  return api;
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get(`${MOVIE_API_URL}`)
    .then(success => {
      setMovies(success.data.Search);
      setLoading(false);
    })
    .catch(error => {
      console.error("ERROR", error)
    })
  }, []);

  const search = (e, q) => {
    e.preventDefault();
    let api = apiSerializer(q);
    console.log(`${api}`)
    axios.get(api)
      .then(success => {
        console.log("success", success)
        setMovies(success.data)
      })
      .catch(error => {
        console.log("error", error)
      })
  } 

  const handleSubmit = (e, query) => {
    search(e, query);
  }

  return (
    <div>
    <GlobalStyle/>
      <Header text="hooked" className="header" />
      <Search search={search} handleSubmit={handleSubmit}/>
      { 
        !loading ? <Movies className="movies" movies={movies} /> : <div>...Loading </div>
      }
    </div>
  )
}

export default App;