import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  render() {
    return (
      <div style={{border: '1px solid grey'}}>
      {
        this.props.todoArray.map(todo => {
          return <Todo todo={todo} completedHandler={this.props.completedHandler} />
        })
      }
      </div>
    )
  }
}
