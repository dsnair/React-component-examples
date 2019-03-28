import React, { Component } from 'react'
import styled from 'styled-components'
import { Instagram } from 'styled-icons/boxicons-logos'
import { Search } from 'styled-icons/boxicons-regular'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
`
const Logo = styled.div`
  font-size: 24px;
`

const Form = styled.form`
  display: flex;
  align-content: center;
  width: 300px;
  height: 30px;
`

const SearchIcon = styled(Search)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: lightslategray;
  color: white;
`

const Input = styled.input`
  width: 270px;
  padding: 0 5px;
  border: 1px solid lightslategray;
  outline: none;
  font-size: 14px;
`
const Button = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid palevioletred;
  color: palevioletred;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  &:hover {
    background-color: rgb(219, 112, 147, 0.1);
    cursor: pointer;
  }
`

class SearchBar extends Component {
  onClick = () => {
    localStorage.clear()
    window.location.reload()
  }

  render() {
    return (
      <Container>
        <Logo>
          <Instagram size="48" />
          <span> InstaClone</span>
        </Logo>

        <Form>
          <SearchIcon />
          <Input
            onChange={this.props.searchPost}
            type="search"
            placeholder="Search by username"
          />
        </Form>

        <Button onClick={this.onClick}>Logout</Button>
      </Container>
    )
  }
}
export default SearchBar
