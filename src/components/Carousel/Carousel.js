import React, { Component } from 'react'
import { carouselData } from '../../data'

// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carousel: [],
      index: 0
    }
  }
  componentDidMount() {
    this.setState({
      carousel: carouselData
    })
  }

  leftClick = index => {
    this.setState({
      index:
        index > -carouselData.length && index < 0
          ? Math.abs(index - 1)
          : index === 0
          ? carouselData.length - 1
          : index - 1
    })
  }

  rightClick = index => {
    this.setState({ index: index === carouselData.length - 1 ? 0 : index + 1 })
  }

  selectedImage = () => {
    console.log('index', this.state.index)
    return (
      <img
        src={this.state.carousel[this.state.index]}
        style={{ display: 'block' }}
        alt="random photos"
      />
    )
  }

  render() {
    return (
      <div className="carousel">
        <div
          className="left-button"
          onClick={() => this.leftClick(this.state.index)}
        >
          {'<'}
        </div>
        {this.selectedImage(this.state.index)}
        <div
          className="right-button"
          onClick={() => this.rightClick(this.state.index)}
        >
          {'>'}
        </div>
      </div>
    )
  }
}
