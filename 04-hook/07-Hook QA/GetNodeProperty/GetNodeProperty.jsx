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
 * @description 使用ref hook测量DOM节点的例子；ref hook无法获取到延迟显示的组件节点
 * @function MeasureDOMWithRefHookExp
 * @returns {object} jsx元素
 */
function MeasureDOMWithRefHookExp() {
  const [height, setHeight] = useState();
  const h2Ref = useRef();
  useEffect(() => {
    if (h2Ref.current) {
      setHeight(h2Ref.current.getBoundingClientRect().height);
    }
    console.log(h2Ref.current);
  });
  return (
    <div>
      <hr />
      <p>使用ref hook延迟显示组件的情况</p>
      <Child measureRef={h2Ref} />
      {height > 0 && <p>上面节点的高度为:{height}</p>}
    </div>
  );
}
/**
 * @description 被延迟显示h2标签的子组件
 * @param {object} props 通过解构获取到其中一个prop
 * @returns {object} jsx元素
 */
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

/**
 * @description 使用回调ref可以获取到延迟显示组件节点引用的获取
 * @function MeasureDOMWithCallbackRefExp2
 * @returns {object} jsx元素
 */
function MeasureDOMWithCallbackRefExp2() {
  const [height, setHeight] = useState();
  const setDOMHeight = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  return (
    <div>
      <hr />
      <p>使用回调ref延迟显示组件的情况</p>
      <Child measureRef={setDOMHeight} />
      {height > 0 && <p>上面节点的高度为:{height}</p>}
    </div>
  );
}
ReactDOM.render(
  <MeasureDOMWithCallbackRefExp2 />,
  document.querySelector("#root3")
);
