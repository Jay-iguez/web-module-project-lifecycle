import React from 'react'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

const defaultTodos = [
  {
    name: 'Put gas in car',
    id: Date.now(),
    completed: false
  },
  {
    name: 'Buy monster truck wheels',
    id: Date.now(),
    completed: false
  },
  {
    name: 'Attach monster truck wheels to car',
    id: Date.now(),
    completed: false,
  },
  {
    name: 'Call insurance company',
    id: Date.now(),
    completed: false
  }
]

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos : defaultTodos
    }
  }

  changeHandler = (e) => {

  }

  submitHandler = (e) => {

  }

  completedhandler = (e) => {
    console.log('hey')
  }

  clearHandler = (e) => {

  }

  render() {
    return (
       <TodoList todoArray={this.state.todos} completedHandler={this.completedhandler} />
    )
  }
}
