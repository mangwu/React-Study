/**
 * @description 使用memoize one保存上一次计算结果，以节省重写渲染后计算结果未改变损失的性能
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-15 10:04:14
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 父组件
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
      lists: [
        {
          id: 0,
          title: "我老公和女同事的聊天记录，请问大家这算暧昧吗？",
          description:
            "两周前我老公主动和我讲一个大哥请他吃麦当劳，等到月初我看了一下花呗的账单有麦当劳的支出，随口问了句不是大哥请你吗？他和我说那个大哥总是请他，我说同事之间确实不要吝啬。",
        },
        {
          id: 1,
          title:
            "所有的粒子都是无意识的，那它们堆积起来是怎么形成有意识的生命的？",
          description:
            "还是说粒子本来就有微弱的意识，海量堆积起来通过密集输送网络把意识给放大了？",
        },
      ],
      title: "",
      description: "",
    };
    this.addItem = this.addItem.bind(this);
  }
  /**
   * @method addItem 添加项目
   * @param {Event} e 表单提交事件
   */
  addItem(e) {
    e.preventDefault();
    this.setState((state) => {
      return {
        lists: [
          ...state.lists,
          {
            id: state.lists.length,
            title: state.title,
            description: state.description,
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
          使用memoize
          one保存上一次计算结果，以节省重写渲染后计算结果未改变损失的性能
        </h2>
        <form onSubmit={this.addItem}>
          <label htmlFor="title">标题</label>
          <input
            type="text"
            name="title"
            id="tile"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <label htmlFor="description">描述</label>
          <input
            type="text"
            name="description"
            id="description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <input type="submit" value="提交" />
          <br />
        </form>
        <ul>
          {this.state.lists.map((item) => {
            return <li key={item.id}>{item.description}</li>;
          })}
        </ul>
        <FilterLists lists={this.state.lists}></FilterLists>
      </React.Fragment>
    );
  }
}
/**
 * @description 过滤子组件
 * @class FilterLists
 * @extends React.PureComponent
 */
class FilterLists extends React.PureComponent {
  /**
   * @description 构造函数
   * @method constructor
   * @param {object} props - 属性
   * @returns void
   */
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
    // 记忆方法
    this.filter = memoizeOne((lists, filterText) =>
      lists.filter((item) => item.title.includes(filterText))
    );
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    // 只有再props.lists或state.filterText改变时才计算过滤结果，否则重复使用上一次值
    const filteredList = this.filter(this.props.lists, this.state.filterText);
    return (
      <div>
        <input
          type="search"
          name="search"
          id="search"
          value={this.state.filterText}
          onChange={(e) => this.setState({ filterText: e.target.value })}
        />
        <ul>
          {filteredList.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
