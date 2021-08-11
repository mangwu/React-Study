/*
 * createContext(default) 测试
 * 测试订阅Context对象时default是否生效
 */

const MyContext = React.createContext("defaultValue");

function App() {
  return (
    <div>
      <Content />
      <MyContext.Provider value={undefined}>
        <Content />
      </MyContext.Provider>
    </div>
  );
}

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextType = MyContext;
  // 订阅context后未找到组件树中的Context对象就会获取默认值
  render() {
    console.log(this.context);
    return <div>this.context = {this.context}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
