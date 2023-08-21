import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <h1 onClick={this.props.completedHandler} className={this.props.todo.completed === false ? '' : 'completed'}>{this.props.todo.name}</h1>
    )
  }
}
