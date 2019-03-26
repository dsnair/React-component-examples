import React from 'react'

import Business from './Business'
import CommentsSection from './CommentsSection/CommentsSection'
import './PostsContainer.css'

const PostsContainer = props => {
  return (
    <div className="postscontainer">
      <Business
        avatar={props.post.thumbnailUrl}
        username={props.post.username}
      />
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
