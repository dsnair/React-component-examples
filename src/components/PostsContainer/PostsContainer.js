import React from 'react'

import Business from './Business'
import CommentsSection from './CommentsSection'

const PostsContainer = props => {
  return (
    <>
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
    </>
  )
}
export default PostsContainer
