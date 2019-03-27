import React, { Component } from 'react'

import data from './dummy-data'
import SearchBar from './components/SearchBar'
import PostsContainer from './components/PostsContainer/PostsContainer'
import './App.css'

class App extends Component {
  state = {
    data: [],
    queriedData: [],
    query: ''
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

  searchPost = e => {
    const query = e.target.value
    const queriedData = this.state.data.filter(post =>
      post.username.includes(this.state.query)
    )
    this.setState({
      query,
      queriedData
    })
  }

  render() {
    return (
      <>
        <SearchBar searchPost={this.searchPost} />
        {this.state.query
          ? this.state.queriedData.map((item, index) => (
              <PostsContainer
                post={item}
                incrementLikes={() => this.incrementLikes(index)}
                key={index}
              />
            ))
          : this.state.data.map((item, index) => (
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
