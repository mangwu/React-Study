/**
 * @description  value.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-09 16:14:37
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      userName: "mangwu",
      userMail: "1185956753@qq.com",
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
        <h3>
          React中的value定义之后一般是受控组件，使用defaultValue替代value能成为非受控组件
        </h3>
        <label htmlFor="user-name">用户名</label>
        <input
          type="text"
          name="user-name"
          id="user-name"
          value={this.state.userName}
          onChange={(e) => this.setState({ userName: e.target.value })}
        />
        <br />
        <label htmlFor="user-email">邮箱</label>
        <input
          type="text"
          name="user-email"
          id="user-email"
          customarribute="customArribute"
          value={this.state.userMail}
          onChange={(e) => this.setState({ userName: e.target.value })}
        />
        <br />
        <input
          type="reset"
          value="reset all"
          onClick={() => this.setState({ userMail: "", userName: "" })}
        />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
