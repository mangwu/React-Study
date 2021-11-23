/**
 * @description 不要直接修改React中的State
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-23 10:12:48
 * @copyright © 2021 mangwu, All rights reserved.
 */
/**
 * @description 列表
 * @class ItemList
 * @extends React.PureComponent
 */
class ItemList extends React.PureComponent {
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <ul>
        {this.props.items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    );
  }
}
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
      items: [],
    };
    this.nextItemId = 0;
    this.makeItem = this.makeItem.bind(this);
    this.addItemImmutably = this.addItemImmutably.bind(this);
    this.addItemMutably = this.addItemMutably.bind(this);
  }
  /**
   * @method makeItem 创造一个新的列表项并使用
   * @returns void
   */
  makeItem() {
    // 列表项中的value值为随机小数
    return {
      id: this.nextItemId++,
      value: Math.random(),
    };
  }

  /**
   * @description
   * 正确的修改列表的方式：
   * 复制原始列表，添加一个新列表项后创建新的列表
   * @method addItemImmutably
   */
  addItemImmutably = () => {
    this.setState({
      items: [...this.state.items, this.makeItem()],
    });
  };

  /**
   * @description
   * 错误的修改列表的方式：
   * 直接修改列表，并且以可变模式设置回state中
   * @method addItemMutably
   */
  addItemMutably = () => {
    this.state.items.push(this.makeItem());
    this.setState({ items: this.state.items });
  };
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <button
          onClick={this.addItemImmutably}
          style={{
            background: "#2d8cf0",
            color: "#fff",
            border: "none",
            padding: "3px 8px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          不可变模式添加列表项(this.setState)
        </button>
        <button
          onClick={this.addItemMutably}
          style={{
            background: "#2d8cf0",
            color: "#fff",
            border: "none",
            padding: "3px 8px",
            borderRadius: "3px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          可变模式添加列表项(this.state)
        </button>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
