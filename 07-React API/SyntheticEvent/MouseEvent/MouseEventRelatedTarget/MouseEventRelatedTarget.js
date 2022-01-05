/**
 * @description  MouseEventRelatedTarget.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-05 10:30:17
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const log = document.querySelector("#log");

blue.addEventListener("mouseenter", (e) => {
  if (e.relatedTarget) {
    const li = document.createElement("li");
    li.innerHTML = `mouse from ${e.relatedTarget.id} to blue`;
    log.append(li);
  }
});

red.addEventListener("mouseenter", (e) => {
  if (e.relatedTarget) {
    console.log(e);
    const li = document.createElement("li");
    li.innerHTML = `mouse from ${e.relatedTarget.id} to red`;
    log.append(li);
  }
});
blue.addEventListener("mouseout", (e) => {
  if (e.relatedTarget) {
    console.log(e);
    const li = document.createElement("li");
    li.innerHTML = `mouse leave blue to ${e.relatedTarget.id}`;
    log.append(li);
  }
});
red.addEventListener("mouseout", (e) => {
  if (e.relatedTarget) {
    console.log(e);
    const li = document.createElement("li");
    li.innerHTML = `mouse leave red to ${e.relatedTarget.id}`;
    log.append(li);
  }
});


