/**
 * 使用useImperativeHandle解决Refs转发产生的子组件无法定义同一DOM的ref引用的问题
 * 同时使得子组件能够自定义暴露给父组件的实例属性
 */
const { useState, useImperativeHandle, forwardRef, useRef } = window.React;
function TextInput(_props, ref) {
  const [val, setVal] = useState("");
  const inputRef = useRef(null);
  const handleInputChange = (e) => {
    setVal(e.target.value);
  };
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  return (
    <div>
      <div>{val}</div>
      <input
        type="text"
        name="text"
        id="text"
        ref={inputRef}
        onChange={handleInputChange}
      />
    </div>
  );
}
TextInput = forwardRef(TextInput);
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
