import React from 'react'
import './Business.css'

const Business = props => {
  return (
    <header>
      <img src={props.avatar} alt="avatar" className="avatar" />
      <p className="businessname">{props.username}</p>
    </header>
  )
}
export default Business
