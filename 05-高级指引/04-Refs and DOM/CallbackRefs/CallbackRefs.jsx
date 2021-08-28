/**
 * 回调Refs的创建和使用
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",

    };
    // 声明一个保存DOM元素节点的变量
    this.textInput = null;
    this.passwordInput = null;
    // 声明回调Refs
    this.setTextInputRef = (element) => {
      this.textInput = element;
      console.log(element);
    };
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    this.textInput.focus();
  }
  handleInputTextChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="password"
          ref={(element) => {
            this.passwordInput = element;
            console.log(element);
          }}
          value={this.state.inputText}
          onChange={(e) => this.handleInputTextChange(e)}
        />
        <button onClick={this.focusTextInput}>focus textInput</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
