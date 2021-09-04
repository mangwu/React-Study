const { useLayoutEffect, useEffect, useRef, useState } = window.React;

function App() {
  const boxRef = useRef(null);
  const box2Ref = useRef(null);

  useEffect(() => {
    // 初次渲染修改style, 模拟异步，发生的闪屏问题
      boxRef.current.style.margin = "0 auto";
      boxRef.current.textContent = "center";
      boxRef.current.style.backgroundColor = "red";
      boxRef.current.style.color = "white";
  }, []);
  useLayoutEffect(() => {
    // 初次渲染修改style
    box2Ref.current.style.margin = "0 auto";
    box2Ref.current.textContent = "center";
    box2Ref.current.style.backgroundColor = "red";
    box2Ref.current.style.color = "white";
  });
  return (
    <div style={{ backgroundColor: "rebeccapurple", width: "100%" }}>
      <div
        ref={boxRef}
        style={{
          backgroundColor: "lightblue",
          width: "200px",
          height: "200px",
          border: "1px solid white",
        }}
      >
        left
      </div>
      <div
        ref={box2Ref}
        style={{
          backgroundColor: "lightblue",
          width: "200px",
          height: "200px",
          border: "1px solid white",
          position: "relative",
          right: "0",
        }}
      >
        right
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
