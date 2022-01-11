/*
 * @Author: mangwu                                                             *
 * @File: mouseover.js                                                        *
 * @Date: 2022-01-07 13:40:53                                                  *
 * @LastModifiedDate: 2022-01-11 14:19:54                                      *
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

wrapper.addEventListener("mouseover", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse over wrapper";
  log2.append(li);
}, true);
outer.addEventListener("mouseover", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse over outer";
  log2.append(li);
}, true);
content.addEventListener("mouseover", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse over content";
  log2.append(li);
}, true);
inner.addEventListener("mouseover", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse over inner";
  log2.append(li);
}, true);
