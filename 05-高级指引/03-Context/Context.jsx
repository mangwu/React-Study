// 创建一个context组件，该组件下的props默认传入'light'值（不指定的话）
const ThemeContext = React.createContext("light");

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class ThemeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleThemeButtonClick = this.handleThemeButtonClick.bind(this);
  }
  handleThemeButtonClick(e) {
    console.log(e.target.value);
  }
  static contextType = ThemeContext;
  render() {
    return (
      <input
        type="button"
        value={this.context}
        onClick={this.handleThemeButtonClick}
        className={this.context}
      />
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root2"))