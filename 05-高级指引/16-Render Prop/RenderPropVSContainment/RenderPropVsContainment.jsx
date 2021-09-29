const { useState } = window.React;
/**
 * @description 组合关系下，通过prop传递React元素；render prop下， 通过prop传递函数。
 * 二者的区别在于，一个在渲染层面提高可复用性，一个在功能层面提高可复用性
 * @function RenderPropAndContainmentExp
 * @returns {object} jsx元素
 */
function RenderPropAndContainmentExp() {
  return (
    <React.Fragment>
      <Container>
        <Children x="0" y="0" />
      </Container>
      <div >
        <h2>render prop</h2>
        <p>将children组件（图片），赋予根据鼠标位置改变自身位置的功能</p>
        <Mouse render={(x, y) => <Children x={x} y={y} />} />
      </div>
    </React.Fragment>
  );
}

/**
 * @description render prop组件，赋予子组件鼠标移动的位置
 * @param {*} props
 * @returns {object} jsx元素
 */
function Mouse(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {props.render(x, y)}
    </div>
  );
}
/**
 * @description 组合关系的父组件，简单的通过传递props.children组合子组件
 * @param {*} props 
 * @returns {object} jsx元素
 */
function Container(props) {
  return (
    <div style={{ border: "1px solid black", padding: "0 20px" }}>
      <h2>容器</h2>
      <p>用于组合出丰富的渲染UI</p>
      <div
        style={{
          border: "1px solid gray",
          position: "relative",
          height: "128px",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
/**
 * @description 子组件，被组合的组件；或者是被赋予功能的组件
 * @param {*} props 
 * @returns {object} jsx元素
 */
function Children(props) {
  return (
    <img
      src="../gitlab_logo.png"
      alt="gitlabLogo"
      style={{ position: "absolute", left: props.x, top: props.y }}
    />
  );
}

ReactDOM.render(
  <RenderPropAndContainmentExp />,
  document.querySelector("#root")
);
