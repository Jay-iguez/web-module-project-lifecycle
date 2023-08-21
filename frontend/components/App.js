import React from 'react'
import TodoList from './TodoList'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

let clearStatus = false

let defaultTodos = [
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
      todos : defaultTodos,
      todoAppend : ''
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:9000/api/todos")
    .then(res => {
      console.log(res)
      this.setState({ todos : res.data.data})
    })
    .catch(err => {
      console.error(err)
    })
  }

  changeHandler = (e) => {
    const {value} = e.target
    this.setState({todoAppend : value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    const todoName = this.state.todoAppend
    axios.post('http://localhost:9000/api/todos', {name : todoName})
    .then(res => {
      const newData = res.data.data
      this.setState(() => ({
        todos : [...this.state.todos, newData],
        todosAppend: ''
      }))
    })
    .catch(err => {
      console.error(err)
    })
  }

  completedhandler = (id) => {
    axios.patch(`http://localhost:9000/api/todos/${id}`)
    .then(res => {
      this.setState({...this.state, todos : this.state.todos.map(todo => {
      if (todo.id === id) {
        todo = res.data.data
        return todo
      } else return todo
    })})
    })
    .catch(err => {
      console.error(err)
    })
  }

  clearHandler = (e) => {
    e.preventDefault()
    clearStatus = !clearStatus
    if (clearStatus === true){
      defaultTodos = this.state.todos
      this.setState(() => ({
        todos : this.state.todos.filter(todo => {
          if (todo.completed === false) {
            return todo
          }
        })
      }))
    } else if (clearStatus === false) {
      this.setState(() => ({
        todos : defaultTodos
      }))
    }
  }

  render() {
    return (
       <TodoList
        todoArray={this.state.todos} 
        completedHandler={this.completedhandler} 
        clearHandler={this.clearHandler} 
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
        todoAppendName={this.state.todoAppend}
        clearStatus={clearStatus}
        />
    )
  }
}
