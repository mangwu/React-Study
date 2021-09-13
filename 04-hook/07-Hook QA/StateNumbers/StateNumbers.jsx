/**
 * 决定state数量
 * 对于一个有多个属性的状态，建议拆分
 * 对于一个有很多状态的组件，建议使用自定义hook或者useReducer将关注点一致的状态进行组合管理
 */
const { useState, useEffect } = window.React;

/**
 * @description 保存鼠标移动时的参数的例子
 * 使用多个状态的例子
 * @function MultiStateExample
 * @returns {object}
 */
function MultiStateExample() {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const mouseParam = (e) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
    setScreenX(e.screenX);
    setScreenY(e.screenY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseParam);
    return () => {
      document.removeEventListener("mousemove", mouseParam);
    };
  }, []);

  return (
    <div>
      <h2>MultiStateExample</h2>
      <ol>
        <li>screenX: {screenX}</li>
        <li>screenY: {screenY}</li>
        <li>clientX: {clientX}</li>
        <li>clientY: {clientY}</li>
      </ol>
    </div>
  );
}

/**
 * @description 使用一个state管理所有的关于鼠标事件需要使用参数的例子
 * @function SingleStateExample
 * @returns {object}
 */
function SingleStateExample() {
  const [state, setState] = useState({
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
  });

  const mouseParam = (e) => {
    setState({
      ...state,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", mouseParam);
    return () => {
      document.removeEventListener("mousemove", mouseParam);
    };
  }, []);
  return (
    <div>
      <h2>SingleStateExample</h2>
      <ol>
        <li>screenX: {state.screenX}</li>
        <li>screenY: {state.screenY}</li>
        <li>clientX: {state.clientX}</li>
        <li>clientY: {state.clientY}</li>
      </ol>
    </div>
  );
}

/**
 * @description 自定义Hook 实时获取鼠标位置的自定义Hook
 * @function useMousePosition
 * @returns {Array} 位置数组
 */
function useMousePosition() {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const mouseParam = (e) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
    setScreenX(e.screenX);
    setScreenY(e.screenY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseParam);
    return () => {
      document.removeEventListener("mousemove", mouseParam);
    };
  }, []);
  return [screenX, screenY, clientX, clientY];
}
function UseCustomHookExp() {
  const [screenX, screenY, clientX, clientY] = useMousePosition();
  return (
    <div>
      <h2>MultiStateExample</h2>
      <ol>
        <li>screenX: {screenX}</li>
        <li>screenY: {screenY}</li>
        <li>clientX: {clientX}</li>
        <li>clientY: {clientY}</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<MultiStateExample />, document.querySelector("#root"));
ReactDOM.render(<SingleStateExample />, document.querySelector("#root2"));
ReactDOM.render(<UseCustomHookExp />, document.querySelector("#root3"));

