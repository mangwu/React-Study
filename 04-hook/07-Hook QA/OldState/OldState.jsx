const { useState, useEffect, useRef } = window.React;
/**
 * @description 函数，事件函数，副作用看到的属性和状态都是它们在那一次渲染中被创建时获取到的
 * OldState 意为陈旧的state
 * 即使函数是异步的，获取到的状态或属性仍然是陈旧的
 * @function OldStateExample
 * @returns {object} jsx元素
 */
function OldStateExample() {
  const [count, setCount] = useState(0);
  const handleAlertClick = () => {
    setTimeout(() => {
      alert("Your times of click:" + count);
    }, 3000);
  };
  return (
    <div>
      <p>you click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add 1
      </button>
      <button onClick={handleAlertClick}>alert info</button>
    </div>
  );
}
/**
 * @description 函数，事件函数，副作用看到的属性和状态都是它们在那一次渲染中被创建时获取到的
 * OldState 意为陈旧的state
 * 通过ref获取最新的state
 * 即使函数是异步的，获取到的状态或属性仍然是陈旧的
 * @function GetNewStateWithRefExample
 * @returns {object} jsx元素
 */
function GetNewStateWithRefExample() {
  const [count, setCount] = useState(0);
  const latestState = useRef();
  const handleAlertClick = () => {
    setTimeout(() => {
      alert("Your times of click:" + latestState.current);
    }, 3000);
  };
  useEffect(() => {
    latestState.current = count;
  }, [count]);
  // 上一轮渲染时的count
  const prevCount = latestState.current;
  console.log(prevCount);
  return (
    <div>
      <p>you click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add 1
      </button>
      <button onClick={handleAlertClick}>alert info</button>
    </div>
  );
}
ReactDOM.render(<OldStateExample />, document.querySelector("#root"));
ReactDOM.render(
  <GetNewStateWithRefExample />,
  document.querySelector("#root2")
);
