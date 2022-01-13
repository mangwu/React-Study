/*
 * @Author: mangwu                                                             *
 * @File: mouseout.js                                                        *
 * @Date: 2022-01-10 09:25:12                                                  *
 * @LastModifiedDate: 2022-01-13 11:04:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


const wrapper = document.querySelector("#dom .wrapper");
const outer = document.querySelector("#dom .outer");
const content = document.querySelector("#dom .content");
const inner = document.querySelector("#dom .inner");

const log2 = document.querySelector("#log2");

wrapper.addEventListener("mouseout", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse out wrapper";
  log2.append(li);
}, true);
outer.addEventListener("mouseout", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse out outer";
  log2.append(li);
}, true);
content.addEventListener("mouseout", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse out content";
  log2.append(li);
}, true);
inner.addEventListener("mouseout", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse out inner";
  log2.append(li);
}, true);