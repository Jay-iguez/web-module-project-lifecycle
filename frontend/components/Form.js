import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <input
          type='text'
          value={this.props.todoAppendName}
          onChange={this.props.changeHandler}
          placeholder="Todo here"
        />
        <button onClick={this.props.submitHandler}>Submit</button>
      </>
    )
  }
}
