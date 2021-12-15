/**
 * @description FocusEvent:在React DOM上的所有元素都有效，不只是表单元素
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-14 14:50:48
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description Container
 * @function Container
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function Container(props) {
  return (
    <div
      tabIndex={props.tabIndex}
      onFocus={(e) => props.onFocus(e)}
      style={{
        width: 200,
        height: 200,
        border: "1px solid black",
        borderRadius: "6px",
      }}
      onBlur={(e) => props.onBlur(e)}
    ></div>
  );
}
/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  return (
    <React.Fragment>
      <h2>React中的焦点事件对所有React DOM都有效</h2>
      <Container
        tabIndex={-1}
        onFocus={(e) => {
          e.target.style.background = "pink";
          console.log(e);
        }}
        onBlur={(e) => {
          e.target.style.background = "";
        }}
      />
      <form>
        <fieldset
          onFocusCapture={(e) => (e.target.style.background = "gray")}
          onBlurCapture={(e) => (e.target.style.background = "")}
        >
          <legend>使用focus的在捕获阶段注册统一处理的表单元素</legend>
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </fieldset>
      </form>
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
