/**
 * @description 严格模式下弃用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-20 11:17:56
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 使用findDOMNode的组件
 * @class FindDOMNodeApp
 * @extends React.Component
 */
class FindDOMNodeApp extends React.Component {
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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.focusInputText = this.focusInputText.bind(this);
    this.inputRef = React.createRef();
  }
  /**
   * @description 处理input框的值变化
   * @method handleInputChange
   * @param {object} e - input框改变事件
   * @param {object} [e.target] - 引发事件的DOM节点
   * @param {string} [e.target.value] - 引发事件的DOM节点的value属性值
   * @returns void
   */
  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  /**
   * @description 焦点聚集在input
   * @method focusInputText
   * @returns void
   */
  focusInputText() {
    const node = ReactDOM.findDOMNode(this.inputRef.current);
    console.log(this.inputRef.current);
    console.log(node);
    node.focus();
  }
  /**
   * @description 类组件的渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <TextInput
          value={this.state.value}
          handleInputChange={this.handleInputChange}
          ref={this.inputRef}
        />
        <button onClick={this.focusInputText}>focus</button>
      </div>
    );
  }
}
/**
 * @description 类组件
 * @class TextInput
 * @extends React.Component
 */
class TextInput extends React.Component {
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
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <input
        type="text"
        name="text-input"
        id="text-input"
        value={this.props.value}
        onChange={this.props.handleInputChange}
      />
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <FindDOMNodeApp />
  </React.StrictMode>,
  document.querySelector("#root")
);
