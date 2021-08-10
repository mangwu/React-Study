/*
  Context的使用场景
*/

class ThemeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleThemeButtonClick = this.handleThemeButtonClick.bind(this);
  }
  handleThemeButtonClick(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <input
        type="button"
        value={this.props.theme}
        onClick={this.handleThemeButtonClick}
        className={this.props.theme}
      />
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton theme={props.theme} />
    </div>
  );
}

class App extends React.Component {
  // 主题默认需要传递一个值
  render() {
    return <Toolbar theme="dark" />;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
