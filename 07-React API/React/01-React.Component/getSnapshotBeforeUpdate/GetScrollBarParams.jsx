/**
 * @description 使用getSnapshotBeforeUpdate生命周期函数获取提交到DOM前的快照，其中包含滚动条等信息
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-19 09:00:38
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description App
 * @class App
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          id: 0,
          text: "测试文本",
          color: "black",
        },
      ],
      text: "",
    };
    this.addItem = this.addItem.bind(this);
    this.listsRef = React.createRef();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps:");
    console.log("nextProps", nextProps);
    console.log("prevState", prevState);
    console.log("-----------------------");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate:");
    console.log("props", nextProps, this.props);
    console.log("state", nextState, this.state);
    console.log("-----------------------");
    return true;
  }
  /**
   * @method getSnapshotBeforeUpdate 预提交阶段获取快照的生命周期函数
   * @param {object} prevProps 上一个props
   * @param {object} prevState 是一个state
   * @returns {number | null}
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBefareUpdate");
    console.log("props", prevProps, this.props);
    console.log("state", prevState, this.state);
    console.log("-----------------------");
    // 判断是否为列表更新
    if (prevState.lists.length < this.state.lists.length) {
      const list = this.listsRef.current;
      console.log(list.scrollHeight, list.scrollTop);
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }
  /**
   * @method addItem 添加列表
   * @param {Event} e 提交时间
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
    console.log("-----------------------");
    // 快照不为空。说明添加了新的列表项；调整滚动位置使得新item不会挤压旧的items
    if (snapshot !== null) {
      const list = this.listsRef.current;
      console.log(list.scrollHeight, list.scrollTop);
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }
  addItem(e) {
    const rgb =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
    e.preventDefault();
    this.setState((state) => {
      return {
        lists: [
          ...state.lists,
          {
            id: state.lists.length,
            text: state.text,
            color: rgb,
          },
        ],
      };
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
        <h2>
          使用getSnapshotBeforeUpdate生命周期函数获取提交到DOM前的快照，其中包含滚动条等信息
        </h2>
        <div
          ref={this.listsRef}
          style={{
            height: "200px",
            width: "500px",
            overflow: "auto",
            padding: "2px",
            border: "1px solid gray",
          }}
        >
          <ul>
            {this.state.lists.map((item) => {
              return (
                <li key={item.id} style={{ color: item.color }}>
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
        <input
          type="text"
          name="text"
          id="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
        <input type="submit" value="提交" onClick={this.addItem} />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
