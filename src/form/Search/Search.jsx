import React from 'react'
import "./Search.scss";

const Search = (props) => {
  const {search, setSearch} = props;
  return (
    <form className={search ? "search-form open-search-form" : "search-form"}>
      <input 
        placeholder='search here...'
        type="search" 
        className="search-box"
      />
      <label htmlFor="search-box" className="fas fa-search"/>
      <i 
        className="fas fa-times search-close"
        onClick={() => setSearch(!search)}
      ></i>
    </form>
  )
}

export default Search