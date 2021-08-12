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
const ThemeContext = React.createContext({
  theme: themes.dark,
  changeTheme: () => {},
});
const UserContext = React.createContext("guest");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleThemeChange = () => {
      this.setState((state) => ({
        theme: themes.dark == state.theme ? themes.light : themes.dark,
      }));
    };
    this.state = {
      theme: themes.dark,
      changeTheme: this.handleThemeChange,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <UserContext.Provider value={this.props.user}>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Layout() {
  return (
    <div>
      <Content />
    </div>
  );
}

function Content() {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => {
        return (
          <UserContext.Consumer>
            {(user) => {
              return (
                <div>
                  <div
                    style={{
                      backgroundColor: theme.background,
                      color: theme.foreground,
                      height: "30px",
                      padding: "5px",
                      borderRadius: "5px",
                      width: "fit-content"
                    }}
                  >
                    Welcome! You are {user}!
                  </div>

                  <button onClick={changeTheme}>CHANGE THEME</button>
                </div>
              );
            }}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
}

ReactDOM.render(<App user="SignInUser" />, document.querySelector("#root"));
