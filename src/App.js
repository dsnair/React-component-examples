import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import './App.css'
import './components/Todo.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      todo: []
    }
  }

  handleText = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleAdd = event => {
    event.preventDefault()
    const newTodo = {
      task: this.state.text,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newTodo],
      text: ''
    })
  }

  handleCompleted = id => {
    const newTodo = [...this.state.todo]
    newTodo.map(todo => {
      return todo.id === id ? (todo.completed = !todo.completed) : todo
    })
    this.setState({ todo: newTodo })
  }

  handleClear = () => {
    const newTodo = this.state.todo.filter(todo => todo.completed === false)
    this.setState({
      todo: newTodo
    })
  }

  render() {
    return (
      <div className="app">
        <TodoForm
          value={this.state.text}
          handleText={this.handleText}
          handleAdd={this.handleAdd}
          handleClear={this.handleClear}
        />
        <TodoList
          todo={this.state.todo}
          handleCompleted={this.handleCompleted}
        />
      </div>
    )
  }
}

export default App
