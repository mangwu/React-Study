/**
 * 自定义父组件current实例属性的重新渲染问题
 */

const { forwardRef, useRef, useImperativeHandle, useCallback, useEffect, useState} = window.React;

const NumberEle = forwardRef((_props, ref) => {
  const numRef = useRef(1);
  const [fresh, setFresh] = useState(false);
  // 自定义父组件current属性
  useImperativeHandle(
    ref,
    () => ({
      // 传给父组件的num一直没有改变，说明numRef对象没有改变
      num: numRef.current,
      fresh
    }),
    [numRef, fresh]
  );
  const addNumRef = useCallback(() => {
    numRef.current++;
    console.log(numRef.current);
  }, []);
  return (
    <div>
      <div>{numRef.current}</div>
      <div>
        <button onClick={addNumRef}>add numRef current</button>
        <button onClick={() => setFresh(!fresh)}>refresh</button>
      </div>
    </div>
  );
});

function App() {
  const numberEleRef = useRef(null);
  useEffect(() => {
    console.log(numberEleRef.current);
  }, [numberEleRef]);
  return (
    <div>
      <NumberEle ref={numberEleRef} />
      <hr />
      <div>
        {numberEleRef.current && numberEleRef.current.numRef && numberEleRef.current.numRef.current}
      </div>
      <button onClick={() => console.log(numberEleRef.current)}>
        log NumverEleRef current
      </button>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector("#root"));
