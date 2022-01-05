/*
 * @Author: mangwu                                                             *
 * @File: MouseEventRegion.js                                                  *
 * @Date: 2022-01-05 09:31:55                                                  *
 * @LastModifiedDate: 2022-01-05 09:39:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// 绘图，并给出点击的Region id
ctx.beginPath();
ctx.arc(70, 80, 10, 0.2 * Math.PI, false);
ctx.fill();

// 被废弃的方法
ctx.addHitRegion({ id: "circle" });

const log = document.querySelector("#log");


canvas.addEventListener("mouseup", (e) => {
  if (e.region) {
    const li = document.createElement("li");
    li.innerHTML = `region:${e.region}`;
    log.append(li);
  }
});
