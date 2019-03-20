import React from 'react'

class ToDoForm extends React.Component {
  render() {
    return (
      <form>
        <input placeholder="Add Todo" onChange={this.props.handleText} />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    )
  }
}

export default ToDoForm
