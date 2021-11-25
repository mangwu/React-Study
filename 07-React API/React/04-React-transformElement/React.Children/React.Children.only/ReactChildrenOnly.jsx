/**
 * @description  ReactChildrenOnly.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-25 13:47:25
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description Badge
 * @class Badge
 * @extends React.PureComponent
 */
class Badge extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    const node = React.Children.only(this.props.children);
    const count = this.props.count;
    const msgCount = count ? (count >= 99 ? "99+" : count) : 0;
    return (
      <span className="badge">
        {React.cloneElement(node, {
          className: node.props.className + " sub",
        })}
        <sup className="badge-count">{msgCount}</sup>
      </span>
    );
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
      <React.Fragment>
        <Badge count={15}>
          <img
            src="https://joeschmoe.io/api/v1/random"
            alt=""
            className="avater"
          />
        </Badge>
        <Badge count={125}>
          <img
            src="https://joeschmoe.io/api/v1/random"
            alt=""
            className="avater"
          />
        </Badge>
        <Badge count={56}>
          <img
            src="./我的.svg"
            alt=""
            className="avater"
          />
        </Badge>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
