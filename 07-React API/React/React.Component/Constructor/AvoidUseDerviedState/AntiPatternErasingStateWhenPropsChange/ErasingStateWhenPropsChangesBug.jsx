/**
 * @description 反面模式：简单的判断父组件的prop是否改变从而修改
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-28 09:55:59
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 上层组件，传递默认值
 * @class AccountList
 * @extends React.Component
 */
class AccountList extends React.Component {
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
    const accounts = [
      {
        id: 1,
        name: "one",
        email: "example@xyz.com",
      },
      {
        id: 2,
        name: "two",
        email: "example@xyz.com",
      },
      {
        id: 3,
        name: "three",
        email: "1185956753@qq.com",
      },
    ];
    return (
      <div style={{ borderTop: "2px solid gray" }}>
        <h2>关于反面模式：简单判断父组件prop修改从而改变派生state产生的bug</h2>
        <EditForm account={accounts[this.state.selectedIndex]} />
        <div>
          {accounts.map((item, index) => {
            return (
              <label htmlFor={item.name} key={item.id}>
                <input
                  type="radio"
                  name="account"
                  id={item.name}
                  checked={this.state.selectedIndex === index}
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
 * @description 表单
 * @class EditForm
 * @extends React.Component
 */
class EditForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>{this.props.account.name}</h2>
        <form>
          <UncontrolledInput email={this.props.account.email} />
        </form>
      </React.Fragment>
    );
  }
}
/**
 * @description 输入框
 * @class UncontrolledInput
 * @extends React.Component
 */
class UncontrolledInput extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.email,
    };
  }
  /**
   * @description 派生state：反面模式，通过判断父组件prop是否变化改变
   * @method UNSAFE_componentWillReceiveProps
   * @param {object} nextProps 父组件props
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.email !== this.props.email) {
      this.setState({
        value: nextProps.email,
      });
    }
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
      </label>
    );
  }
}

ReactDOM.render(<AccountList />, document.querySelector("#root2"));
