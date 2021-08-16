const { useCallback, useState, useContext } = window.React;

const themes = {
  dark: {
    background: "#222222",
    foreground: "#eeeeee",
  },
  light: {
    background: "#eeeeee",
    foreground: "#222222",
  },
};
const ThemeContext = React.createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const handleThemeChange = useCallback(() => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <ToolBar />
    </ThemeContext.Provider>
  );
}

function ToolBar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const {theme, handleThemeChange} = useContext(ThemeContext);
  return (
    <div>
      <div
        style={{
          background: theme.background,
          color: theme.foreground,
          width: "max-content",
          borderRadius: "5px",
        }}
      >
        Changed With useContext Hook!!
      </div>
      <button onClick={handleThemeChange}>Click change Theme</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
