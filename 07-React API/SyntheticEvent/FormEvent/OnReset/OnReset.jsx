/**
 * @description React中的onReset
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-20 15:28:42
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const { useState, useEffect } = window.React;

/**
 * @description onReset例子
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  const [value, setValue] = useState(props.value);
  const [log, setLog] = useState("");
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      onReset={() => {
        const now = new Date();
        setValue(props.value);
        setLog((log) => {
          return log + `触发reset事件时间：${now.toLocaleDateString() + now.toLocaleTimeString()}<br/>`;
        });
      }}
    >
      <fieldset>
        <legend>React中的onreset例子</legend>
        <input
          type="text"
          name="text"
          id="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="reset" value="重置" />
        <div
          id="log2"
          // contentEditable
          dangerouslySetInnerHTML={{ __html: log }}
        ></div>
      </fieldset>
    </form>
  );
}
ReactDOM.render(<App value="" />, document.querySelector("#root"));
