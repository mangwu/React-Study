const { useState, useMemo } = window.React;
function TestUseMemo() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("");

  function Expensive() {
    console.log("expensive");
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum = sum + i;
    }
    return sum;
  }
  return (
    <div>
      <h4>每重新渲染就会执行expensive： {Expensive()} {"<="}函数返回的结果</h4>
      <div>
        count: {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          + 1
        </button>
      </div>
      <div>
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

ReactDOM.render(<TestUseMemo />, document.querySelector("#root"));
