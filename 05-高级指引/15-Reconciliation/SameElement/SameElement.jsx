const { useState } = window.React;
/**
 * @description diffing算法在比较相同元素类型时，仅会更改可能的元素属性，不会重新销毁创建
 * @function DiffingSameElement
 * @returns {object} jsx元素
 */
function DiffingSameElement() {
  const [fontSize, setFontSize] = useState(16);
  const [textValue, setTextValue] = useState("");
  return (
    <div>
      <h2>DiffingSameElement</h2>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        style={{ fontSize: fontSize + "px", width: "250px" }}
      />
      <br />
      <button onClick={() => setFontSize(fontSize + 2)}>add</button>
      <button
        onClick={() => {
          if (fontSize > 10) setFontSize(fontSize - 2);
        }}
      >
        sub
      </button>
    </div>
  );
}
ReactDOM.render(<DiffingSameElement />, document.querySelector("#root"));
