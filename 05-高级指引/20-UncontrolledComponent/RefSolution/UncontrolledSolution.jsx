/**
 * @description  非受控组件使用表单的解决方案
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-25 11:26:44
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description
 * @class UncontrolledCpnFormApp
 * @extends React.PureComponent
 */
class UncontrolledCpnFormApp extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.inputTextRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      textInput: "",
    };
  }
  /**
   * @description 处理提交函数
   * @param {Event} e
   * @returns void
   */
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      textInput: this.inputTextRef.current.value,
    });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement}
   */
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text-input">非被控组件</label>
          <input type="text" id="text-input" ref={this.inputTextRef} defaultValue="mangwu" />
          <button type="submit">提交</button>
        </form>
        <div>结果：{this.state.textInput}</div>
      </div>
    );
  }
}
ReactDOM.render(<UncontrolledCpnFormApp />, document.querySelector("#root"));
