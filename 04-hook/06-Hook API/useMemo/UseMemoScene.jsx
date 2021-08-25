const { useState, useMemo } = window.React;
function TestWithoutMemo() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");

  function Expensive() {
    console.log("expensive");
    let sum = 0;
    for (let i = 1; i <= count; i++) {
      sum = sum + i;
    }
    return sum;
  }
  return (
    <div>
      <h4>
        每重新渲染就会执行expensive： {Expensive()} {"<="}函数返回的结果
      </h4>
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

function TestWithUseMemo() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");
  const expensive = useMemo(() => {
    console.log("expensive");
    let sum = 0;
    for (let i = 1; i <= count; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  return (
    <div>
      <h4>
        每重新渲染就会执行expensive： {expensive} {"<="}函数返回的结果
      </h4>
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
ReactDOM.render(<TestWithoutMemo />, document.querySelector("#root"));
ReactDOM.render(<TestWithUseMemo />, document.querySelector("#root2"));

