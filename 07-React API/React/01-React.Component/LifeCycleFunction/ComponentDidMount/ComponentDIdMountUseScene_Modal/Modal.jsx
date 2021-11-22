/**
 * @description 构建一个弹窗时，需要在挂载后读取DOM，可以使用componentDidMount初始化弹窗
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-17 19:39:47
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
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
      info: "第一次render初始化info",
      display: false,
      modalInfo: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.modal = document.createElement("div");
    this.modal.setAttribute("id", "modal");
  }
  /**
   * @method handleClick 处理弹窗显示的点击事件
   * @returns void
   */
  handleClick() {
    this.setState({
      display: !this.state.display,
    });
    console.log(this.state.display);
  }
  /**
   * @method componentDidMount 生命周期函数 第一次挂载后执行
   * @returns void
   */
  componentDidMount() {
    document.body.appendChild(this.modal);
    // this.setState({ modalInfo: "hello" });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>
          构建一个弹窗时，需要在挂载后读取DOM，可以使用componentDidMount初始化弹窗
        </h2>
        <button onClick={this.handleClick}>
          {this.state.display ? "hidden" : "show"}
        </button>
        {ReactDOM.createPortal(
          <Modal close={this.handleClick} isShow={this.state.display} />,
          this.modal
        )}
      </div>
    );
  }
}
/**
 * @description 弹窗
 * @class Modal
 * @extends React.PureComponent
 */
class Modal extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      info: "初始化弹窗",
    };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    const display = this.props.isShow ? "block" : "none";
    return (
      <div
        style={{
          position: "fixed",
          background: "rgba(240, 240, 240, 0.5)",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          display,
        }}
      >
        <div
          style={{
            width: "300px",
            height: "200px",
            textAlign: "left",
            textIndent: "6",
            zIndex: 2,
            border: "1px solid gray",
            borderRadius: "3px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
          }}
        >
          <div
            style={{
              height: "30px",
              textAlign: "right",
              width: "100%",
              borderBottom: "1px solid gray",
            }}
          >
            <span onClick={this.props.close} style={{ cursor: "pointer" }}>
              X
            </span>
          </div>
          <div
            className="content"
            style={{
              width: "100%",
              padding: "5px",
            }}
          >
            {this.state.info}
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
