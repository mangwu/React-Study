/**
 * @description Home
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-02 17:26:18
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
import React from "react";
import "./index.css";
/**
 * @description Home
 * @function Home
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function Home(props) {
  return (
    <React.Fragment>
      <h2>Home</h2>
      <ul className="description">
        <li>作者：{props.author}</li>
        <li>邮箱：{props.email}</li>
      </ul>
    </React.Fragment>
  );
}
export default Home;
