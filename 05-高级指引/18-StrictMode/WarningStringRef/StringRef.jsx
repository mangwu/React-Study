/**
 * @description 使用严格模式检查过时的字符串ref
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-20 10:21:46
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 字符串Ref
 * @class StringRefApp
 * @extends React.Component
 */
class StringRefApp extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
  }
  /**
   * @description 使用字符串ref管理的焦点
   * @method focusTextInput
   * @returns void
   */
  focusTextInput() {
    const node = this.refs.textInput;
    node.focus();
  }
  /**
   * @description
   * @returns {React.ReactElement}
   */
  render() {
    return (
      <div>
        <input type="text" name="text-input" id="text-input" ref="textInput" />
        <button onClick={() => this.focusTextInput()}>focus</button>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <StringRefApp />
  </React.StrictMode>,
  document.querySelector("#root")
);
