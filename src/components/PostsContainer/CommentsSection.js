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
      <form onSubmit={props.onSubmitNewComment} className="commentForm">
        <input
          onChange={props.onChangeNewComment}
          value={props.text}
          type="text"
          className="commentInput"
          placeholder="Add a comment"
        />
      </form>
    </>
  )
}
export default CommentsSection
