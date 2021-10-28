/**
 * @description 派生state:反面模式-当props改变时才修改复制state
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-27 18:46:30
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

const defaultEmail = "1185956753@qq.com"
/**
 * @description 父组件
 * @class FatherCpn
 * @extends React.Component
 */
 class FatherCpn extends React.Component {
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
    };
  }
  /**
   * @description 挂载时提交阶段DOM更新后的生命周期函数
   * @method componentDidMount
   * @returns void
   */
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => ({
        count: state.count + 1,
      }));
    }, 1000);
  }
  /**
   * @description 卸载时提交阶段组件即将卸载的生命周期函数
   * @method componentWillUnmount
   * @returns void
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>关于派生state的反面模式：当props改变时才修改复制state</h2>
        <div>
          <InputAntiPattern email={defaultEmail} />
        </div>
      </div>
    );
  }
}
/**
 * @description 子组件，反面模式，使用派生state，直接复制父组件props
 * @class InputAntiPattern
 * @extends React.Component
 */
class InputAntiPattern extends React.Component {
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
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  /**
   * @description 替代componentReciveState获取响应props变化的生命周期函数
   * @method getDerivedStateFromProps
   * @param {object} nextProps - 父组件传递的props
   * @param {object} prevState - 更新前的状态
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    // 当email改变时才
    if (nextProps.email !== prevState.value && nextProps.email !== defaultEmail) {
      return {
        value: nextProps.email,
      };
    }
    return null;
  }
  // UNSAFE_componentWillReceiveProps(props) {
  //   this.setState({
  //     value: props.email,
  //   });
  // }
  handleTextChange(e) {
    this.setState({
      value: e.target.value,
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
        <label htmlFor="text-input">email:</label>
        <input
          type="text"
          name="text-input"
          id="text-input"
          value={this.state.value}
          onChange={this.handleTextChange}
        />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<FatherCpn />, document.querySelector("#root"));
