import React from 'react'

const Business = props => {
  return (
    <header>
      <img src={props.avatar} alt="Business logo" />
      <p>{props.username}</p>
    </header>
  )
}
export default Business
