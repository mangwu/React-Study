/*
 * @Author: mangwu                                                             *
 * @File: click.js                                                             *
 * @Date: 2022-01-06 11:15:29                                                  *
 * @LastModifiedDate: 2022-01-06 13:36:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let clickme = document.getElementsByClassName("clickme");
console.log(clickme);
const log = document.querySelector(".log")

clickme[0].addEventListener("click", (e) => {
  console.log(e);
  log.innerHTML = "";
  const {
    altKey,
    button,
    buttons,
    clientX,
    clientY,
    ctrlKey,
    metaKey,
    pageX,
    pageY,
    screenX,
    screenY,
    shiftKey,
    layerX,
    layerY,
  } = e;
  let a = {
    altKey,
    button,
    buttons,
    clientX,
    clientY,
    ctrlKey,
    metaKey,
    pageX,
    pageY,
    screenX,
    screenY,
    shiftKey,
    layerX,
    layerY,
  };
  Object.keys(a).map((item) => {
    const li = document.createElement("li");
    li.innerHTML = item + ":" + a[item];
    log.append(li);
  });
});
