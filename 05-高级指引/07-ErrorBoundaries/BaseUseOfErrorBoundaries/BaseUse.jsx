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
      errorInfo: '',
      error: '',
    };
  }
  // 用于渲染备用UI
  static getDerivedStateFromError(error) {
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
/**
 * @description 组件测试
 * @function App
 * @returns {object} jsx元素
 */
function App() {
  return (
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
  );
}
/**
 * @description 计数器
 * @function Counter
 * @returns {object} jsx元素
 */
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
