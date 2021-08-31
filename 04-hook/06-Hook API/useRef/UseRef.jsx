/**
 * 使用useRef绑定DOM节点
 */
const { useRef } = window.React;
function App() {
  const inputElRef = useRef(null);
  const focusInpout = () => {
    inputElRef.current.focus();
  };
  return (
    <div>
      <input type="text" name="text" id="text" ref={inputElRef} />
      <button onClick={focusInpout}>focus</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
