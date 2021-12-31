/*
 * @Author: mangwu                                                             *
 * @File: MouseEvent.js                                                        *
 * @Date: 2021-12-31 11:10:36                                                  *
 * @LastModifiedDate: 2021-12-31 17:35:55                                      *
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
clickme.addEventListener("click", (e) => {
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
    region,
    shiftKey,
  } = e;
  li.innerHTML = `<table>
    <tr>
      <th>属性</th>
      <td>button:</td>
      <td>altKey:</td>
      <td>buttons:</td>
      <td>clientX:</td>
      <td>clientY:</td>
      <td>ctrlKey:</td>
      <td>metaKey:</td>
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
      <td></td>
      <td></td>
      <td></td>
    </tr>
    ${button};\t${altKey};\t${buttons};<br/>
    ${clientX};\t${clientY};\t${ctrlKey};<br/>
    :${metaKey};\tmovementX:${movementX};\tmovementY:${movementY};<br/>
    offsetX:${offsetX};\toffsetY:${offsetY};\tpageX:${pageX};\tpageY:${pageY};<br/>
    screenX:${screenX};\tscreenY:${screenY};\tregion:${region};\tshiftKey:${shiftKey};<br/>
    </table>
    `;
  ul.append(li);
});
