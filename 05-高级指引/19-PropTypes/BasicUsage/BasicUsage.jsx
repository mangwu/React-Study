/**
 * @description  PropTypes类型检查的基本使用
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-10-21 11:27:56
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 检查一个prop，其为字符串类型
 * @class BasicUsage
 * @extends React.Component
 */
class BasicUsage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>使用PropTypes进行静态类型检查</h2>
        <div>info: string, {this.props.info}</div>
        <div>count: number, {this.props.count}</div>
      </div>
    );
  }
}
// PropTypes静态类型检查
BasicUsage.propTypes = {
  info: PropTypes.string,
  count: PropTypes.number,
};
ReactDOM.render(
  <BasicUsage info="正确的类型传递" count="错误的类型传递" />,
  document.querySelector("#root")
);
