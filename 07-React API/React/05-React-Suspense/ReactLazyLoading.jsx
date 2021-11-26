/**
 * @description React懒加载
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-26 11:15:20
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { Spin, Alert } = antd;
class Badge extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    console.log(this.props.children);
    const node = React.Children.only(this.props.children);
    const count = this.props.count;
    const msgCount = count ? (count >= 99 ? "99+" : count) : 0;
    return React.createElement("span", { className: "badge" }, [
      React.cloneElement(node, {
        className: node.props.className + " sub",
        key: 0,
      }),
      React.createElement(
        "sup",
        { className: "badge-count", key: "5" },
        msgCount
      ),
    ]);
  }
}
/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Suspense
        fallback={<Spin tip="Loading..." style={{ zIndex: "999" }}></Spin>}
      >
        <div style={{ width: "100%" }}>
          <Badge2 count={55}>
            <img
              key={"1"}
              src="https://joeschmoe.io/api/v1/random"
              alt=""
              className="avater"
            />
          </Badge2>
        </div>
      </React.Suspense>
    );
  }
}
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
ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.querySelector("#root")
);
