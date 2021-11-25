/**
 * @description ReactChildren.toArray 适合排序
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-25 16:15:20
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description List
 * @class List
 * @extends React.PureComponent
 */
class List extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      isSort: false,
    };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    const nodes = React.Children.toArray(this.props.children);
    window.nodes = nodes;
    // sort
    if (this.state.isSort) {
      nodes.sort((a, b) => a.props.children.localeCompare(b.props.children));
    }
    console.log(nodes);

    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isSort: !this.state.isSort })}>
          {this.state.isSort ? "已排序" : "未排序"}
        </button>
        <div>{nodes}</div>
      </React.Fragment>
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
  const list = [
    "apple",
    "奥斯卡",
    "asoul",
    "bilibili",
    "转换元素",
    "baidutieba",
  ];
  return (
    <React.Fragment>
      <List>
        <div>apple</div>
        <div>汉字</div>
        <div>闭包</div>
        <div>SanaQwQ</div>
        <div>oranges</div>
        <div>GenshinImpact</div>
      </List>
      <List>
        {list.map((item) => {
          return <div key={item}>{item}</div>;
        })}
        <div>SanaQwQ</div>
        <div>oranges</div>
        <div>GenshinImpact</div>
      </List>
    </React.Fragment>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
