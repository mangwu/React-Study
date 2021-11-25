/**
 * @description React.Children.forEach:和map类似的功能，唯一区别在于不会返回值
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-25 09:47:59
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description TimeItemList
 * @class TimeItemList
 * @extends React.PureComponent
 */
class TimeItemList extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    React.Children.forEach(this.props.children, (item, index) => {
      console.log(item, index);
    });
    return <div className="time-item-list">{this.props.children}</div>;
  }
}
/**
 * @description App
 * @function App
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function App(props) {
  return (
    <TimeItemList>
      <div>{new Date().toTimeString()}</div>
      <div>2021-11-25 9:59:55</div>
    </TimeItemList>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
