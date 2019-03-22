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
        <h1>React Wars</h1>
        <div className="cards">
          {this.state.starwarsChars.map((char, index) => (
            <table key={index}>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Eye color</td>
                  <td>Hair color</td>
                  <td>Skin color</td>
                  <td>Height</td>
                  <td>Mass</td>
                  <td>Gender</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>{char.name}</td>
                  <td>{char.eye_color}</td>
                  <td>{char.hair_color}</td>
                  <td>{char.skin_color}</td>
                  <td>{char.height}</td>
                  <td>{char.mass}</td>
                  <td>{char.gender}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    )
  }
}

export default App
