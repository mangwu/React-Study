/**
 * 使用Refs获取对子组件的控制权
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.FormRef = React.createRef();
    this.addDefaultValue = this.addDefaultValue.bind(this);
  }
  addDefaultValue() {
    const rootNode = this.FormRef.current;
    console.log(rootNode);
    rootNode.setState({
      password: "123456",
      userName: "mangwu",
    });
  }
  render() {
    return (
      <div>
        <Form ref={this.FormRef} />
        <button onClick={this.addDefaultValue}>add default value</button>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleUserNameChange(e) {
    this.setState({
      userName: e.target.value,
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  render() {
    return (
      <form>
        <label htmlFor="name">用户名：</label>
        <input
          type="text"
          name="user"
          id="user"
          value={this.state.userName}
          onChange={this.handleUserNameChange}
        />
        <br />
        <label htmlFor="password">密码：</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
      </form>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
