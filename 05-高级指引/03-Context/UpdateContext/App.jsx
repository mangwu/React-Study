const themes = {
  dark: {
    background: "#111111",
    foreground: "#eeeeee",
  },
  light: {
    background: "#eeeeee",
    foreground: "#111111",
  },
};

// 默认值包含处理theme值变化的方法
const ThemeContext = React.createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

function ThemeButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => {
        return (
          <button
            onClick={changeTheme}
            style={{
              backgroundColor: theme.background,
              color: theme.foreground,
            }}
          >
            {theme.background}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function Content() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
    this.state = {
      theme: themes.light,
      changeTheme: this.changeTheme,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
