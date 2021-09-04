/**
 * useDebugValue
 */
const { useState, useEffect, useDebugValue, useCallback } = window.React;

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  useDebugValue("窗口尺寸", (v) => {
    return v + "-" + new Date().toLocaleTimeString();
  });
  return size;
}

function App() {
  const size = useWinSize();
  return (
    <div>
      <h3>宽：{size.width}</h3>
      <h3>高：{size.height}</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
