import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

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

  render() {
    return (
      <React.Fragment>
        <TodoList
          todo={this.state.todo}
          handleCompleted={this.handleCompleted}
        />
        <TodoForm
          handleText={this.handleText}
          handleAdd={this.handleAdd}
          value={this.state.text}
        />
      </React.Fragment>
    )
  }
}

export default App
