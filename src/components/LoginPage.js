import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 800px;
  width: 400px;
  margin: auto;
`

const Paragraph = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const Input = styled.input`
  width: 380px;
  height: 50px;
  margin: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 18px;
  outline: none;
`

const Button = styled.button`
  margin: 10px;
  height: 50px;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  color: white;
  background-color: mediumseagreen;
  cursor: pointer;
`

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
      <Div>
        <Paragraph>Welcome to InstaClone!</Paragraph>
        <Form>
          <Input onChange={this.onChange} type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button onClick={this.onClick}>Login</Button>
        </Form>
      </Div>
    )
  }
}

export default LoginPage
