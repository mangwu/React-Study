/**
 * @description React的onLoad事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-23 15:45:04
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  return (
    <React.Fragment>
      <h2>React的onLoad事件</h2>
      <antd.Avatar
        src={
          <antd.Image
            src="https://joeschmoe.io/api/v1/random"
            style={{ width: 32 }}
          />
        }
        onLoad={() => console.log("antd的Avater加载完成，触发onload事件")}
      />
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
