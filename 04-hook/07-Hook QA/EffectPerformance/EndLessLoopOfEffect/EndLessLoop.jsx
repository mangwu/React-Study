const { useState, useEffect, useRef } = window.React;

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
ReactDOM.render(
  <FrequentChangesOfStatePerformanceImprovement />,
  document.querySelector("#root2")
);

/**
 * @description 使用setState的函数式更新形式，便于解决oldState的问题
 * @function FunctionalStateChangeSolvedBug
 * @returns {object} jsx元素
 */
function FunctionalStateChangeSolvedBug() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>count: {count}</div>;
}
ReactDOM.render(
  <FunctionalStateChangeSolvedBug />,
  document.querySelector("#root3")
);
/**
 * @description 使用ref hook解决oldState的问题
 * @function RefSavePrevStateSolvedBug
 * @returns {object} jsx元素
 */
function RefSavePrevStateSolvedBug() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>count: {count}</div>;
}
ReactDOM.render(
  <RefSavePrevStateSolvedBug />,
  document.querySelector("#root4")
);
