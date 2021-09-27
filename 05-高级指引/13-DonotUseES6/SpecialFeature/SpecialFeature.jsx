const root = document.querySelector("#root");
/**
 * @description 关于createReactClass的三个特性:1.设置默认Props
 * @constant SetDefaultProps
 * @returns {object} jsx元素
 */
const SetDefaultProps = createReactClass({
  getDefaultProps: function () {
    return {
      name: "mangwu",
    };
  },
  render: function () {
    return <div>Hello,{this.props.name}</div>;
  },
});

ReactDOM.render(<SetDefaultProps />, root);

/**
 * @description 特性二：初始化state
 * @constant InitialState
 * @returns {object} jsx元素
 */
const InitialState = createReactClass({
  getInitialState() {
    return {
      count: 0,
    };
  },
  render() {
    return <div>count: {this.state.count}</div>;
  },
});
const div1 = document.createElement("div");
root.appendChild(div1);
ReactDOM.render(<InitialState />, div1);
/**
 * @description 特性三: 自动绑定到实例
 * @constant AutoBinding
 * @returns {object} jsx元素
 */
const AutoBinding = createReactClass({
  getInitialState() {
    return {
      count: 0,
    };
  },
  add: function () {
    this.setState({
      count: this.state.count + 1,
    });
  },
  render() {
    return (
      <div>
        count: {this.state.count} <button onClick={this.add}>add</button>
      </div>
    );
  },
});
const div2 = document.createElement("div");
root.appendChild(div2);
ReactDOM.render(<AutoBinding />, div2);
