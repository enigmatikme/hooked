import React, { useState, useEffect } from 'react';
import { Form } from '../styles/search.styles';

const Search = ({handleSubmit, search}) => {
  const [query, setQuery] = useState('');

  // const handleQueryChange = (e) => {
  //   console.log(e.target.value)
  //   setQuery(e.target.value)
  // }

  return (
    <Form className="form">
      <div className="form__group">
        <input type="text" className="form__input" value={query} onChange={(e) => setQuery(e.target.value)} id="title"/>
      </div>
      <div class="form__group">
        <button className="btn" onClick={(e) => handleSubmit(e, query)}>Search</button>
      </div>
    </Form>
  )
}

export default Search;