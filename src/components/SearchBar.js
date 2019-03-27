import React from 'react'
import './SearchBar.css'

const SearchBar = props => {
  return (
    <div className="searchbar">
      <div className="instagram">
        <i className="fab fa-instagram" />
        <span> Instagram</span>
      </div>
      <form className="searchForm">
        <i className="fas fa-search" />
        <input
          onChange={props.searchPost}
          type="search"
          className="searchInput"
          placeholder="Search by username"
        />
      </form>
      <div>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  )
}
export default SearchBar
