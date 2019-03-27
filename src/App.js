import React, { Component } from 'react'

import data from './dummy-data'
import SearchBar from './components/SearchBar'
import PostsContainer from './components/PostsContainer/PostsContainer'
import './App.css'

class App extends Component {
  state = {
    data: [],
    queriedData: [],
    query: '',
    newComment: {
      username: 'divya',
      text: ''
    }
  }

  componentDidMount() {
    this.setState({
      data
    })
  }

  onChangeNewComment = e => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        text: e.target.value
      }
    })
  }

  onSubmitNewComment = (e, id) => {
    e.preventDefault()
    let newState = this.state
    newState.data[id].comments.push(newState.newComment)
    this.setState(newState)
  }

  incrementLikes = id => {
    const newData = [...this.state.data]
    newData.splice(id, 1, {
      ...newData[id],
      likes: newData[id].likes + 1
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
          ? this.state.queriedData.map(item => (
              <PostsContainer
                post={item}
                incrementLikes={() => this.incrementLikes(item.id)}
                key={item.id}
              />
            ))
          : this.state.data.map(item => (
              <PostsContainer
                post={item}
                incrementLikes={() => this.incrementLikes(item.id)}
                text={this.state.newComment.text}
                onChangeNewComment={e => this.onChangeNewComment(e)}
                onSubmitNewComment={e => this.onSubmitNewComment(e, item.id)}
                key={item.id}
              />
            ))}
      </>
    )
  }
}

export default App
