/**
 * @description 在Render函数中暂存计算结果：避免使用派生state存储基于props的计算结果
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-12 10:06:47
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 父组件，继承PureComponent避免重复更新
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
          title:
            "为何今年「双11」喜报式实时成交额不见了？如何看待「双11」逐渐趋于理性消费？",
          description:
            "11月11日，「双11」的购物高潮已经开启，但今年「双11」出现了一些新变化。截至目前，未见各大电商平台公布实时成交额数据。这是为什么？此外，今年「双11」提前开售、活动期延长以及直播电商唱重头戏等新玩法仍然层出不穷。",
        },
        {
          id: 1,
          title:
            "2022 世预赛亚洲区 12 强赛国足 1:1 战平阿曼，如何评价本场比赛？",
          description:
            "上半场，朱辰杰旱地拔葱头球摆渡助攻武磊抢射得手，洛国富头槌被扑，颜骏凌献关键扑救。下半场，武磊错失杀死比赛良机，阿姆贾德-哈尔西头球后蹭破门扳平比分。",
        },
      ],
      title: "",
      description: "",
    };
    this.addItemInLists = this.addItemInLists.bind(this);
  }
  /**
   * @method addItemInLists 更新lists
   * @returns void
   */
  addItemInLists(e) {
    e.preventDefault();
    this.setState((preState) => {
      return {
        lists: [
          ...preState.lists,
          {
            id: preState.lists.length,
            title: preState.title,
            description: preState.description,
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
          在Render函数中暂存计算结果：避免使用派生state存储基于props的计算结果
        </h2>
        <form onSubmit={this.addItemInLists}>
          <label htmlFor="title">title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <br />
          <label htmlFor="description">描述：</label>
          <input
            type="textarea"
            name="description"
            id="description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <br />
          <input type="submit" value="提交" />
        </form>
        <ul>
          {this.state.lists.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
        <hr />
        <FilteredLists lists={this.state.lists} />
      </React.Fragment>
    );
  }
}
/**
 * @description 过滤列表
 * @class FilteredLists
 * @extends React.PureComponent
 */
class FilteredLists extends React.PureComponent {
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
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    const fileredLists = this.props.lists.filter(
      (item) =>
        item.title.includes(this.state.filterText) ||
        item.description.includes(this.state.filterText)
    );
    return (
      <React.Fragment>
        <label htmlFor="search">搜索:</label>
        <input
          type="search"
          name="search"
          id="search"
          value={this.state.filterText}
          onChange={(e) => this.setState({ filterText: e.target.value })}
        />
        <ul>
          {fileredLists.map((item) => {
            return <li key={item.title}>{item.title}</li>
          })}
        </ul>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
