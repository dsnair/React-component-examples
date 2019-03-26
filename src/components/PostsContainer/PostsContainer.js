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
      <CommentsSection
        comments={props.post.comments}
        likes={props.post.likes}
        timestamp={props.post.timestamp}
      />
    </div>
  )
}
export default PostsContainer
