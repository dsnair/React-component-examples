import React, { Component } from 'react'

import data from './dummy-data'
import SearchBar from './components/SearchBar'
import PostsContainer from './components/PostsContainer/PostsContainer'
import './App.css'

class App extends Component {
  state = {
    data: [],
    query: '',
    newCommentText: ''
  }

  componentDidMount() {
    this.setState({
      data
    })
  }

  onChangeNewComment = e => {
    this.setState({
      newCommentText: e.target.value
    })
  }

  onSubmitNewComment = (e, id) => {
    e.preventDefault()
    const newData = [...this.state.data]
    newData.splice(id, 1, {
      ...newData[id],
      comments: [
        ...newData[id].comments,
        {
          username: 'divya',
          text: this.state.newCommentText
        }
      ]
    })
    this.setState({ data: [...newData], newCommentText: '' })
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
    this.setState({
      query
    })
  }

  render() {
    const queriedData = this.state.data.filter(post =>
      post.username.includes(this.state.query)
    )

    return (
      <>
        <SearchBar searchPost={this.searchPost} />
        {queriedData.map(item => (
          <PostsContainer
            post={item}
            incrementLikes={() => this.incrementLikes(item.id)}
            onChangeNewComment={this.onChangeNewComment}
            onSubmitNewComment={e => this.onSubmitNewComment(e, item.id)}
            newCommentText={this.state.newCommentText}
            key={item.id}
          />
        ))}
      </>
    )
  }
}

export default App
