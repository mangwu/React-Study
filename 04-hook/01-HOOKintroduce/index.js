// import React, { useState } from "react";
// const useState = require('react').useState


const e = React.createElement;
// useState
const {useState} = window.React;


function Example() {
  // 声明叫做count的state变量
  const [count, setCount] = useState(0);
  return e(
    "div",
    null,
    e(
      "p",
      null,
      "You click ",
      count,
      "times"
    ),
    e(
      "button",
      {
        onClick: function onClick() {
          return setCount(count + 1);
        }
      },
      "Click + 1"
    )
  )
}
ReactDOM.render(e(Example), document.querySelector("#root"));


