/*
 *消费者特性测试
 *1. 一对多
 *2. 可嵌套，里层覆盖外层
 *3. 消费者值发生变化，内部组件树中所有的消费者组件都会重新渲染
 */

const MyContext = React.createContext("MyContext");
const { useState, useEffect } = window.React;
function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    function tick() {
      setDate(new Date());
    }
    const interval = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      {/* 一对多 */}
      <MyContext.Provider value="一对多">
        <Layout />
        <Content />
      </MyContext.Provider>
      {/* 可嵌套 */}
      <MyContext.Provider value="可嵌套外层MyContext">
        <MyContext.Provider value="可嵌套里层MyContext">
          <Content />
        </MyContext.Provider>
        <Content />
      </MyContext.Provider>
      {/* 重新渲染 */}
      <MyContext.Provider value={date}>
        <Timer />
      </MyContext.Provider>
    </div>
  );
}

class Content extends React.Component {
  static contextType = MyContext;
  render() {
    return <div>{this.context}</div>;
  }
}

class Layout extends React.Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="Layout">
        <Content />
        <Content />
        <hr />
      </div>
    );
  }
}

class Timer extends React.Component {
  static contextType = MyContext;
  render() {
    return <div>it is {this.context.toLocaleTimeString()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
