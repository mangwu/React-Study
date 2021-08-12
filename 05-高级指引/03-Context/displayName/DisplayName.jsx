const MyContext = React.createContext("defaultValue");
MyContext.displayName = "MyDisplayName";

function App() {
  return (
    <MyContext.Provider value="providerValue" >
      <Content />
      <Content />
    </MyContext.Provider>
  )
}

function Content() {
  return (
    <div>
      <span>Content component</span>
      <MyContext.Consumer>
        {(value) => {
          return (
            <div>
              I get the value of Provider Component: {value}
            </div>
          )
        }}
      </MyContext.Consumer>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));