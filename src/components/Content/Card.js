import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <div className="card">
      {/* headline goes here */}
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          {/* image source goes here */}
          <img src={props.card.img} alt="avatar" />
        </div>
        {/* author goes here */}
        <span>By {props.card.author}</span>
      </div>
    </div>
  )
}

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.object
}

export default Card
