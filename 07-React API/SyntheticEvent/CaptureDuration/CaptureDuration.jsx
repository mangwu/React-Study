/**
 * @description 捕获阶段注册事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-10 14:51:13
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  state = {
    style: {
      height: "200px",
      width: "200px",
      backgroundColor: "red",
      borderRadius: "5px",
      position: "relative",
    },
    style2: {
      height: "100px",
      width: "100px",
      backgroundColor: "black",
      borderRadius: "50%",
      margin: "0 auto",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h2>捕获阶段注册事件</h2>
        <div
          style={this.state.style}
          onClickCapture={() => {
            console.log("父元素");
            this.setState({
              style: { ...this.state.style, backgroundColor: "blue" },
            });
          }}
        >
          <div
            style={this.state.style2}
            onClickCapture={() => {
              console.log("子元素");
              this.setState({
                style2: { ...this.state.style2, backgroundColor: "white" },
              });
            }}
          ></div>
        </div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
