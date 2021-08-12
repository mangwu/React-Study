/**
 * react Context.Consumer消费者的特性例子
 * 1. 使得函数组件可以获取消费者组件的value值
 * 2. 通过将函数作为子元素获取当前context的值
 * 3. 当没有对应的Provider时获取MyContext的默认值
 */

const MyContext = React.createContext("defaultValue")
function App() {
  return (
    <div className="app">
      <MyContext.Provider value="Consumer获取到的值">
        <Consumer />
      </MyContext.Provider>
      <Consumer />
    </div>
  )
}

function Consumer() {
  return (
    <MyContext.Consumer>
      {(value) => {
        return (
          <div className="consumer">
            context == {value}
          </div>
        )
      }}
    </MyContext.Consumer>
  )
}
ReactDOM.render(<App />, document.querySelector("#root"))