import React from 'react'
import './Engagements.css'

const Engagements = props => {
  return (
    <>
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      <p className="likes">{props.likes} likes</p>
    </>
  )
}
export default Engagements
