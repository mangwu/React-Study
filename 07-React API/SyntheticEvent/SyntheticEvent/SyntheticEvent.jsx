/**
 * @description 合成事件的构成
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-10 09:17:37
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
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
        <h2>React不同版本下的合成事件处理方式不一样</h2>
        <ul>
          <li>v 17版本之前，放入事件池中，异步获取合成事件会被置空</li>
          <li>v 17版本及之后，异步获取合成事件不受影响</li>
        </ul>

        <input
          type="text"
          name="text"
          id="text"
          defaultValue="hello, SyntheticEvent"
          onChange={(e) => setTimeout(() => console.log(e), 100)}
        />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
