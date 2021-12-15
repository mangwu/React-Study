/**
 * @description 键盘事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-13 08:50:14
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
const a = [
  "",
  "altKey",
  "bubbles",
  "cancelable",
  "charCode",
  "code",
  "ctrlKey",
  "currentTarget",
  "defaultPrevented",
  "detail",
  "eventPhase",
  "isTrusted",
  "key",
  "keyCode",
  "locale",
  "location",
  "metaKey",
  "repeat",
  "shiftKey",
  "timeStamp",
  "type",
  "which",
  "_reactName",
  "_targetInst",
];
class App extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      downValue: "onKeyDown:",
      pressValue: "onKeyPress",
      upValue: "onKeyUp",
    };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h3>React中的键盘事件</h3>
        <input
          type="text"
          name="text"
          id="text"
          defaultValue="Hello, world"
          onKeyDown={(e) => {
            console.log(e);
            console.log(e.getModifierState("Alt"));
            let cache = [];
            this.setState({
              downValue:
                "onKeyDown:" +
                JSON.stringify(
                  e,
                  function (key, value) {
                    if (typeof value === "object" && value !== null) {
                      if (cache.indexOf(value) !== -1) {
                        // Circular reference found, discard key
                        return;
                      }
                      // Store value in our collection
                      cache.push(value);
                    }
                    if (key === "") {
                      return value;
                    }
                    if (typeof value === "object" && value !== null) {
                      return "object";
                    }
                    if (typeof value === "function") {
                      return "function";
                    }
                    if (value === null || value === undefined) {
                      return null;
                    }
                    return value;
                  },
                  2
                ),
            });
            cache = null;
          }}
          onKeyPress={(e) => {
            console.log(e);
            let cache = [];
            this.setState({
              pressValue:
                "onKeyPress:" +
                JSON.stringify(
                  e,
                  function (key, value) {
                    if (typeof value === "object" && value !== null) {
                      if (cache.indexOf(value) !== -1) {
                        // Circular reference found, discard key
                        return;
                      }
                      // Store value in our collection
                      cache.push(value);
                    }
                    if (key === "") {
                      return value;
                    }
                    if (typeof value === "object" && value !== null) {
                      return "object";
                    }
                    if (typeof value === "function") {
                      return "function";
                    }
                    if (value === null || value === undefined) {
                      return null;
                    }
                    return value;
                  },
                  2
                ),
            });
            cache = null;
          }}
          onKeyUp={(e) => {
            console.log(e);
            let cache = [];
            this.setState({
              upValue:
                "onKeyUp:" +
                JSON.stringify(
                  e,
                  function (key, value) {
                    if (typeof value === "object" && value !== null) {
                      if (cache.indexOf(value) !== -1) {
                        // Circular reference found, discard key
                        return;
                      }
                      // Store value in our collection
                      cache.push(value);
                    }
                    if (key === "") {
                      return value;
                    }
                    if (typeof value === "object" && value !== null) {
                      return "object";
                    }
                    if (typeof value === "function") {
                      return "function";
                    }
                    if (value === undefined) {
                      return null;
                    }
                    return value;
                  },
                  2
                ),
            });
            cache = null;
          }}
        />
        <div>
          <pre className="prevalue">{this.state.downValue}</pre>
          <br />
          <pre className="prevalue">{this.state.pressValue}</pre>
          <br />
          <pre className="prevalue">{this.state.upValue}</pre>
          <br />
        </div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
