/**
 * @description  mouseenter.jsx
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-01-07 10:12:33
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const { useState } = window.React;

/**
 * @description 鼠标事件 mouseenter
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(_props) {
  const [log, setLog] = useState([]);
  return (
    <React.Fragment>
      <h2>React onMouseEnter</h2>
      <div
        className="wrapper"
        onMouseEnter={(e) => {
          setLog((log) => {
            return log.concat("mouse enter wrapper element");
          });
          console.log(e);
        }}
      >
        <div
          className="outer"
          onMouseEnter={(e) => {
            setLog((log) => {
              return log.concat("mouse enter outer element");
            });
            console.log(e);
          }}
        >
          <div
            className="content"
            onMouseEnter={(e) => {
              setLog((log) => {
                return log.concat("mouse enter content element");
              });
              console.log(e);
            }}
          >
            <div
              className="inner"
              onMouseEnter={(e) => {
                setLog((log) => {
                  return log.concat("mouse enter inner element");
                });
                console.log(e);
              }}
            >
              move your mouse to enter me
            </div>
          </div>
        </div>
      </div>
      <div id="log">
        {log.map((item, index) => {
          return <p key={index}>{index + 1 + "." + item}</p>;
        })}
      </div>
      <hr />
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
