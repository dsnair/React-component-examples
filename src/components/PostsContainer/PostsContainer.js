import React from 'react'

import CommentsSection from './CommentsSection'
import './PostsContainer.css'

const PostsContainer = props => {
  return (
    <div className="postscontainer">
      <header>
        <img src={props.post.thumbnailUrl} alt="avatar" className="avatar" />
        <p className="businessname">{props.post.username}</p>
      </header>
      <img src={props.post.imageUrl} alt="cover" />
      <div className="commentscontainer">
        <p className="likes">
          <i className="far fa-heart" onClick={props.incrementLikes} />
          {props.post.likes} likes
        </p>
        {/* <i className="far fa-comment" /> */}
        <CommentsSection
          comments={props.post.comments}
          text={props.text}
          onChangeNewComment={props.onChangeNewComment}
          onSubmitNewComment={props.onSubmitNewComment}
        />
        <p className="timestamp">{props.timestamp}</p>
      </div>
    </div>
  )
}
export default PostsContainer
