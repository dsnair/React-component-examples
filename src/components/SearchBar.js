import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  onClick = () => {
    localStorage.removeItem('username')
    window.location.reload();
  }

  render() {
    return (
      <div className="searchbar">
        <div className="instaclone">
          <i className="fab fa-instagram" />
          <span> InstaClone</span>
        </div>

        <form className="searchForm">
          <i className="fas fa-search" />
          <input
            onChange={this.props.searchPost}
            type="search"
            className="searchInput"
            placeholder="Search by username"
          />
        </form>

        <button onClick={this.onClick} className="logoutBtn">
          Logout
        </button>
      </div>
    )
  }
}
export default SearchBar
