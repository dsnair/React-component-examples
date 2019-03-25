import React, { Component } from 'react'

import data from './dummy-data'
import SearchBar from './components/SearchBar'
import PostsContainer from './components/PostsContainer/PostsContainer'

import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <SearchBar />
        {data.map((item, index) => (
          <PostsContainer post={item} key={index} />
        ))}
      </>
    )
  }
}

export default App
