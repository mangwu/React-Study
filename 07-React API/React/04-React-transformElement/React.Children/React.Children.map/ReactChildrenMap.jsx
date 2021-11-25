/**
 * @description React.Children.map处理子组件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-24 19:02:03
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description CardContainer
 * @class CardContainer
 * @extends React.PureComponent
 */
class CardContainer extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    const nodeCount = React.Children.count(this.props.children);
    console.log(nodeCount);
    console.log(this.props.children);
    const nodes = React.Children.map(this.props.children, (item, index) => {
      return React.cloneElement(item, {
        className: item.props.className
          ? item.props.className + " card-item " + item.props.slot
          : "card-item " + item.props.slot,
        key: index,
      });
    });
    console.log(nodes);
    return (
      <div
        style={{
          width: "500px",
          borderRadius: "8px",
          background: "#eeeeee",
          // padding: "8px 5px 25px 8px",
          boxSizing: "border-box",
        }}
      >
        {nodes}
      </div>
    );
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
    <div>
      <CardContainer>
        <h2 slot="title">标题</h2>
        <div slot="content">
          blah.....如何看待网易云音乐将于 12 月 2
          日挂牌上市？这对在线音乐市场有什么影响？
        </div>
      </CardContainer>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
