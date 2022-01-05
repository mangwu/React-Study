/*
 * @Author: mangwu                                                             *
 * @File: MouseEvent.js                                                        *
 * @Date: 2021-12-31 11:10:36                                                  *
 * @LastModifiedDate: 2022-01-05 14:45:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2021 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const clickme = document.querySelector(".clickme");
const ul = document.querySelector("ul");
console.log(ul);
// 测试鼠标全部按键时，使用鼠标事件mouseup
// 测试鼠标位置时，使用mousemove
// 测试鼠标的相关对象，使用mouseleave或mouseenter
clickme.addEventListener("mouseup", (e) => {
  console.log(e);
  const li = document.createElement("li");
  const {
    altKey,
    button,
    buttons,
    clientX,
    clientY,
    ctrlKey,
    metaKey,
    movementX,
    movementY,
    offsetX,
    offsetY,
    pageX,
    pageY,
    screenX,
    screenY,
    // region,
    shiftKey,
    x,
    y,
    layerX,
    layerY,
    relatedTarget
  } = e;
  li.innerHTML = `<table>
    <tr>
      <th>属性</th>
      <td>button</td>
      <td>altKey</td>
      <td>buttons</td>
      <td>clientX</td>
      <td>clientY</td>
      <td>ctrlKey</td>
      <td>metaKey</td>
    </tr>
    <tr>
      <th>值</th>
      <td>${button}</td>
      <td>${altKey}</td>
      <td>${buttons}</td>
      <td>${clientX}</td>
      <td>${clientY}</td>
      <td>${ctrlKey}</td>
      <td>${metaKey}</td>
    </tr>
    <tr>
      <th>属性</th>
      <td>movementX</td>
      <td>movementY</td>
      <td>offsetX</td>
      <td>offsetY</td>
      <td>pageX</td>
      <td>pageY</td>
      <td>screenX</td>
    </tr>
    <tr>
      <th>值</th>
      <td>${movementX}</td>
      <td>${movementY}</td>
      <td>${offsetX}</td>
      <td>${offsetY}</td>
      <td>${pageX}</td>
      <td>${pageY}</td>
      <td>${screenX}</td>
    </tr>
    <tr>
      <th>属性</th>
      <td>screenY:</td>
      <td>shiftKey:</td>
      <td>x</td>
      <td>y</td>
      <td>relatedTarget</td>
      <td>layerX</td>
      <td>layerY</td>
    </tr>
    <tr>
      <th>值</th>
      <td>${screenY}</td>
      <td>${shiftKey}</td>
      <td>${x}</td>
      <td>${y}</td>
      <td>${relatedTarget}</td>
      <td>${layerX}</td>
      <td>${layerY}</td>
    </tr>
    </table>
    `;
  ul.append(li);
});
