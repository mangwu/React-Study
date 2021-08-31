/**
 * 使用useImperativeHandle的场景
 * 在Refs转发中，父组件的ref下发到子组件的DOM中，子组件无法定义同一DOM节点的ref引用
 */
const { useState, useRef } = window.React;

function TextInput(_props, ref) {
  const [val, setVal] = useState("");
  const handleInputChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <div>
      <div>{val}</div>
      <input
        value={val}
        type="text"
        name="text"
        id="text"
        ref={ref}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
}

TextInput = React.forwardRef(TextInput);

function App() {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <TextInput ref={inputRef} />
      <button onClick={focusInput}>focus input</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
