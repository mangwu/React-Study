/**
 * 决定state数量
 * 对于一个有多个属性的状态，建议拆分
 * 对于一个有很多状态的组件，建议使用自定义hook或者useReducer将关注点一致的状态进行组合管理
 */
const { useState, useEffect } = window.React;

/**
 * @description 保存鼠标移动时的参数的例子
 * @function MultiStateExample
 * @returns {JSXElement}
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
