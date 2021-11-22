/**
 * @description 替代派生State的解决方案:完全受控组件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-28 13:56:37
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @type {string} defaultEmail - 默认邮件
 */
const defaultEmail = "fakeemail@example.com";
/**
 * @description 父组件
 * @class FatherApp
 * @extends React.Component
 */
class FatherApp extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      email: defaultEmail,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.resetEmail = this.resetEmail.bind(this);
  }
  /**
   * @method handleEmailChange
   * @param {Event} e 输入框修改事件
   */
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  /**
   * @description 重置输入框
   * @member resetEmail
   */
  resetEmail() {
    this.setState({
      email: defaultEmail,
    });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>替代派生State的解决方案：子组件完全受控</h2>
        <EmailInput
          onChange={this.handleEmailChange}
          email={this.state.email}
        />
        <button type="reset" onClick={this.resetEmail}>重置</button>
      </div>
    );
  }
}
/**
 * @description 受控子组件
 * @function EmailInput
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function EmailInput(props) {
  return (
    <form>
      <label htmlFor="email">email：</label>
      <input
        type="email"
        name="email"
        id="eamil"
        value={props.email}
        onChange={props.onChange}
      />
    </form>
  );
}
ReactDOM.render(<FatherApp />, document.querySelector("#root"));

