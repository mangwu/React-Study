/**
 * getDerivedStateFromProps :派生state，类组件的生命周期函数
 * 关于在渲染中根据props更新state的功能，在函数组件中的用法
 */
const { useState } = window.React;

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Row+
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Row-
      </button>
      <ScrollView row={count} />
    </div>
  );
}

function ScrollView({ row }) {
  const [prevRow, setPrevRow] = useState(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  if (row !== prevRow) {
    // row发生改变，更新状态
    setIsScrollingDown(prevRow !== null && row > prevRow);
    setPrevRow(row);
  }
  return <div>{`Scrolling down: ${isScrollingDown}`}</div>;
}
ReactDOM.render(<App />, document.querySelector("#root"));
