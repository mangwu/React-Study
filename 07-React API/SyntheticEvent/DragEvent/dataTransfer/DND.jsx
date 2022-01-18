/**
 * @description  DND.JSX
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-18 18:59:41
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(_props) {
  return (
    <React.Fragment>
      <h2>React中的DND事件</h2>
      <div className="wrapper">
        <div
          className="box"
          draggable="true"
          onDragStart={(e) => console.log(e)}
        >
          hello
        </div>
      </div>
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
