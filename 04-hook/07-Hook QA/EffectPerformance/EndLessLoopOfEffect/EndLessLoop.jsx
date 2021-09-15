const { useState, useEffect } = window.React;

/**
 * @description 关于使用effect hook的死循环问题
 * @function EndLessLoopWithEffectExp
 * @returns {object} jsx元素
 */
function EndLessLoopWithEffectExp() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);
  return <div>count: {count}</div>;
}
ReactDOM.render(<EndLessLoopWithEffectExp />, document.querySelector("#root"));

/**
 * @description 使用setInterval代替setTimeout以性能优化
 * @function FrequentChangesOfStatePerformanceImprovement
 * @returns {object} jsx元素
 */
function FrequentChangesOfStatePerformanceImprovement() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>count: {count}</div>;
}
ReactDOM.render(<FrequentChangesOfStatePerformanceImprovement />, document.querySelector("#root2"))