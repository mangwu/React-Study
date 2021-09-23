const { useState, useCallback, useRef, useEffect } = window.React;
const set = new Set();
/**
 * @description 使用callback hook和ref hook 保证callback在在挂载时创建，并且能正确处理事件方法
 * @function CallbackWithRefExp
 * @returns {object} jsx元素
 */
function CallbackWithRefExp() {
  const [text, setText] = useState("");
  const textRef = useRef();
  useEffect(() => {
    textRef.current = text;
  });
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      alert(textRef.current);
    },
    [textRef]
  );
  set.add(handleSubmit);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">输入：</label>
        <input
          type="text"
          name="text"
          id="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">提交</button>
      </form>
      <div>callback 被创建次数： {set.size}</div>
    </div>
  );
}
ReactDOM.render(<CallbackWithRefExp />, document.querySelector("#root"));
