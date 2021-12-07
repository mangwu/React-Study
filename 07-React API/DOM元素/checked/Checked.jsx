/**
 * @description React中的DOM实现与HTML5有区别：checked属性不再具有初始时的默认选中功能，它是用来控制表单组件的属性
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-07 16:36:42
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description
 * @class App
 * @extends React.PureComponent
 */
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
      bike: false,
      car: false,
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    if (value === "bike") {
      this.setState({ bike: e.target.checked });
    } else if (value === "car") {
      this.setState({ car: e.target.checked });
    }
    console.log(e.target.checked);
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
          React的checked属性用作控制表单组件的属性，使用defaultChecked设置默认值
        </h2>
        <h4>多选框</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="checkbox"
            name="vehicle2"
            id="bike"
            value="bike"
            checked={this.state.bike}
            onChange={this.handleChange}
          />
          bike <br />
          <input
            type="checkbox"
            name="vehicle2"
            id="car"
            value="car"
            checked={this.state.car}
            onChange={this.handleChange}
          />
          car
        </form>
        <h4>单选框</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="radio" name="fruits" id="apple" value="apple" checked={this.state.checked} onChange/>
          <input type="radio" name="fruits" id="banana" value="banana" checked={this.state.checked} />
        </form>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
