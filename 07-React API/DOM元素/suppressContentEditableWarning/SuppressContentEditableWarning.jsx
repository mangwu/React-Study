/**
 * @description  SuppressContentEditableWarning.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-09 09:21:12
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 关于构造一个可编辑的非input控件时
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
      defaultValue: "不可编辑文本",
      editable: false,
    };
    this.spanRef = React.createRef(null);
  }
  editableSpan() {
    this.setState({
      editable: !this.state.editable,
      defaultValue: "可编辑文本",
    });
  }
  handleSpanInput() {
    const html = this.spanRef.current.innerHTML;
    this.setState({
      value: this.spanRef.current.innerHTML,
    });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h3>SuppressContentEditableWarning使用</h3>
        <span
          ref={this.spanRef}
          className="editable-text"
          suppressContentEditableWarning="true"
          contentEditable={this.state.editable}
          onInput={this.handleSpanInput.bind(this)}
          dangerouslySetInnerHTML={{ __html: this.state.defaultValue }}
        ></span>
        <br />
        <br />
        <button onClick={this.editableSpan.bind(this)}>
          {this.state.editable ? "使文本不可编辑" : "使文本可编辑"}
        </button>
        <h4>文本内容：{this.state.value}</h4>
      </React.Fragment>
    );
  }
}
// 封装成一个组件
class EditNode extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const html = this.ref.current.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange(html);
    }
    this.lastHtml = html;
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.ref.current.innerHTML;
  }

  componentDidUpdate() {
    if (this.props.value !== this.ref.current.innerHTML) {
      this.ref.current.innerHTML = this.props.value;
    }
  }

  render() {
    const { value } = this.props;
    return (
      <span
        contentEditable="true"
        className="editable-text "
        ref={this.ref}
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={this.onChange}
        onBlur={this.onChange}
      />
    );
  }
}
class SomeCompoent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "Hello",
    };
  }
  componentDidUpdate() {
    // setTimeout(() => {
    //   this.setState({
    //     html: "变更父组件中的值",
    //   });
    // }, 3000);
  }
  render() {
    return (
      <EditNode
        value={this.state.html}
        onChange={(value) => {
          //当输入值改变，调用setState()更新的时候，不管你在哪个位置输入，光标妥妥的会跳到第一个位置
          this.setState({ html: value });
        }}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
ReactDOM.render(<SomeCompoent />, document.querySelector("#root2"));
