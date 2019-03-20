import React from 'react'

const Todo = props => {
  return (
    <div
      className="todo"
      onClick={() => props.handleCompleted(props.todo.id)}
      style={
        props.todo.completed
          ? { textDecoration: 'line-through', textDecorationColor: 'red' }
          : null
      }
    >
      {props.todo.task}
    </div>
  )
}

export default Todo
