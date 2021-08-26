class App extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个ref来保存textInput的DOM节点元素
    this.textInputRef = React.createRef();
    // 焦点设置方法
    this.focusTextInput = this.focusTextInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  focusTextInput() {
    // 使用原生的focus方法聚焦
    this.textInputRef.current.focus();
  }
  handleClick() {
    const node = this.textInputRef.current;
    node.value ? (node.value = "") : this.focusTextInput();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInputRef} />
        <input
          type="button"
          onClick={this.handleClick}
          value="focus input while it is null"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
