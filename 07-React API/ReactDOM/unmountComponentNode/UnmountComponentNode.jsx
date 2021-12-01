/**
 * @description ReactDOM.unmountComponentNode.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-01 20:19:24
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { useState, useRef, useEffect } = React;
const div = document.createElement("div");
div.setAttribute("id", "modal");
document.body.appendChild(div);
/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  const [timer, setTimer] = useState(10);
  const spinRef = useRef(null);
  useEffect(() => {
    spinRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      ReactDOM.unmountComponentAtNode(document.querySelector("#modal"));
      clearInterval(spinRef.current);
    }
  });
  return (
    <React.Fragment>
      <h2>模拟卸载组件</h2>
      timer: {timer}
      {ReactDOM.createPortal(<antd.Spin />, document.querySelector("#modal"))}
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
