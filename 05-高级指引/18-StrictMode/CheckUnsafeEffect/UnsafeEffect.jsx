/**
 * @description 严格模式检查不安全的副作用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-21 09:00:12
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 在渲染阶段的生命周期函数中的任何副作用都是不安全的
 * @class UnsafeEffectApp
 * @extends React.PureComponent
 */
class UnsafeEffectApp extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      info: "UnsafeEffectApp",
    };
    // 在构造函数中使用副作用会被严格模式检查出不安全
    const btn = document.createElement("button");
    btn.textContent = "click me";
    btn.addEventListener("click", () => console.log(this.state.count));
    document.querySelector("#root").appendChild(btn);
    console.log("constructor");
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    // 在构造函数中使用副作用
    document.title = `The count is ${this.state.count}`;
    return (
      <div>
        <h2>{this.state.info}</h2>
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          add
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <UnsafeEffectApp />
  </React.StrictMode>,
  document.querySelector("#root")
);
