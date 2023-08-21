import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <input
          type='text'
          value={this.props.todoAppendName}
          onChange={this.props.changeHandler}
          placeHolder="Todo here"
        />
        <button>Submit</button>
      </>
    )
  }
}
