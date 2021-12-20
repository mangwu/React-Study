/**
 * @description React 中的onInvalid事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-20 11:21:21
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const { useState, useEffect, useRef } = window.React;
/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  const [phone, setPhone] = useState("");
  const error = useRef(null);
  const success = useRef(null);
  const reg = /^(0|86|17951)?1[0-9]{10}/;
  const handleSubmit = (e) => {
    console.log(e.target);
    success.current.removeAttribute("hidden");
    const phone = document.querySelector("#phone");
    const submit = document.querySelector("input[type='submit']");
    phone.setAttribute("hidden", "");
    submit.setAttribute("hidden", "");
    e.preventDefault();
  };
  const handleChange = (e) => {
    const isSuccess = reg.test(e.target.value);
    if (isSuccess) {
      error.current.setAttribute("hidden", "");
    } else {
      error.current.removeAttribute("hidden");
      error.current.textContent = "不规范手机号码";
    }
    setPhone(e.target.value);
  };
  const handleInvalid = (e) => {
    // setPhone("");
    error.current.removeAttribute("hidden");
    error.current.textContent = "手机号码有误，请重新输入";
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>React 中的onInvalid事件</legend>
          <input
            type="text"
            name="text"
            id="phone"
            value={phone}
            onChange={handleChange}
            onInvalid={handleInvalid}
            required
            pattern="^(0|86|17951)?1[0-9]{10}"
          />
          <div ref={error} style={{ color: "red", fontSize: "12px" }}></div>
          <div ref={success} hidden style={{ color: "green" }}>
            提交成功
          </div>
          <input type="submit" value="提交" />
        </fieldset>
      </form>
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
