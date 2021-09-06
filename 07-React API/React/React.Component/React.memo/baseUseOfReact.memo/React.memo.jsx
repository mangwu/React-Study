/**
 * 使用React.memo高阶组件对函数组件进行包装
 * 包装过的组件能够根据props自定义是否重新渲染
 */
const { useState, useRef, useEffect, memo } = window.React;

function NormalCpn(props) {
  const times = useRef(1);
  useEffect(() => {
    times.current++;
  });
  console.log(`${props.type} was rendered`);
  return <div>{props.type} was rendered {times.current} times</div>;
}
const CpnWithReactMemo = memo(NormalCpn);

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <NormalCpn type={"Normal functional component"}/>
      <CpnWithReactMemo type={"Component wrapped by React.memo"}/>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
