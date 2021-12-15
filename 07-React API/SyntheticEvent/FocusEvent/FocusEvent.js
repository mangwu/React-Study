/**
 * @description 焦点事件：DOM中的焦点事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-14 13:40:53
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const a = document.querySelector("#test");
const form = document.querySelector("#form");
const div = document.querySelector("#div-1");
const fieldset = document.querySelector("#fieldset");
// a.addEventListener("focus", (e) => {
//   console.log(e);
//   e.target.style.background = "pink";
// });
// a.addEventListener("blur", (e) => {
//   console.log(e);
//   e.target.style.background = "";
// });
form.addEventListener(
  "focus",
  (e) => {
    console.log(e);
    e.target.style.background = "pink";
  },
  true
);
form.addEventListener(
  "blur",
  (e) => {
    console.log(e);
    e.target.style.background = "";
  },
  true
);
a.addEventListener("focus", (e) => {
  console.log(e);
  e.target.style.background = "pink";
});

div.addEventListener("focus", (e) => {
  e.target.style.background = "pink";
});
div.addEventListener("blur", (e) => {
  e.target.style.background = "";
});
fieldset.addEventListener("focusin", (e) => {
  e.target.style.background = "blue";
});
fieldset.addEventListener("focusout", (e) => {
  e.target.style.background = "";
});
