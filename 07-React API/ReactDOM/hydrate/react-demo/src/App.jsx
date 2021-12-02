/**
 * @description  App.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-02 18:16:41
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
import React from "react";
import Home from "./pages/Home";
/**
 * @description
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  return (
    <div className="app">
      <h2>Hello, React!</h2>
      <Home author="mangwu" email="1185956753@qq.com" />
    </div>
  );
}
export default App;
