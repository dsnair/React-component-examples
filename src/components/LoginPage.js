import React, { Component } from 'react'

class LoginPage extends Component {
  state = {
    username: null
  }

  onChange = e => {
    this.setState({ username: e.target.value })
  }

  onClick = () => {
    localStorage.setItem('username', this.state.username)
  }

  render() {
    return (
      <form>
        <input onChange={this.onChange} type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={this.onClick}>Login</button>
      </form>
    )
  }
}

export default LoginPage
