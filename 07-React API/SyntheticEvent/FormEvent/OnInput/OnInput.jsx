/**
 * @description React中的OnInput事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-20 08:56:36
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
        <h2>React中的onInput事件和onChange事件一样</h2>
        <fieldset>
          <legend>使用onInput事件的表单控件</legend>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.value}
            onInput={(e) => this.setState({ value: e.target.value })}
          />
          <div>{this.state.value}</div>
        </fieldset>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

