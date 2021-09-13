const { useRef, useState, useEffect } = window.React;
/**
 * @description 通过ref hook获取上一个状态或props的值
 * @function PrevState
 * @returns {object} 组件
 */
function PrevState() {
  const prevState = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    prevState.current = count;
  });
  const prevCount = prevState.current;
  return (
    <div>
      <h2>get prve state with ref</h2>
      <div>
        Now: {count}
        <br />
        Prev: {prevCount}
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click change count
      </button>
    </div>
  );
}
ReactDOM.render(<PrevState />, document.querySelector("#root"));

/**
 * @description 自定义Hook 实现保存上一轮状态或属性的功能
 * @function usePrevious
 * @param {any} state 要保存的状态或属性
 * @returns {any} 使用ref保存的状态或属性
 */
function usePrevious(value) {
  const prevState = useRef(null);
  useEffect(() => {
    prevState.current = value;
  });
  return prevState.current;
}

/**
 * @description 使用自定义的usePrevious hook来保存上一个状态
 * @function SavePreviousWithCustomHook
 * @returns {object} jsx元素
 */
function SavePreviousWithCustomHook() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <h2>get previous state with custom hook</h2>
      <div>
        now: {count}
        <br />
        prevCount: {prevCount}
      </div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

ReactDOM.render(
  <SavePreviousWithCustomHook />,
  document.querySelector("#root2")
);
