/*
 * @Author: mangwu                                                             *
 * @File: DND.js                                                               *
 * @Date: 2022-01-18 14:41:07                                                  *
 * @LastModifiedDate: 2022-01-18 19:17:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const wrapper = document.querySelector(".wrapper");
const box = document.querySelector(".box");
const dataTransfer = document.querySelector(".datatransfer");
const a = document.querySelector("a");
box.addEventListener("dragstart", (e) => {
  console.log(e);
  const div = document.createElement("div");
  box.style.background = "red";
  div.innerHTML = `dataTransfer:<br>&nbsp;dropEffect:${e.dataTransfer.dropEffect}<br>&nbsp;effectAllowed:${e.dataTransfer.effectAllowed}`;
  dataTransfer.append(div);
});
// box.addEventListener("drag", (e) => {
//   console.log(e);
//   const div = document.createElement("div");
//   div.innerHTML = `dataTransfer:<br>&nbsp;dropEffect:${e.dataTransfer.dropEffect}<br>&nbsp;effectAllowed:${e.dataTransfer.effectAllowed}`;
//   dataTransfer.append(div);
// });
box.addEventListener("dragend", (e) => {
  console.log(e);
  const div = document.createElement("div");
  box.style.background = "";
  div.innerHTML = `dataTransfer:<br>&nbsp;dropEffect:${e.dataTransfer.dropEffect}<br>&nbsp;effectAllowed:${e.dataTransfer.effectAllowed}`;
  dataTransfer.append(div);
});

a.addEventListener("dragstart", (e) => {
  console.log(e);
  const div = document.createElement("div");
  a.style.color = "blue"
  div.innerHTML = `dataTransfer:<br>&nbsp;dropEffect:${e.dataTransfer.dropEffect}<br>&nbsp;effectAllowed:${e.dataTransfer.effectAllowed}`;
  dataTransfer.append(div);
});

a.addEventListener("dragend", (e) => {
  console.log(e);
  const div = document.createElement("div");
  a.style.color = ""
  div.innerHTML = `dataTransfer:<br>&nbsp;dropEffect:${e.dataTransfer.dropEffect}<br>&nbsp;effectAllowed:${e.dataTransfer.effectAllowed}`;
  dataTransfer.append(div);
});