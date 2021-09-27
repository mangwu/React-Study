/**
 * @description Mixins的使用场景
 * @constant TickTock
 * @returns {object} jsx元素
 */
const TickTock = createReactClass({
  getInitialState() {
    return {
      count: 0,
    };
  },
  tick() {
    this.setState({
      count: this.state.count + 1,
    });
  },
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <div>
        <h2>计时器</h2>
        <p>React has been running for {this.state.count} seconds </p>
      </div>
    );
  },
});
ReactDOM.render(<TickTock />, document.querySelector("#root"));

/**
 * @description Mixin
 * @constant 计数器Mixin
 */
const SetIntervalMixin = {
  UNSAFE_componentWillMount() {
    this.intervals = [];
  },
  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  },
};
/**
 * @description 使用了Mixin的组件
 * @constant TickTockWithMixin
 * @returns {object} jsx元素
 */
const TickTockWithMixin = createReactClass({
  mixins: [SetIntervalMixin],
  getInitialState() {
    return {
      count: 0,
    };
  },
  componentDidMount() {
    console.log(this);
    this.setInterval(this.tick, 1000); // 调用mixin上 的方法
    // this.setInterval(this.tick, 1000);
  },
  tick() {
    this.setState({
      count: this.state.count + 1,
    });
  },
  render() {
    return (
      <div>
        <h2>计时器</h2>
        <p>React has been running for {this.state.count} seconds </p>
      </div>
    );
  },
});
const div = document.createElement("div");
const root = document.querySelector("#root");
root.appendChild(div);
ReactDOM.render(<TickTockWithMixin />, div);
