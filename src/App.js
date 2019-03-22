import React, { Component } from 'react'
import './App.css'

const URL = 'https://swapi.co/api/people/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      starwarsChars: [],
      next: '',
      previous: ''
    }
  }

  componentDidMount() {
    this.getCharacters(URL)
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        
        this.setState({
          starwarsChars: data.results,
          next: data.next === null ? URL : data.next,
          previous: data.previous === null ? URL : data.previous
        })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    return (
      <div className="app">
        <h1>React Wars</h1>
        
        <section className="cards">
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
        </section>

        <footer>
          <i
            className="fas fa-chevron-circle-left"
            onClick={() => this.getCharacters(this.state.previous)}
          />
          <i
            className="fas fa-chevron-circle-right"
            onClick={() => this.getCharacters(this.state.next)}
          />
        </footer>
      </div>
    )
  }
}

export default App
