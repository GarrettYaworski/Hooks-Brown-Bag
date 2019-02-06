import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super()

    this.state = {
      count: 0
    }
  }

  render() {
    let {count} = this.state
    return (
      <div className="Counter">
        <h1>{count}</h1>
        <button onClick={() => this.setState({count: count - 1})}>Decrement</button>
        <button onClick={() => this.setState({count: count + 1})}>Increment</button>
      </div>
    );
  }
}

export default Counter;
