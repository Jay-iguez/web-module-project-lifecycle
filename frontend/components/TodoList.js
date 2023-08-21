import React from 'react'
import Todo from './Todo'
import Form from './Form'

export default class TodoList extends React.Component {

  render() {
    return (
      <>
      <h2>Todo List:</h2>
      <div style={{border: '1px solid grey'}}>
      {
        this.props.todoArray.map(todo => {
          return <Todo todo={todo} completedHandler={this.props.completedHandler} />
        })
      }
      </div>
      <Form
       changeHandler={this.props.changeHandler} 
       submitHandler={this.props.submitHandler} 
       todoAppendName={this.props.todoAppendName}
       />
      <button onClick={this.props.clearHandler}>Hide Completed</button>
      </>
    )
  }
}
