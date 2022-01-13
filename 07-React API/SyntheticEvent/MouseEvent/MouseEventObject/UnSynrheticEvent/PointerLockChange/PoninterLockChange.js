/*
 * @Author: mangwu                                                             *
 * @File: PoninterLockChange.js                                                *
 * @Date: 2022-01-13 16:58:41                                                  *
 * @LastModifiedDate: 2022-01-13 19:54:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const img = document.querySelector("img");
var isLock = false;

img.addEventListener("click", (e) => {
  // 没有锁定，进入锁定状态
  if (!isLock) {
    // 进入锁定状态
    img.requestPointerLock();
    isLock = true;
  } else {
    // 退出锁定状态
    isLock = false;
    document.exitPointerLock();
  }
});
// 翻转角度初始化
let moveX = 0,
  moveY = 0;
// 翻转方法
const rotate3D = (e) => {
  moveX = moveX + e.movementX;
  moveY = moveY + e.movementY;
  img.style.transform = `rotateX(${moveY/2}deg) rotateY(${moveX/2}deg)`;
};
// 全局检查鼠标状态变化
document.addEventListener("pointerlockchange", () => {
  // 锁定状态
  if (isLock) {
    img.addEventListener("mousemove", rotate3D);
  } else {
    img.removeEventListener("mousemove", rotate3D);
  }
});
