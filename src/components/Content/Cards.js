import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const Cards = props => {
  return (
    /* 
    Using the cards prop, map over them to create a new Card component, 
    and pass the card as the only prop.
    */
    <div className="cards-container">
      {props.cards.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props.
Cards.propTypes = {
  cards: PropTypes.array,
}

export default Cards
