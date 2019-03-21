import React from 'react'

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input
          onChange={this.props.handleText}
          value={this.props.value}
          placeholder="Add Todo"
        />
        <button onClick={this.props.handleAdd}>Add</button>
        <button onClick={this.props.handleClear}>Clear</button>
      </form>
    )
  }
}

export default TodoForm
