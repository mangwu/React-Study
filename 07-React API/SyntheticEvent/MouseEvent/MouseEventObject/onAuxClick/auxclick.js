/*
 * @Author: mangwu                                                             *
 * @File: auxclick.js                                                          *
 * @Date: 2022-01-12 14:36:01                                                  *
 * @LastModifiedDate: 2022-01-13 10:20:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 * 2022-01-13 10:19:24	mangwu	$0auxclick可以阻止link跳转默认行为，滚动需要和弹出菜单栏需要mousedown和contextmenu阻止
 */

// 鼠标中键（非主按钮）点击时触发
const randomNumber = (start, end) => {
  // 返回[start, end - 1]// 均为整数
  return Math.floor(Math.random() * (end - start)) + start;
};
const clickme = document.querySelector("#dom .clickme");
const randomColor = () => {
  return `rgb(${randomNumber(0, 256)}, ${randomNumber(0, 256)}, ${randomNumber(
    0,
    256
  )})`;
};
clickme.addEventListener("auxclick", (e) => {
  console.log(e);
  e.preventDefault();
  clickme.style.color = randomColor();
});
clickme.addEventListener("mousedown", (e) => {
  // 鼠标中键按下
  if (e.button === 1) {
    e.preventDefault();
  }
})
clickme.addEventListener("click", (e) => {
  e.preventDefault();
  clickme.style.backgroundColor = randomColor();
});
clickme.addEventListener('contextmenu', (e) => {
  e.preventDefault();
})
