import React from 'react'
import './CommentsSection.css'

const CommentsSection = props => {
  return (
    <>
      {props.comments.map((item, index) => (
        <p key={index}>
          <span className="handlename">{`${item.username} `}</span>
          {item.text}
        </p>
      ))}
      <textarea placeholder="Add a comment" wrap="soft" rows="5" />
    </>
  )
}
export default CommentsSection
