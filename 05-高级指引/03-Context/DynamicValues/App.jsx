class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.handleThemeChange = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
      console.log(this.state);
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ToolBar
            changeTheme={this.handleThemeChange}
            label={this.state.theme.background}
          />
        </ThemeContext.Provider>
        <hr />
        <section>
          <ThemeButton
            label={themes.dark.background}
            onClick={this.handleThemeChange}
          />
        </section>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
