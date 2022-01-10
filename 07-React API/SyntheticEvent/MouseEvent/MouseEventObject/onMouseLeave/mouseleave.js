/*
 * @Author: mangwu                                                             *
 * @File: mouseleave.js                                                        *
 * @Date: 2022-01-10 09:25:12                                                  *
 * @LastModifiedDate: 2022-01-10 09:34:52                                      *
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

wrapper.addEventListener("mouseleave", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse leave wrapper";
  log2.append(li);
}, true);
outer.addEventListener("mouseleave", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse leave outer";
  log2.append(li);
}, true);
content.addEventListener("mouseleave", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse leave content";
  log2.append(li);
}, true);
inner.addEventListener("mouseleave", (e) => {
  const li = document.createElement("li");
  li.textContent = "mouse leave inner";
  log2.append(li);
}, true);