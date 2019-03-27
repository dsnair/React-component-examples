import React from 'react'

import CommentForm from './CommentForm'
import './Post.css'

const Post = props => {
  return (
    <div className="postcontainer">
      <header>
        <img src={props.post.thumbnailUrl} alt="avatar" className="avatar" />
        <p className="businessname">{props.post.username}</p>
      </header>

      <img src={props.post.imageUrl} alt="cover" />

      <div className="commentcontainer">
        <p className="likes">
          <i className="far fa-heart" onClick={props.incrementLikes} />
          {props.post.likes} likes
        </p>
        {props.post.comments.map((item, index) => (
          <p key={index}>
            <span className="username">{`${item.username} `}</span>
            {item.text}
          </p>
        ))}
        <p className="timestamp">{props.post.timestamp}</p>
        <CommentForm
          newCommentText={props.newCommentText}
          onChangeNewComment={props.onChangeNewComment}
          onSubmitNewComment={props.onSubmitNewComment}
        />
      </div>
    </div>
  )
}
export default Post
