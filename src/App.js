import React, { Component } from 'react'

import data from './dummy-data'
import SearchBar from './components/SearchBar'
import PostsContainer from './components/PostsContainer/PostsContainer'

import './App.css'

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.setState({
      data
    })
  }

  incrementLikes = index => {
    const newData = [...this.state.data]
    newData.splice(index, 1, {
      ...newData[index],
      likes: newData[index].likes + 1
    })
    this.setState({
      data: [...newData]
    })
  }

  render() {
    return (
      <>
        <SearchBar />
        {this.state.data.map((item, index) => (
          <PostsContainer
            post={item}
            incrementLikes={() => this.incrementLikes(index)}
            key={index}
          />
        ))}
      </>
    )
  }
}

export default App
