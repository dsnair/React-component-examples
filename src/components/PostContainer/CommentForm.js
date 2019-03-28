import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
`

const Input = styled.input`
  outline: none;
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid whitesmoke;
  font-size: 14px;
`

const CommentForm = props => {
  return (
    <>
      <Form onSubmit={props.onSubmitNewComment}>
        <Input
          onChange={props.onChangeNewComment}
          value={props.newCommentText}
          type="text"
          placeholder="Add a comment"
        />
      </Form>
    </>
  )
}

CommentForm.propTypes = {
  onSubmitNewComment: PropTypes.func.isRequired,
  onChangeNewComment: PropTypes.func.isRequired,
  newCommentText: PropTypes.string
}

export default CommentForm
