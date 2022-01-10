/*
 * @Author: mangwu                                                             *
 * @File: mouseup.js                                                           *
 * @Date: 2022-01-10 11:26:22                                                  *
 * @LastModifiedDate: 2022-01-10 14:04:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 画布
const canvas = document.querySelector("#canvas");
// 上下文
const context = canvas.getContext("2d");
// 初始化绘画是否进行，绘画的起始坐标
let isDrawing = false;
let x = 0;
let y = 0;
// 清空按钮
const resetBtn = document.querySelector("button");

// 获取画布区域距离浏览器坐标原点的距离，作为鼠标坐标的描绘位置的偏移量
const rect = canvas.getBoundingClientRect();

// 绘画方法声明，从一条一个点到另一个点绘线
const drawLine = (context, x1, y1, x2, y2) => {
  // 开始绘线
  context.beginPath();
  // 设置线条颜色和宽度
  context.strokeStyle = "black";
  context.lineWidth = 1;
  // 绘画起始点
  context.moveTo(x1, y1);
  // 绘画路径
  context.lineTo(x2, y2);
  // 描线
  context.stroke();
  // 关闭绘制
  context.closePath();
};

// 监听mousedown事件，作为开始绘制的事件，设置起始点
canvas.addEventListener("mousedown", (e) => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});
// 监听mousemove事件，作为绘制过程鼠标位置变化的处理函数
canvas.addEventListener("mousemove", (e) => {
  // 确定鼠标已经被点击了才开始绘制
  if (isDrawing) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});
// 监听mouseup事件，作为本次结束绘制的处理函数,因为有可能在画布外抬起按键，所以在全局监听
window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    // 绘画出最后一段
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    // 重置x，y，isDrawing
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

// 清空按钮
resetBtn.addEventListener("click", () => {
  // 清空
  context.clearRect(0, 0, canvas.width, canvas.height);
});
