/**
 * 函数组件中创建Refs的方式
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      time: this.props.time,
    };
    this.interval = null;
  }
  tick() {
    this.setState((state) => ({
      time: state.time - 1,
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    setTimeout(() => {
      const node = this.myRef.current;
      node.textContent = "Hello, Ref";
    }, this.props.time * 1000);
  }
  componentDidUpdate() {
    if (this.state.time === 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.time}</div>
        <div ref={this.myRef}>Hello, React</div>
      </div>
    );
  }
}

ReactDOM.render(<App time={5} />, document.querySelector("#root"));
