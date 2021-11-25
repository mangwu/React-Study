/**
 * @description 返回子组件直接子节点数量
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-25 10:16:38
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description TimeLine
 * @function TimeLine
 * @param {object} props - 属性
 * @returns {React.ReactElement} react元素
 */
function TimeLine(props) {
  const counts = React.Children.count(props.children);
  const nodes = React.Children.map(props.children, (item, index) => {
    return (
      <li className="time-item">
        {React.cloneElement(item, {
          className:
            index === counts - 1
              ? "time-item-last time-item-content"
              : "time-item-content",
        })}
        <div className="time-item-tail"></div>
        <div className="time-item-head"></div>
      </li>
    );
  });
  return <ul className="time-line">{nodes}</ul>;
}
/**
 * @description App
 * @class App
 * @extends React.PureComponent
 */
class App extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <TimeLine>
        <div>学习React</div>
        <div>编写测试用例</div>
        <div>学习Vue</div>
        <div>
          美国地铁被非裔暴徒殴打的华裔女性，被曝为「黑命贵」运动支持者，如何看待亚裔被反向歧视？
        </div>
      </TimeLine>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
