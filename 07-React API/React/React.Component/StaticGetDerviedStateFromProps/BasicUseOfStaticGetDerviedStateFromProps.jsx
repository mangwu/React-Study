/**
 * @description 派生state：getDerviedStateFromProps的基本使用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-16 11:06:38
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 基本使用
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
      ip: "",
      ipLists: [],
    };
    this.addIpItem = this.addIpItem.bind(this);
  }
  /**
   * @method 添加ip
   * @param {Event} e 提交事件
   */
  addIpItem(e) {
    e.preventDefault();
    this.setState((state) => ({
      ipLists: [...state.ipLists, state.ip],
    }));
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <React.Fragment>
        <h2>派生state：getDerviedStateFromProps的基本使用</h2>
        <form onSubmit={this.addIpItem}>
          <input
            type="text"
            name="ip"
            id="ip"
            value={this.state.ip}
            onChange={(e) => this.setState({ ip: e.target.value })}
          />
          <input type="submit" value="提交" />
        </form>
        <div>
          全部添加项：
          {/* {this.state.ipLists} */}
          {this.state.ipLists.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
        <hr />
        <IpLists lists={this.state.ipLists}></IpLists>
      </React.Fragment>
    );
  }
}
/**
 * @constant {RegExp} reg ip地址正则表达式
 */
const reg =
  /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/;
/**
 * @description ip列表
 * @class IpLists
 * @extends React.PureComponent
 */
class IpLists extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    // ip地址匹配
    this.state = {
      filterLists: this.props.lists.filter((item) => reg.test(item)),
      prevLists: this.props.lists,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.lists !== state.filterLists) {
      return {
        filterLists: props.lists.filter((item) => reg.test(item)),
        prevLists: props.lists,
      };
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
        <h2>做出校验后的ip地址</h2>
        <ul>
          {this.state.filterLists.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
