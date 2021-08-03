// import React, { useState } from 'react';
const { useState } = window.React;
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

function CounterFunc() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>function component : You click {counter} times</div>
      <button onClick={handleClick}>click + 1</button>
    </div>
  );
}

ReactDOM.render(<CounterFunc />, document.querySelector("#root2"));
ReactDOM.render(<Counter />, document.querySelector("#root"));
