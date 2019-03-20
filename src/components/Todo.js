import React from 'react'

const Todo = props => {
  return (
    <div onClick={() => props.handleCompleted(props.todo.id)}>
      {props.todo.task}
    </div>
  )
}

export default Todo
