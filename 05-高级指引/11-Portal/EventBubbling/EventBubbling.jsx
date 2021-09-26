const appRoot = document.querySelector("#root");
const modalRoot = document.querySelector("#modal");
const { useState, useEffect, useRef, useContext } = window.React;
const Context = React.createContext(null);
function Modal(props) {
  // 创建一个Modal挂载的节点
  const context = useContext(Context);
  console.log(context);
  const el = useRef(document.createElement("div"));
  useEffect(() => {
    /**
     * Modal的子元素被挂载到创建的div节点上
     * 这意味着使用Modal的父组件会分离Modal到一个DOM节点
     * 所以需要将div节点挂载到一个存在于DOM树中的DOM节点上
     * 卸载时该DOM节点就不需要继续挂载
     */
    modalRoot.appendChild(el.current);
    return () => {
      modalRoot.removeChild(el.current);
    };
  }, []);
  return ReactDOM.createPortal(props.children, el.current);
}
/**
 * @description 关于Portal创建的挂载在非最近父组件节点的元素产生事件时，事件冒泡的方式和普通组件一样
 * @function EventBubbling
 * @returns {object} jsx元素
 */
function EventBubbling() {
  // 需要设置一个状态表明Modal虽然使用Portal挂载到了其他节点，但是仍然处于正常事件冒泡中
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  const handleShowModal = () => {
    setShowModal(true);
  };
  const hiddenModal = () => {
    setShowModal(false);
  };
  const modal = showModal ? (
    <Context.Provider>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "250px",
            height: "130px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid gray",
            background: "#fff",
            padding: "3px",
          }}
        >
          <div
            onClick={hiddenModal}
            style={{ textAlign: "right", cursor: "pointer" }}
          >
            ×
          </div>
          modal <br />
          <button>Click Event will bubble</button>
        </div>
      </div>
    </Context.Provider>
  ) : null;
  return (
    // 如果将点击事件覆盖到一整个div，即使Modal在真实DOM中不在这个div内，也会正常触发冒泡
    <Context.Provider value={count}>
      <div onClick={() => setCount(count + 1)}>
        <div>
          number of count: {count}
          <br />
          点击文本所在元素，count值就会增加，包括点击弹框
          <button onClick={handleShowModal}>showModal</button>
        </div>
        <Modal>{modal}</Modal>
      </div>
    </Context.Provider>
  );
}
ReactDOM.render(<EventBubbling />, document.querySelector("#root"));
