const e = React.createElement;
// useState
const { useState, useEffect, useCallback } = window.React;

function Example() {
  // 声明叫做count的state变量
  const [count, setCount] = useState(0);
  return e(
    "div",
    null,
    e("p", null, "You click ", count, "times"),
    e(
      "button",
      {
        onClick: function onClick() {
          return setCount(count + 1);
        },
      },
      "Click + 1"
    )
  );
}
ReactDOM.render(e(Example), document.querySelector("#root"));

// 多个state变量
function FormInput() {
  const [textValue, setTextValue] = useState("");
  const [checked, setChecked] = useState(false);
  function handleInputChange(e) {
    setTextValue(e.target.value);
  }
  function handleCheckboxChange(e) {
    setChecked(e.target.checked);
  }
  return e(
    "div",
    { className: "form" },
    e(
      "form",
      null,
      e("input", {
        type: "text",
        name: "text",
        id: "text",
        value: textValue,
        onChange: handleInputChange,
      }),
      e("input", {
        type: "checkbox",
        checked: checked,
        onChange: handleCheckboxChange,
      })
    )
  );
}

ReactDOM.render(e(FormInput), document.querySelector("#root2"));

// Effect Hook

function EffectExample() {
  const [count, setCount] = useState(0);
  const [textValue, setTextValue] = useState("");
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器API更新页面
    document.title = `You click ${count} times`;
  });
  useEffect(() => {
    document.querySelector("#root3 input").value = `You click ${count} times`;
  });
  function handleInputChange(e) {
    setTextValue(e.target.value);
  }
  return e(
    "div",
    null,
    e("p", null, "You click ", count, " Times"),
    e(
      "button",
      {
        onClick: function () {
          return setCount(count + 1);
        },
      },
      "Click + 1"
    ),
    e("input", {
      type: "text",
      value: textValue,
      onChange: handleInputChange,
      name: "text",
    })
  );
}

ReactDOM.render(e(EffectExample), document.querySelector("#root3"));

// useEffect 的返回清楚副作用的函数

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  function formatTime(date) {
    return date.toLocaleTimeString();
  }

  return e("div", null, "the time is ", formatTime(date));
}

ReactDOM.render(e(Clock), document.querySelector("#root4"));

// 自定义Hook函数
function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return size;
}

function WinSize() {
  const size = useWinSize();
  return e("div", null, "页面尺寸(宽×高)：", size.width, "×", size.height);
}
ReactDOM.render(e(WinSize), document.querySelector("#root5"));
