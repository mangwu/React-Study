/**
 * @description  DoubleClick.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-06 16:18:11
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const { useState } = window.React;
/**
 * @description 双击放大缩小卡片
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(_props) {
  const [className, setClassName] = useState("normal");
  const handleDblClick = (e) => {
    e.preventDefault();
    setClassName((className) => {
      return className === "normal" ? "normal large" : "normal";
    });
  };
  return (
    <div>
      <h2>React 双击事件 </h2>
      <div className={className} onDoubleClick={handleDblClick}>
        <div className="title">Card</div>
        <p onDoubleClick={(e) => e.preventDefault()}>
          double click resize the card
        </p>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
