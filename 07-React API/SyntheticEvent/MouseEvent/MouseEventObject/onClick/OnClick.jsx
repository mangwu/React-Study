/**
 * @description 鼠标事件-点击事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-06 10:04:03
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const { useState, useEffect } = window.React;

/**
 * @description
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(_props) {
  const [value, setValue] = useState({});
  const handleClick = (e) => {
    console.log(e);
    const {
      altKey,
      button,
      buttons,
      clientX,
      clientY,
      ctrlKey,
      metaKey,
      pageX,
      pageY,
      screenX,
      screenY,
      shiftKey,
    } = e;
    setValue({
      altKey,
      button,
      buttons,
      clientX,
      clientY,
      ctrlKey,
      metaKey,
      pageX,
      pageY,
      screenX,
      screenY,
      shiftKey,
    });
  };

  return (
    <div>
      <h2>React的点击事件</h2>
      <div className="clickme" onClick={handleClick}>
        clickme
      </div>
      <ul className="log">
        {Object.keys(value).map((item, index) => {
          return <li key={index}>{item + ":" + value[item]}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
