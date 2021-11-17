/**
 * @description 构建一个弹窗时，需要在挂载后读取DOM，可以使用componentDidMount初始化弹窗
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-17 19:39:47
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
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
      info: "第一次render初始化info",
      display: false,
      modalInfo,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  /**
   * @method handleClick 处理弹窗显示的点击事件
   * @returns void
   */
  handleClick() {
    this.setState({
      display: !this.state.display,
    });
  }
  /**
   * @method componentDidMount 生命周期函数 第一次挂载后执行
   * @returns void
   */
  componentDidMount() {
    const modal = document.createElement("div");
    modal.setAttribute("id", "modal");
    document.appendChild(modal);
    ReactDOM.createPortal()
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
          构建一个弹窗时，需要在挂载后读取DOM，可以使用componentDidMount初始化弹窗
        </h2>
      </div>
    );
  }
}
/**
 * @description 弹窗
 * @class Modal
 * @extends React.PureComponent
 */
class Modal extends React.PureComponent {
  
}