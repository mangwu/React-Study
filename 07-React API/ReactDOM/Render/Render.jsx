/**
 * @description ReactDOM.render()函数
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-27 17:46:51
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { useState } = React;
/**
 * @description 错误边界
 * @class ErrorBoundary
 * @extends React.Component
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // 默认没有错误
    this.state = {
      hasError: false,
      errorInfo: "",
      error: "",
    };
  }
  // 用于渲染备用UI
  static getDerivedStateFromError(error) {
    console.log(error);
    // 更新state，使得下一次渲染能使用降级后的UI
    return { hasError: true };
  }
  // 用于记录错误信息
  componentDidCatch(error, errorInfo) {
    // 发送给服务器错误信息
    // 打印
    this.setState({
      error: error.toString(),
      errorInfo: errorInfo.componentStack,
    });
  }
  render() {
    if (this.state.hasError) {
      // 自定义降级的UI
      return (
        <div>
          <h1>出现错误</h1>
          <h3>错误类型</h3>
          <p>{this.state.error}</p>
          <h3>错误产生点</h3>
          <p>{this.state.errorInfo}</p>
        </div>
      );
    }
    // 正常显示子组件
    return this.props.children;
  }
}
const reRender = () => {
  const a = ReactDOM.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
    document.querySelector("#root")
  );
  console.log(a);
};
/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      info: "ReactDOM.render()首次渲染会替换DOM节点中的全部内容",
      disable: false,
    };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h2>{this.state.info}</h2>
        <button
          disabled={this.state.disable}
          onClick={() =>
            this.setState({
              info: "ReactDOM.render()第二次渲染会使用React DOM diffing algorithm进行高效更新",
              disable: true,
            })
          }
        >
          click me
        </button>
        <button
          style={{ display: this.state.disable ? "block" : "none" }}
          onClick={() => {
            reRender();
          }}
        >
          点击进行ReactDOM重新渲染
        </button>
      </React.Fragment>
    );
  }
}
const b = ReactDOM.render(<App />, document.querySelector("#root"));
console.log(b);
/**
 * @description 无状态组件
 * @function AppWithoutState
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function AppWithoutState(props) {
  const [info, setInfo] = useState("Hello, world");
  return info;
}
const c = ReactDOM.render(
  <AppWithoutState />,
  document.querySelector("#root2")
);
console.log(c);
