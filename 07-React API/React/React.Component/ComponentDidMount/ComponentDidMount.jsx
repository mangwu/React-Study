/**
 * @description 使用ComponentDidMount生命周期函数更新状态时，引起的两次渲染不会有中间状态
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-16 18:49:55
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 挂载时ComponentDidMount生命周期函数
 * @class App
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      info: "初始化例子",
    };
  }
  /**
   * @method componentDidMount 挂载之后在提交阶段立即执行的生命周期函数
   * @returns void
   */
  componentDidMount() {
    this.setState({
      info: "在componentDidMount中更新info显示结果(引发第二次render)",
    });
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h2>
          使用ComponentDidMount生命周期函数更新状态时，引起的两次渲染不会有中间状态
        </h2>
        <div>info: {this.state.info}</div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
