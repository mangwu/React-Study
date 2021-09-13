const { useState, useEffect, useRef } = window.React;
/**
 * @description 只在更新时期执行副作用函数的自定义hook
 * @function useEffectExecuteWhenUpdate
 * @param {Function} callback 在更新时期执行的函数
 * @param {Function} clearEffect 清理副作用的函数
 * @param {Array} dps 依赖项
 * @returns void
 */
function useEffectExecuteWhenUpdate(callback, dps, clearEffect = () => {}) {
  // 第一次挂载时不执行
  const shouldExe = useRef(false);
  useEffect(() => {
    if (shouldExe.current) {
      callback();
      return clearEffect;
    }
    shouldExe.current = true;
  }, [...dps]);
}

/**
 * @description 测试组件
 * @function ExpWithCustomExeEffectWhenUpdate
 * @returns {object} jsx元素
 */
function ExpWithCustomExeEffectWhenUpdate() {
  const [fresh, setFresh] = useState(false);
  const [count, setCount] = useState(0);
  const callback = () => {
    console.log("count + 1 副作用被执行了一次");
  };
  useEffectExecuteWhenUpdate(callback, [count]);

  return (
    <div>
      <h2>useEffectExecuteWhenUpdate</h2>
      <div>count: {count}</div>
      <button onClick={() => setFresh(!fresh)}>刷新</button>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
    </div>
  );
}
ReactDOM.render(
  <ExpWithCustomExeEffectWhenUpdate />,
  document.querySelector("#root")
);
