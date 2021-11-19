/**
 * @description 使用派生state作为Memoization存储props的缓存计算出的数据：一种不推荐的方案
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-09 19:33:25
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
          text: "日媒发文反省为何日本国宝级科学家流向中国，如何看待这一现象？",
          description: "日本“国宝级”科学家、国际上被誉为“光催化之父”的藤岛昭前不久率研究团队加盟上海理工大学。消息一出，就引起日本新一轮人才外流恐慌。日媒7日发文反省“为什么日本的‘超级大脑’流向中国”。文章讲述了67岁的北海道大学名誉教授上田多门的故事。"
        },
        {
          id: 1,
          text: "如何看待丁香医生《谢谢你抽电子烟：一场瞄准年轻人的健康骗局》一文？",
          description: "丁香医生10w+文章炮轰电子烟，数据是否可靠？电子烟到底是不是瞄准年轻人的骗局？"
        }
      ],
      text: "",
      description: "",
    }
    this.addListItem = this.addListItem.bind(this);
  }
  /**
   * @method addListItem
   */
  addListItem(e) {
    e.preventDefault();
    this.setState((preState) => {
      return {
        lists: [
          ...preState.lists,
          {
            id: preState.lists.length,
            text: preState.text,
            description: preState.description,
          }
        ]
      }
    })
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>使用派生state作为Memoization存储基于props计算出的数据：一种不推荐的方案</h2>
        <form onSubmit={this.addListItem}>
          <label htmlFor="title">标题: </label>
          <input
            type="text" name="title" id="title"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <br />
          <label htmlFor="description" >描述: </label>
          <textarea name="description" id="description"
            style={{ verticalAlign: "text-top" }}
            cols="30" rows="10"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}>
          </textarea>
          <br />
          <input type="submit" value="提交" style={{ marginLeft: "300px" }} />
          <ul>
            {this.state.lists.map((item) => {
              return (
                <li key={item.id}>{item.text}</li>
              )
            })}
          </ul>
        </form>
        <hr />
        <FilterLists lists={this.state.lists} />
      </div>
    )
  }
}
/**
 * @description 过滤子组件
 * @class FilterLists
 * @extends React.Component
 */
class FilterLists extends React.Component {
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
      prevFilterText: "",
      prevLists: props.lists,
      filteredLists: props.lists,
    };
  }
  static getDerivedStateFromProps(nextProps, preState) {
    console.log(nextProps, preState);
    // 列表变化或者过滤文本变化都需要重新渲染
    // 需要存储上一个state中的过滤文本和上一个prop中的列表数据来检查变化
    if (nextProps.lists !== preState.prevLists
      || preState.filterText !== preState.prevFilterText) {
      // 返回更新的数据
      console.log({
        prevLists: nextProps.lists,
        prevFilterText: preState.filterText,
        filteredLists: nextProps.lists.filter(item => item.text.includes(preState.filterText)),
      });
      return {
        prevLists: nextProps.lists,
        prevFilterText: preState.filterText,
        filteredLists: nextProps.lists.filter(item => item.text.includes(preState.filterText)),
      }
    }
    return null;
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <label htmlFor="search">搜索框: </label>
        <input type="search" name="search" id="search"
          value={this.state.filterText}
          onChange={(e) => this.setState({ filterText: e.target.value })} />
        <ul>
          {this.state.filteredLists.map((item) => {
            return <li key={item.id}>{item.text}</li>
          })}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
