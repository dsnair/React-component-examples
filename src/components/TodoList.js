import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  return props.todo.map(todo => (
    <Todo todo={todo} handleCompleted={props.handleCompleted} key={todo.id} />
  ))
}

export default TodoList
