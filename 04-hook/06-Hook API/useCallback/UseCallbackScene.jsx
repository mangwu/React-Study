/**
 * useCallback的使用场景
 * 当需要将一个函数传递给子组件进行使用时，如果该函数变化次数较少，推荐使用useCallback
 */

const { useCallback, useState } = window.React;
const set1 = new Set();
const set2 = new Set();
function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("useCallback函数的依赖项");
  const handleValueChange = useCallback(
    (val) => {
      setVal(val);
    },
    [val]
  );
  set1.add(handleValueChange);
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  set2.add(handleButtonClick);
  return (
    <div>
      <div>
        count: {count}&nbsp;size: {set2.size}
      </div>
      <Button onClick={handleButtonClick} />
      <br />
      <hr />
      <div>
        val: {val}&nbsp;size: {set1.size}
      </div>
      <Button onClick={handleValueChange} />
    </div>
  );
}

function Button(props) {
  const randomValue = Math.random() * 5;
  const [randomv, setRandomv] = useState(randomValue);
  const handleValueChange = () => {
    props.onClick("改变的val的值：" + randomv);
    setRandomv(Math.random() * 5);
  };
  return (
    <button onClick={handleValueChange} value="click">
      click
    </button>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
