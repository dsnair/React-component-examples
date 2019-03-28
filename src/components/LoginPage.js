import React, { Component } from 'react'
import './LoginPage.css'

class LoginPage extends Component {
  state = {
    username: ''
  }

  onChange = e => {
    this.setState({ username: e.target.value })
  }

  onClick = () => {
    localStorage.setItem('username', this.state.username)
  }

  render() {
    return (
      <div className="loginFormContainer">
        <p>Welcome to InstaClone!</p>
        <form className="loginForm">
          <input onChange={this.onChange} type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={this.onClick} className="loginBtn">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginPage
