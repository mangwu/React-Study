const { useState, useEffect } = window.React;
/**
 * @description 关于diffing算法在对比不同的类型元素时的操作
 * @function DiffingDiffrentElement
 * @returns {object} jsx元素
 */
function DiffingDiffrentElement() {
  const [fresh, setFresh] = useState(false);
  const ele = fresh ? (
    <div>
      <HelloWorld />
      <button onClick={() => setFresh(!fresh)}>fresh</button>
    </div>
  ) : (
    <span>
      <HelloWorld />
      <button onClick={() => setFresh(!fresh)}>fresh</button>
    </span>
  );
  return ele;
}
function HelloWorld() {
  useEffect(() => {
    alert("一个HelloWorld组件被创建了")
    return () => {
      console.log("Hello World has been unmount");
    };
  }, []);
  return <div onClick={() => console.log("Hello, world")}>Hello World</div>;
}
ReactDOM.render(<DiffingDiffrentElement />, document.querySelector("#root"));
