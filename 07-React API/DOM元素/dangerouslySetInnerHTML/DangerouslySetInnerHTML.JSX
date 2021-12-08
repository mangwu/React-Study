/**
 * @description innerHTML属性：用于设置节点的文本子节点内容
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-08 10:00:53
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @class App
 * @extends React.Component
 */
class App extends React.Component {
  createMarkup() {
    return { __html: "First &middot; Second" };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    // 返回一个使用了dangerouslySetInnerHTML属性的元素
    return (
      <React.Fragment>
        <h2>在React中，使用dangerouslySetInnerHTML对节点内容进行替换</h2>
        <p dangerouslySetInnerHTML={this.createMarkup.bind(this)()}></p>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
