/**
 * @description 使用ComponentDidUpdate执行副作用：请求数据
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-19 18:17:25
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
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
      searchText: "",
      dataList: [],
      loading: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }
  /**
   * @method fetchData 获取数据
   * @param {string} query 搜索关键字
   */
  fetchData(query) {
    axios(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            loading: false,
            dataList: res.data.hits,
          });
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  componentDidUpdate(_preProps, preState) {
    if (
      preState.searchText !== this.state.searchText &&
      this.state.searchText !== ""
    ) {
      this.setState({ loading: true });
      this.fetchData(this.state.searchText);
    }
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <h2>使用ComponentDidUpdate执行副作用：请求数据</h2>
        <input
          type="search"
          name="search"
          id="search"
          value={this.state.searchText}
          onChange={(e) => this.setState({ searchText: e.target.value })}
        />
        {/* <button onClick={this.}>搜索</button> */}
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <ul>
            {this.state.dataList.map((item) => (
              <li key={item.objectID}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
