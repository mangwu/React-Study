/**
 * @description onChange
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-08 14:14:46
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
      value: "",
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
        <h2>React中的onChange名称和行为一致</h2>
        <input
          type="email"
          name="email"
          id="email2"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <div>the value length is {this.state.value.length}</div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
