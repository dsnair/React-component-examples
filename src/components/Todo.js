import React from 'react'

const Todo = props => {
  return <input readOnly value={props.todo.task} />
}

export default Todo
