/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-12 09:49:46                                                  *
 * @LastModifiedDate: 2022-01-12 10:25:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const ul1 = document.querySelector("#ul1");
const ul2 = document.querySelector("#ul2");

ul1.addEventListener("mouseenter", (e) => {
  ul1.style.background = "blue";
  setTimeout(() => {
    ul1.style.background = "white";
  }, 1000);
});
for (let node of ul1.childNodes) {
  node.addEventListener("mouseenter", (e) => {
    node.style.color = "red";
    setTimeout(() => {
      node.style.color = "black";
    }, 1000);
  });
}

ul2.addEventListener("mouseover", (e) => {
  ul2.style.background = "blue";
  setTimeout(() => {
    ul2.style.background = "white";
  }, 1000);
});
for (let node of ul2.childNodes) {
  node.addEventListener("mouseover", (e) => {
    node.style.color = "red";
    setTimeout(() => {
      node.style.color = "black";
    }, 1000);
  });
}