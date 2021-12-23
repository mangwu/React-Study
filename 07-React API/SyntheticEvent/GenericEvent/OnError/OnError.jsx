/**
 * @description 模拟错误产生
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-23 17:16:43
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const k = ["1", "2"];
const { useState } = window.React;
/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  const [value, setValue] = useState("");
  const handleError = (e) => {
    console.log(e);
    setValue(`${e.type}: Loading image\n`);
  };
  useEffect(() => {
    console.log("123");
  })
  return (
    <React.Fragment>
      <h2>React产生的错误</h2>
      <img src="./bad.png" onError={handleError} />
      <div>{value}</div>
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
