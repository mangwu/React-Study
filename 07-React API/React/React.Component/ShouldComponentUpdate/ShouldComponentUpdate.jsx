/**
 * @description 手动编写shouldComponentUpdate生命周期函数
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-18 19:16:24
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @class App
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h2>手动编写shouldComponentUpdate生命周期函数</h2>
        <ul>
          <li>count是props</li>
          <li>文本框是state</li>
        </ul>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <hr />
        <Son count={this.state.count} />
      </React.Fragment>
    );
  }
}
/**
 * @description Son
 * @class Son
 * @extends React.Component
 */
class Son extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  static getDerivedStateFromProps(nextProps, preState) {
    console.log(nextProps, preState);
    return null;
  }
  /**
   * @method shouldComponentUpdate 更新是渲染阶段的生命周期函数
   * @returns void
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, this.props);
    console.log(nextState, this.state);
    if (this.state !== nextState || this.props !== nextProps) {
      return false;
    }
    return false;
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <ul>
          <li>count： {this.props.count}</li>
          <li>
            <input
              type="text"
              name="text"
              id="text"
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
          </li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
