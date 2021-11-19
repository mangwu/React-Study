/**
 * @description 派生state的替代方案：使用非受控组件，key值不起作用时将key作为prop传递，通过生命周期函数判断是否需要重置加载组件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-29 14:34:35
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description FatherApp
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
    this.defaultEmails = [
      {
        id: 1,
        email: "example@xyz.com",
        name: "one",
      },
      {
        id: 2,
        email: "example@xyz2.com",
        name: "two",
      },
    ];
    this.state = {
      selectedIndex: 0,
    }
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>避免派生state：解决方案，使用prop id代替key作为是否重置组件的标识</h2>
        <EmailInput
          id={this.defaultEmails[this.state.selectedIndex].id}
          email={this.defaultEmails[this.state.selectedIndex]}
        />
        {this.defaultEmails.map((item, index) => {
          return (
            <label htmlFor={item.name} key={item.id}>
              <input type="radio" name="account" id={item.name}
                checked={this.state.selectedIndex === index}
                onChange={() => { this.setState({ selectedIndex: index }) }}
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
 * @description 受控组件表单
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
      value: props.email.email,
      id: props.id,
    }
    this.handlEmailChange = this.handlEmailChange.bind(this);
  }
  /**
   * @method handlEmailChange
   * @param {Event} e 表单input元素change事件
   * @returns void
   */
  handlEmailChange(e) {
    this.setState({
      value: e.target.value,
    })
  }
  /**
   * @method getDerviedStateFromProps 生命周期函数：渲染阶段前对state进行处理
   * @param {object} nextProps 组件更新传入的props
   * @param {object} preState 组件还未更新前保存的state
   * @returns {{email: string}, {id: string} | null} 根据props生成的“派生state”
   */
  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.id !== preState.id) {
      return {
        value: nextProps.email.email,
        id: nextProps.id,
      }
    }
    return null;
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <label htmlFor="email">email:</label>
        <input type="email" name="email" id="email"
          value={this.state.value} onChange={this.handlEmailChange} />
      </div>
    )
  }
}
ReactDOM.render(<FatherApp />, document.querySelector("#root"));

