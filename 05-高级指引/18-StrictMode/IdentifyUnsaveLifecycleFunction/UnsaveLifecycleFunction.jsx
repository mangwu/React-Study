/**
 * @description  使用严格模式检检测不安全生命周期
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-20 09:41:31
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 使用不安全生命周期的类组件
 * @class UnsafeApp
 * @extends React.Component
 */
class UnsafeApp extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
  }

  /**
   * @description 不安全生命周期函数
   * @method UNSAVE_componentWillMount
   * @returns void
   */
  UNSAFE_componentWillMount() {
    this.setState({
      info: "不安全生命周期cpnWillMount渲染出的信息",
    });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>{this.state.info}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <UnsafeApp />
  </React.StrictMode>,
  document.querySelector("#root")
);
