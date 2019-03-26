import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="instagram">
        <i className="fab fa-instagram" />
        <span> Instagram</span>
      </div>
      <form>
        <i className="fas fa-search" />
        <input type="search" placeholder="Search" height="100"/>
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
