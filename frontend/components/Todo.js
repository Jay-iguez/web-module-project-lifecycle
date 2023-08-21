import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <h1
       onClick={() => {this.props.completedHandler(this.props.todo.id)}} 
       className={this.props.todo.completed === false ? '' : 'completed'} 
       style={{margin: '1rem 2rem'}}
       key={this.props.todo.id}
       >
        {this.props.todo.name}
        </h1>
    )
  }
}
