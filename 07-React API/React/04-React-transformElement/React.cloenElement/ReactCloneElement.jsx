/**
 * @description ReactCloneElement的使用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-26 09:12:55
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description Divider
 * @class Divider
 * @extends React.PureComponent
 */
class Divider extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    // 获取 传递的参数
    let direction = this.props.direction ? this.props.direction : "center";
    let type = this.props.type === "vertical" ? "vertical" : "horizontal";
    let nodes = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(
        <span></span>,
        {
          className: "inner-text",
        },
        [child]
      );
    });
    let className = "";
    // 无文本情况，视作direction无效
    if (!nodes) {
      className = "notext";
      direction = "";
    }
    // 类型为竖线，必定无文本
    if (type === "vertical") {
      className = "notext";
      direction = "";
      nodes = null;
    }
    return (
      <div className={className + " " + type + " divider " + direction}>
        {nodes}
      </div>
    );
  }
}
/**
 * @description App
 * @class App
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <Divider direction="left">Hello, world!</Divider>
        <Divider direction="right">Hello, world!</Divider>
        <Divider direction="center">Hello, world!</Divider>
        <Divider direction="left" type="vertical">
          Hello, world!
        </Divider>
        <Divider direction="left" type="vertical">
          Hello, world!
        </Divider>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
