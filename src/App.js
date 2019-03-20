import React from 'react'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <TodoForm />
      </React.Fragment>
    )
  }
}

export default App
