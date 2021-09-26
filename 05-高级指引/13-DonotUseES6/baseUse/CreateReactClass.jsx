const Greeting = createReactClass({
  getInitialState: function () {
    return {
      count: this.props.count,
    };
  },
  getDefaultProps: function () {
    return {
      name: "mangwu",
    };
  },
  render: function () {
    return (
      <React.Fragment>
        <div>{this.props.name}</div>
        <div>Hello, world!</div>
        <div>count: {this.state.count}</div>
      </React.Fragment>
    );
  },
});
ReactDOM.render(<Greeting count={0} />, document.querySelector("#root"));
