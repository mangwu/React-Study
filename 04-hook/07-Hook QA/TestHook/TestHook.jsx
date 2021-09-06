/**
 * 测试一个计数器组件
 */
const { useState, useEffect } = window.React;
const { act } = window.ReactTestUtils;
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you click add ${count} times`;
  });
  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={() => setCount(count + 1)}>add 1</button>
    </div>
  );
}
// 1. 声明包裹组件的容器
let container = null;

// 2. 创建包裹组件的div
const beforeEach = (
  callback = () => {
    container = document.createElement("div");
    document.body.appendChild(container);
  }
) => {
  return callback;
};
// 3. 测试结束时删除包裹组件的div
const afterEach = (
  callback = () => {
    document.body.removeChild(container);
    container = null;
  }
) => {
  return callback;
};

// 4. 测试期望值
const expect = (value) => {
  const toBe = (testValue) => {
    return value === testValue;
  };
  return { toBe };
};
// 5. 测试函数
const it = (
  result = "can render and update a counter",
  callback = () => {
    beforeEach()();
    let flag = true;
    // 测试首次渲染和 effect
    act(() => {
      ReactDOM.render(<Example />, container);
    });
    const button = container.querySelector("button");
    const label = container.querySelector("p");
    flag = expect(label.textContent).toBe("you click 0 times");
    if (!flag) return "第一轮测试，第一次测试失败";
    flag = expect(document.title).toBe("you click add 0 times");
    if (!flag) return "第一轮测试，第二次测试失败";

    // 测试第二轮渲染和effect
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    flag = expect(label.textContent).toBe("you click 1 times");
    if (!flag) return "第二轮测试，第一次测试失败";
    flag = expect(document.title).toBe("you click add 1 times");
    if (!flag) return "第二轮测试，第二次测试失败";

    // afterEach()();
    return flag;
  }
) => {
  if (callback()) console.log(result);
};
// 6. 执行测试
it();
