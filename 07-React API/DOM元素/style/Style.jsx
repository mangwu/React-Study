/**
 * @description style属性：使用需要兼容的属性时，如transition，前缀需要手动补齐，且使用大写
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-08 16:17:23
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  const divStyle = {
    width: "200px",
    backgroundColor: "red",
    transition: "height 2s cubic-bezier(0.075, 0.82, 0.165, 1)",
    WebkitTransition: "height 2s ease-in",
    //chrome safari
    msTransition: "height 2s ease-in",
    //IE 微软
    MozTransition: "height 2s linear",
    //FireFox 火狐
    OTransition: "height 2s linear",
    ///opera 欧鹏
    border: "1px solid black",
    borderRadius: "5px",
  };
  return (
    <div>
      <h2>transition属性兼容使用</h2>
      <div className="transition-div" style={divStyle}></div>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
