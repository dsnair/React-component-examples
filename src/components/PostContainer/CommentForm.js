import React from 'react'
import './CommentForm.css'

const CommentForm = props => {
  return (
    <>
      <form onSubmit={props.onSubmitNewComment} className="commentForm">
        <input
          onChange={props.onChangeNewComment}
          value={props.newCommentText}
          type="text"
          className="commentInput"
          placeholder="Add a comment"
        />
      </form>
    </>
  )
}
export default CommentForm
