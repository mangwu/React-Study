/**
 * @description 类组件的属性：defaultProps与defaultName
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-24 13:59:59
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
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
    console.log(this.props.color);
    return (
      <React.Fragment>
        <h2>类组件的属性：defaultProps与defaultName</h2>
        <ul>
          <li>默认属性(color)：{this.props.color}</li>
        </ul>
      </React.Fragment>
    );
  }
}
App.displayName = "CustomApp";
App.defaultProps = {
  color: "blue",
};
ReactDOM.render(<App color={undefined} />, document.querySelector("#root"));
