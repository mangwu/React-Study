/**
 * @description 避免使用派生state的替代方案：使用实例方法重置组件状态
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-09 08:54:56
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 父组件：在合适的时机调用子组件的实例方法
 * @class FatherApp
 * @extends React.Component
 */
class FatherApp extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void 
   */
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
    // 使用ref获得子组件实例
    this.emailRef = React.createRef();
    // email默认值
    this.defaultEmail = [
      {
        id: 1,
        email: "example@xyz.com",
        name: "one",
      },
      {
        id: 2,
        email: "example@xyz.com",
        name: "two",
      },
    ];
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  /**
   * @method handleRadioChange
   * @param {number} index 选择项索引
   */
  handleRadioChange(index) {
    this.setState({ selectedIndex: index }, () => {
      this.emailRef.current.resetEmail(this.defaultEmail[index].email);
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
        <h2>避免使用派生state的替代方案：使用实例方法重置组件状态</h2>
        <EmailInput ref={this.emailRef} email={this.defaultEmail[this.state.selectedIndex].email} />
        {this.defaultEmail.map((item, index) => {
          return (
            <label htmlFor={item.name} key={item.name}>
              <input type="radio" name="account" id={item.name}
                checked={this.state.selectedIndex === index}
                onChange={() => this.handleRadioChange(index)}
              />
              {item.name}
            </label>
          )
        })}
      </div>
    )
  }
}
/**
 * @description EmailInput
 * @class EmailInput
 * @extends React.Component
 */
class EmailInput extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void 
   */
  constructor(props) {
    super(props);
    this.state = {
      value: props.email,
    };
    this.resetEmail = this.resetEmail.bind(this);
  }
  /**
   * @method resetEmail
   * @param {string} email 父组件调用实例方法时传递的邮件参数
   */
  resetEmail(email) {
    this.setState({
      value: email,
    });
  }
  render() {
    return (
      <label htmlFor="email">
        email:
        <input type="email" name="email" id="email"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })} />
      </label>
    )
  }
}

ReactDOM.render(<FatherApp />, document.querySelector("#root"));
