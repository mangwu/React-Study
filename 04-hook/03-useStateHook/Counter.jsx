// import React, { useState } from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }
  render() {
    return (
      <div>
        <div>You click {this.state.counter} times</div>
        <button onClick={this.handleClick}>click + 1</button>
      </div>
    );
  }
}
ReactDOM.render(<Counter />, document.querySelector("#root"))

