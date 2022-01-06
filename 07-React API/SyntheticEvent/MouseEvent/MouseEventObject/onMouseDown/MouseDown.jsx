/**
 * @description  MouseDown.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-06 17:06:29
 * @copyright © 2022 wangzhihao, All rights reserved.
 */
const { useState } = window.React;

/**
 * @description 拖曳调整位置
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(_props) {
  const [style, setStyle] = useState({
    display: "none",
  });
  const handleMouseDown = (e) => {
    setStyle({
      display: "inline-block",
      top: e.clientY,
      left: e.clientX,
    });
  };
  const handleMouseUp = (e) => {
    setStyle({
      display: "none",
    });
  };
  return (
    <React.Fragment>
      <h2>React mouseDown 事件 鼠标按下触发, 只触发一次</h2>
      <div className="fireworks" style={style} onMouseUp={handleMouseUp}>
        <img src="./fireworks.png" alt="烟花" />
      </div>
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="area"
      ></div>
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
