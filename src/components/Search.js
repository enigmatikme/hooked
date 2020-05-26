import React, { useState, useEffect } from 'react'

const Search = ({handleSubmit, search}) => {
  const [query, setQuery] = useState('');

  // const handleQueryChange = (e) => {
  //   console.log(e.target.value)
  //   setQuery(e.target.value)
  // }

  return (
    <form class="form">
      <div class="form__group">
        <label className="form__label" for="title">Title:</label>
        <input type="text" className="form__input" value={query} onChange={(e) => setQuery(e.target.value)} id="title"/>
      </div>
      {/* <div class="form__group">
        <label className="form__label" for="year">Year:</label>
        <input type="text" className="form__input" value={query} onChange={(e) => setQuery(e.target.value)} id="year"/>
      </div> */}

      <div class="form__group">
        <button className="btn" onClick={(e) => handleSubmit(e, query)}>Search</button>
      </div>
    </form>


    
  )
}

export default Search;