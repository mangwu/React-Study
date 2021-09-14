const { useState, useCallback, useRef, useEffect } = window.React;
/**
 * @description 使用回调ref测量DOM节点的例子
 * @function MeasureDOMWithCallbackRefExp
 * @returns {object} 组件
 */
function MeasureDOMWithCallbackRefExp() {
  const [height, setHeight] = useState(0);
  const setDOMHeight = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  return (
    <div>
      <h1 ref={setDOMHeight}>我是被测量的&lt;h1&gt;节点</h1>
      <p>上面节点的高度为:{height}</p>
    </div>
  );
}
ReactDOM.render(
  <MeasureDOMWithCallbackRefExp />,
  document.querySelector("#root")
);
/**
 * @description 使用ref hook测量DOM节点的例子
 * @function MeasureDOMWithRefHookExp
 * @returns {object} 组件
 */
function MeasureDOMWithRefHookExp() {
  const [height, setHeight] = useState();
  const h2Ref = useRef();
  useEffect(() => {
    if (h2Ref.current) {
      setHeight(h2Ref.current.getBoundingClientRect().height);
    }
    console.log(height);
  });
  return (
    <div>
      <Child measureRef={h2Ref} />
      {height > 0 && <p>上面节点的高度为:{height}</p>}
    </div>
  );
}
function Child({ measureRef }) {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(true);
  };
  return isShow ? (
    <h1 ref={measureRef}>我是被测量的&lt;h1&gt;节点</h1>
  ) : (
    <button onClick={handleClick}>show child</button>
  );
}
ReactDOM.render(<MeasureDOMWithRefHookExp />, document.querySelector("#root2"));
