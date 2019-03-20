import React from 'react'

const Todo = props => {
  return (
    <div
      onClick={() => props.handleCompleted(props.todo.id)}
      style={{ textDecoration: props.todo.completed && 'line-through' }}
    >
      {props.todo.task}
    </div>
  )
}

export default Todo
