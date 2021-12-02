/**
 * @description ReactDOM.unmountComponentNode.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-01 20:19:24
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
const { useState, useRef, useEffect } = React;
const div2 = document.createElement("div");
div2.setAttribute("id", "modal3");
div2.textContent = "通过createPortal挂载的组件"
document.body.appendChild(div2);
/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  const [timer, setTimer] = useState(10);
  const spinRef = useRef(null);
  const timerRef = useRef(null);
  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "modal2");
    document.body.appendChild(div);
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    ReactDOM.render(<antd.Spin />, document.querySelector("#modal"));
    ReactDOM.render(<antd.Spin />, document.querySelector("#modal2"));
  }, []);
  useEffect(() => {
    if (timer === 0) {
      console.log(spinRef.current);
      ReactDOM.unmountComponentAtNode(document.querySelector("#modal"));
      ReactDOM.unmountComponentAtNode(document.querySelector("#modal2"));
      ReactDOM.unmountComponentAtNode(document.querySelector("#modal3"));
      ReactDOM.unmountComponentAtNode(spinRef.current);
      clearInterval(timerRef.current);
    }
  });
  return (
    <React.Fragment>
      <h2>模拟卸载组件</h2>
      timer: {timer}
      <div ref={spinRef}>
        通过ref卸载的组件
        <antd.Spin />
      </div>
      {ReactDOM.createPortal(<antd.Spin />, document.querySelector("#modal3"))}
    </React.Fragment>
  );
}
/**
 * @description App
 * @class App
 * @extends React.Component
 */
// class App extends React.Component {
//   /**
//    * @description 构造函数
//    * @method constructor
//    * @param {object} props - 属性
//    * @returns void
//    */
//   constructor(props) {
//     super(props);
//     this.state = {
//       timer: 10
//     }
//     this.spinRef = React.createRef(null);
//   }
//   componentDidMount() {
//     const div = document.createElement('div');

//   }
// }
ReactDOM.render(<App />, document.querySelector("#root"));
