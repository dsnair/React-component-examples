import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Heart } from 'styled-icons/fa-solid'
import CommentForm from './CommentForm'

const PostContainer = styled.div`
  border: 1px solid gainsboro;
  margin-bottom: 20px;
`

const CommentContainer = styled.div`
  padding: 20px;
`

const Header = styled.header`
  display: flex;
  align-content: center;
  margin: 10px;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-self: center;
`

const CoverImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`

const HeartIcon = styled(Heart)`
  margin-right: 10px;
  color: palevioletred;
  :hover {
    color: red;
    cursor: pointer;
  }
`

const PostName = styled.p`
  font-weight: 900;
  padding-left: 10px;
`

const TimeStamp = styled.p`
  color: grey;
  font-size: 14px;
`

const Span = styled.span`
  font-weight: ${props => (props.bold ? 900 : 500)};
`

const Post = props => {
  return (
    <PostContainer>
      <Header>
        <Avatar src={props.post.thumbnailUrl} alt="avatar" />
        <PostName>{props.post.username}</PostName>
      </Header>

      <CoverImage src={props.post.imageUrl} alt="cover" />

      <CommentContainer>
        <HeartIcon onClick={props.incrementLikes} size="22" />
        <Span>{props.post.likes} likes</Span>
        {props.post.comments.map((item, index) => (
          <p key={index}>
            <Span bold>{`${item.username} `}</Span>
            {item.text}
          </p>
        ))}
        <TimeStamp>{props.post.timestamp}</TimeStamp>
        <CommentForm
          newCommentText={props.newCommentText}
          onChangeNewComment={props.onChangeNewComment}
          onSubmitNewComment={props.onSubmitNewComment}
        />
      </CommentContainer>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  incrementLikes: PropTypes.func.isRequired,
  newCommentText: PropTypes.string,
  onChangeNewComment: PropTypes.func.isRequired,
  onSubmitNewComment: PropTypes.func.isRequired
}

export default Post
