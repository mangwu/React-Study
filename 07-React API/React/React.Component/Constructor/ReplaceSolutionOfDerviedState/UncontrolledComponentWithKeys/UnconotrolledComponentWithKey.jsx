/**
 * @description 替代派生state：不可控组件，传入的prop仅作为初始化state作用，切换模式时使用key重新渲染
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-28 16:08:19
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @type {array} defaultEmails
 */
const defaultEmails = [
  {
    id: 1,
    email: "fakeEmail@example.com",
    name: "one",
  },
  {
    id: 2,
    email: "fakeEmail@example2.com",
    name: "two",
  },
];
/**
 * @description 父组件，传递defaultEmail
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
    };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>
          派生state解决方案：传入的prop仅作为初始值使用，使用key重新渲染不可控组件
        </h2>
        <EmailInput
          email={defaultEmails[this.state.selectedIndex]}
          key={defaultEmails[this.state.selectedIndex].id}
        />
        <div>
          {defaultEmails.map((item, index) => {
            return (
              <label htmlFor={item.name}>
                <input
                  type="radio"
                  name="email"
                  id={item.name}
                  checked={index === this.state.selectedIndex}
                  onChange={() => this.setState({ selectedIndex: index })}
                />
                {item.name}
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}
/**
 * @description 非受控子组件
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
      value: this.props.email.email,
    };
  }
  render() {
    return (
      <React.Fragment>
        <h3>emailName: {this.props.email.name}</h3>
        <form>
          <input
            type="email"
            name="email"
            id="email-input"
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </form>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<FatherApp />, document.querySelector("#root"));
