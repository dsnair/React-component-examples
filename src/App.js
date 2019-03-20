import React from 'react'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleText = event =>
    this.setState({
      text: event.target.value
    })

  render() {
    return (
      <React.Fragment>
        <TodoForm handleText={this.handleText}/>
        {/* <form>
          <input placeholder="Add Todo" onChange={this.handleText} />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form> */}
      </React.Fragment>
    )
  }
}

export default App
