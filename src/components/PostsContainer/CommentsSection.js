import React from 'react'
import './CommentsSection.css'

const CommentsSection = props => {
  return (
    <div className="commentscontainer">
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      <p className="likes">{props.likes} likes</p>
      {props.comments.map((item, index) => (
        <p key={index}>
          <span className="handlename">{`${item.username} `}</span>
          {item.text}
        </p>
      ))}
      <p className="timestamp">{props.timestamp}</p>
      <textarea placeholder="Add a comment" wrap="soft" rows="5" />
    </div>
  )
}
export default CommentsSection
