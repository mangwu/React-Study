const { useCallback, useState } = window.React;

/**
 * 关于useCallback是根据依赖项数组进行更新的证明
 * 且不使用useCallback的函数每次渲染都会更新
 * 使用ES6的set用于保存callback，方便计数，因为set不允许出现重复因素；
 */
const set1 = new Set();
const set2 = new Set();

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 普通的内联函数
  const callback1 = () => {
    console.log(count1);
  };
  // 使用useCallback的记忆回调函数
  const callback2 = useCallback(() => {
    console.log(count2);
  }, [count2]);
  // 记录函数更新次数
  set1.add(callback1);
  set2.add(callback2);

  return (
    <div>
      <div>
        <div>
          普通函数的更新次数：{set1.size}
          <br />
          count1： {count1}
        </div>
        <button
          onClick={() => {
            setCount1(count1 + 1);
          }}
        >
          count1 + 1
        </button>
      </div>
      <div>
        <div>
          useCallback函数更新次数：{set2.size}
          <br />
          count2: {count2}
        </div>
        <button
          onClick={() => {
            setCount2(count2 + 1);
          }}
        >
          count2 + 1
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<Counter />, document.querySelector("#root"));
