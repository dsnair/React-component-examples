import React from 'react'

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input placeholder="Add Todo" onChange={this.props.handleText} />
        <button onClick={this.props.handleAdd}>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm
