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
      vehicle: [],
      checkedValue: "",
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  handleCheckboxChange(e) {
    const value = e.target.value;
    const checked = this.state.vehicle.includes(value);
    console.log(value, checked, e.target.checked);
    // 存在就删除
    if (checked) {
      const newVehicle = this.state.vehicle.filter((item) => item !== value);
      this.setState({
        vehicle: newVehicle,
      });
    } else {
      // 不存在就添加
      this.setState((state) => {
        return {
          vehicle: [...state.vehicle, value],
        };
      });
    }
  }
  /**
   * 单选框点击事件
   * @param {Event} e 点击事件
   */
  handleRadioChange(e) {
    this.setState({ checkedValue: e.target.value });
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
          React的checked属性用作控制表单组件的属性，非可控组件，使用defaultChecked设置默认值
        </h2>
        <h4>多选框</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="checkbox"
            name="vehicle2"
            id="bike"
            value="bike"
            checked={this.state.vehicle.includes("bike")}
            onChange={this.handleCheckboxChange}
          />
          bike <br />
          <input
            type="checkbox"
            name="vehicle2"
            id="car"
            value="car"
            checked={this.state.vehicle.includes("car")}
            onChange={this.handleCheckboxChange}
          />
          car
        </form>
        <h4>单选框</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="radio"
            name="fruits"
            id="apple"
            value="apple"
            checked={this.state.checkedValue === "apple"}
            onChange={this.handleRadioChange}
          />
          apple
          <input
            type="radio"
            name="fruits"
            id="banana"
            value="banana"
            checked={this.state.checkedValue === "banana"}
            onChange={this.handleRadioChange}
          />
          banana
          <input
            type="radio"
            name="fruits"
            id="cherry"
            value="cherry"
            checked={this.state.checkedValue === "cherry"}
            onChange={this.handleRadioChange}
          />
          cherry
        </form>
        <h4>非可控组件</h4>
        <input type="radio" name="gender" id="female" defaultChecked value="female" />
        女
        <br />
        <input type="radio" name="gender" id="male" value="male" />男
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
