/*
 * @Author: mangwu                                                             *
 * @File: mouseenter.js                                                        *
 * @Date: 2022-01-07 13:40:53                                                  *
 * @LastModifiedDate: 2022-01-07 15:12:31                                      *
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

wrapper.addEventListener("mouseenter", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse enter wrapper";
  log2.append(li);
}, true);
outer.addEventListener("mouseenter", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse enter outer";
  log2.append(li);
}, true);
content.addEventListener("mouseenter", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse enter content";
  log2.append(li);
}, true);
inner.addEventListener("mouseenter", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse enter inner";
  log2.append(li);
}, true);
