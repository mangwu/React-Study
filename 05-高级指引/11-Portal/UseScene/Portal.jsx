const { useState, useEffect } = window.React;
/**
 * @description Portal用于将子组件挂载到离开与父组件节点的另外节点上，常用于弹出框等
 * @function App
 * @returns {object} jsx元素
 */
function App() {
  return (
    <div className="popwin" id="popwin">
      <Trigger />
    </div>
  );
}
/**
 * @description 按钮，触发器，它将触发弹窗
 * @function Trigger
 * @returns {object} jsx元素
 */
function Trigger() {
  const [style, setStyle] = useState({
    visibility: "hidden",
  });
  const popUpWindow = () => {
    setStyle((style) => ({
      ...style,
      visibility: "visible",
    }));
  };
  return (
    <div>
      <button onClick={popUpWindow}>clickme</button>
      <PopUpWin style={style} />
    </div>
  );
}
/**
 * @description 弹窗
 * @function PopUpWin
 * @returns {object} jsx元素
 */
function PopUpWin(props) {
  const pstyle = props.style;
  useEffect(() => {
    setStyle(pstyle);
  }, [pstyle]);
  const [style, setStyle] = useState(pstyle);
  const closePipUpWin = () => {
    setStyle({
      visibility: "hidden",
    });
  };
  const child = (
    <div
      style={{
        zIndex: 999,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <div
        style={{
          width: 200,
          height: 100,
          transform: "translate(-50%, -50%)",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "3px",
          position: "absolute",
          top: "50%",
          left: "50%",
          background: "#fff",
          ...style,
        }}
      >
        <div
          style={{ textAlign: "right", cursor: "pointer" }}
          onClick={closePipUpWin}
        >
          ×
        </div>
        warning
      </div>
    </div>
  );
  return ReactDOM.createPortal(child, document.querySelector("#modal-root"));
}
ReactDOM.render(<App />, document.querySelector("#root"));
