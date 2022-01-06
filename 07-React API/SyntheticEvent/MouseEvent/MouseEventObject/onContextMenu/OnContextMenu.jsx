/**
 * @description  OnContextMenu.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-06 14:59:08
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const { useState, useEffect, useRef } = window.React;

/**
 * @description 鼠标事件onContextMenu
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(_props) {
  const [style, setStyle] = useState({ display: "none" });
  const handleContextMenu = (e) => {
    e.preventDefault();
    setStyle({
      display: "block",
      top: e.clientY,
      left: e.clientX,
    });
  };
  const alertNodeRef = useRef(null);
  useEffect(() => {
    document.body.addEventListener("click", () => {
      setStyle({
        display: "none",
      });
    });
    alertNodeRef.current.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }, []);
  return (
    <React.Fragment>
      <div className="alert-node" style={style} ref={alertNodeRef}>
        <antd.Alert
          message={"contextmenu info"}
          type="info"
          showIcon
        ></antd.Alert>
      </div>
      <div className="clickme" onContextMenu={handleContextMenu}>
        use right mouse button clicking me
      </div>
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
