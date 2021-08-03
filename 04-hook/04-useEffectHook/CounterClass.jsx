class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      counter: state.counter + 1
    }))
  }
  componentDidMount() {
    document.title = `You click ${this.state.counter} times`;
  }
  componentDidUpdate() {
    document.title = `You click ${this.state.counter} times`;
  }
  render() {
    return (
      <div>
        <div>You click {this.state.counter} times.</div>
        <button onClick={this.handleClick}>
          click + 1
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <CounterClass />,
  document.querySelector("#root")
)