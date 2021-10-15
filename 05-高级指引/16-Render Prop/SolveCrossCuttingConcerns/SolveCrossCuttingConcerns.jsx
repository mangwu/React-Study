const { useState } = window.React;
/**
 * @description render props 是在HOC之后，提出的解决横切关注点问题的一项传递props函数，功能复用的技术
 * @function Mouse 获取鼠标位置的行为
 * @returns {object} 调用render函数
 */
function Mouse(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  return ReactDOM.createPortal(
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "100",
      }}
      onMouseMove={handleMouseMove}
    >
      {props.render(x, y)}
    </div>,
    document.querySelector("#modal")
  );
}
// 类型检查
// Mouse.propType = {
//   render: PropType.func.isRequired,
// };
/**
 * @description 被渲染的组件
 * @function Children
 * @returns {object} jsx元素
 */
function Children({ x, y }) {
  return (
    <img
      src="../gitlab_logo.png"
      alt="gitlabLogo"
      style={{
        position: "fixed",
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
/**
 * @description 调用render prop组件的父组件
 * @function MouseTracker
 * @returns {object} jsx元素
 */
function MouseTracker() {
  return (
    <React.Fragment>
      <h2>Render Props</h2>
      <Mouse render={(x, y) => <Children x={x} y={y} />} />
    </React.Fragment>
  );
}
// ReactDOM.render(<MouseTracker />, document.querySelector("#root"));

/**
 * @description 通过render prop实现高阶函数
 * @function withMouse
 * @param {object} Component
 * @returns {object} 组件
 */
function withMouse(Component) {
  return class extends React.Component {
    render() {
      return <Mouse render={(x, y) => <Component x={x} y={y} />} />;
    }
  };
}
const TrackerWithMouse = withMouse(Children);
ReactDOM.render(<TrackerWithMouse />, document.querySelector("#root"));
