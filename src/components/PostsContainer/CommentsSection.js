import React from 'react'

const CommentsSection = props => {
  return (
    <>
      <p>{props.likes} likes</p>
      {props.comments.map((item, index) => (
        <p key={index}>{`${item.username} ${item.text}`}</p>
      ))}
      <p>{props.timestamp}</p>
    </>
  )
}
export default CommentsSection
