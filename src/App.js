import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      starwarsChars: []
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/')
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ starwarsChars: data.results })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    return (
      <div className="app">
        <h1 className="header">React Wars</h1>
        {this.state.starwarsChars.map((char, index) => (
          <section key={index}>{char.name}</section>
        ))}
      </div>
    )
  }
}

export default App
