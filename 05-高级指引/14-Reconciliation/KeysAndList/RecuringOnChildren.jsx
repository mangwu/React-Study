const { useState } = window.React;
/**
 * @description 对子节点进行递归，对比新旧元素列表时，根据key值检查匹配子节点
 * @function DifferentInsertOnArry
 * @returns {object} jsx元素
 */
function DifferentInsertOnArry() {
  const [list, setList] = useState(["first", "second"]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="list">
        <ul>
          {list.map((v) => {
            return <li>{v}</li>;
          })}
        </ul>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => setList(list.concat(text))}>在底部插入</button>
        <button onClick={() => setList([text].concat(list))}>在顶部插入</button>
      </form>
    </div>
  );
}
ReactDOM.render(<DifferentInsertOnArry />, document.querySelector("#root"));
