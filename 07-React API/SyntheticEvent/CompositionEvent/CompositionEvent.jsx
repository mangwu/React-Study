/**
 * @description 复合事件：用户间接输入文本时发生的事件
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-11 13:41:05
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
      value: "",
    };
  }
  /**
   * @description 渲染函数
   * @method render
   * @returns {React.ReactElement} react元素
   */
  render() {
    return (
      <div>
        <input
          type="text"
          name="text"
          id="text"
          defaultValue={this.state.value}
          onCompositionStart={(e) => console.log(e.data)}
          onCompositionUpdate={(e) => console.log(e.data)}
          onCompositionEnd={(e) => {
            this.setState({ value: e.data });
            console.log(e.data);
          }}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

